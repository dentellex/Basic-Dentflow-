// =====================================================
// نظام الصلاحيات المتقدم - Roles & Permissions
// =====================================================

// الوصول إلى users من localStorage مباشرة
function getUsers() {
    try {
        return JSON.parse(localStorage.getItem('dentflow_users')) || [];
    } catch(e) {
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

// الحصول على الأدوار المتاحة للتسجيل
function getAvailableRoles() {
    console.log('🔍 getAvailableRoles is called');
    
    // جلب المستخدمين مباشرة من localStorage
    const users = getUsers();
    const totalUsers = users.length;
    
    console.log('📊 عدد المستخدمين في localStorage:', totalUsers);
    
    // أول مرة في الموقع (لا يوجد مستخدمين)
    if (totalUsers === 0) {
        console.log('👉 أول مرة - نعرض مدير ومريض فقط');
        return ['patient', 'admin'];
    }
    
    // التحقق من وجود مدير
    const hasAdmin = users.some(u => u.role === 'admin' || u.type === 'admin');
    
    if (!hasAdmin) {
        console.log('👉 لا يوجد مدير - نعرض مدير ومريض');
        return ['patient', 'admin'];
    }
    
    // بعد وجود مدير
    console.log('👉 يوجد مدير - نعرض مريض فقط');
    return ['patient'];
}

// إظهار/إخفاء حقل العيادة حسب الدور
function toggleRoleField() {
    const type = document.getElementById('regType')?.value;
    const clinicField = document.getElementById('clinicField');
    
    if (clinicField) {
        if (type === 'doctor' || type === 'admin') {
            clinicField.style.display = 'block';
        } else {
            clinicField.style.display = 'none';
        }
    }
}

// التحقق من صلاحية التعديل
function canEdit(patientId) {
    if (!currentUser) return false;
    
    const role = currentUser.role || currentUser.type;
    
    if (role === 'admin') return false;
    if (role === 'doctor') return true;
    if (role === 'assistant') return false;
    if (role === 'patient') {
        return currentUser.id === patientId;
    }
    
    return false;
}
