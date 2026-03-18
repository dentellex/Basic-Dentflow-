// =====================================================
// نظام الصلاحيات المتقدم - Roles & Permissions
// =====================================================

// دالة مساعدة للحصول على المستخدمين
function getStoredUsers() {
    try {
        const stored = localStorage.getItem('dentflow_users');
        return stored ? JSON.parse(stored) : [];
    } catch (e) {
        console.error('خطأ في قراءة المستخدمين:', e);
        return [];
    }
}

// التحقق من الصلاحيات
function hasPermission(permission) {
    if (typeof currentUser === 'undefined' || !currentUser) return false;
    
    const role = currentUser.role || currentUser.type || 'patient';
    
    const permissions = {
        'admin': ['all', 'manage_users', 'view_only', 'view_all', 'create_invoice', 'edit_appointment', 'delete_data'],
        'doctor': ['edit_diagnosis', 'view_all', 'create_invoice', 'edit_appointment'],
        'assistant': ['view_all', 'add_patient_data', 'edit_appointment'],
        'receptionist': ['view_basic', 'edit_appointment'],
        'patient': ['view_own']
    };
    
    if (permission === 'all') return role === 'admin';
    if (permission === 'view_all') return ['admin', 'doctor', 'assistant'].includes(role);
    
    return permissions[role]?.includes(permission) || false;
}

// الحصول على اسم الدور بالعربية
function getRoleName(role) {
    const roles = {
        'admin': 'مدير النظام',
        'doctor': 'طبيب',
        'assistant': 'مساعد',
        'receptionist': 'استقبال',
        'patient': 'مريض'
    };
    return roles[role] || role;
}

// ========== دالة الأدوار المتاحة (مضمونة 100%) ==========
function getAvailableRoles() {
    console.log('🔍 getAvailableRoles is called');
    
    // جلب المستخدمين من localStorage مباشرة
    const users = getStoredUsers();
    const totalUsers = users.length;
    
    console.log('📊 عدد المستخدمين:', totalUsers);
    
    // ===== المنطق المطلوب =====
    // أول مرة (لا يوجد مستخدمين) → مدير + مريض
    if (totalUsers === 0) {
        console.log('👉 لا يوجد مستخدمين - نعرض مدير ومريض');
        return ['patient', 'admin'];
    }
    
    // التحقق من وجود مدير
    const hasAdmin = users.some(user => 
        user.role === 'admin' || user.type === 'admin'
    );
    
    // إذا لم يكن هناك مدير بعد → نعرض مدير ومريض
    if (!hasAdmin) {
        console.log('👉 لا يوجد مدير - نعرض مدير ومريض');
        return ['patient', 'admin'];
    }
    
    // يوجد مدير بالفعل → مريض فقط
    console.log('👉 يوجد مدير - نعرض مريض فقط');
    return ['patient'];
}

// إظهار/إخفاء حقل العيادة حسب الدور
function toggleRoleField() {
    const type = document.getElementById('regType')?.value;
    const clinicField = document.getElementById('clinicField');
    
    if (clinicField) {
        clinicField.style.display = (type === 'doctor' || type === 'admin') ? 'block' : 'none';
    }
}

// التحقق من صلاحية التعديل
function canEdit(patientId) {
    if (!currentUser) return false;
    
    const role = currentUser.role || currentUser.type;
    
    if (role === 'admin') return false;
    if (role === 'doctor') return true;
    if (role === 'assistant') return false;
    if (role === 'patient') return currentUser.id === patientId;
    
    return false;
}

// دالة التحقق من وجود مدير (مساعدة)
function isAdminExists() {
    const users = getStoredUsers();
    return users.some(user => user.role === 'admin' || user.type === 'admin');
}

// دالة الحصول على عدد المستخدمين
function getUsersCount() {
    return getStoredUsers().length;
}

console.log('✅ permissions.js loaded successfully');
