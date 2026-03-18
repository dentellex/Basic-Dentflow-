// =====================================================
// نظام الصلاحيات المتقدم - Roles & Permissions
// =====================================================

// التحقق من الصلاحيات
function hasPermission(permission) {
    if (typeof currentUser === 'undefined' || !currentUser) return false;
    
    const role = currentUser.role || currentUser.type || 'patient';
    
    const permissions = {
        'admin': ['all', 'manage_users', 'view_only', 'view_all', 'create_invoice', 'edit_appointment', 'delete_data', 'suspend_doctor', 'view_audit_logs'],
        'doctor': ['edit_diagnosis', 'view_all', 'create_invoice', 'edit_appointment', 'add_notes', 'view_own_stats'],
        'assistant': ['view_all', 'add_patient_data', 'edit_appointment', 'view_medical_history'],
        'receptionist': ['view_basic', 'edit_appointment', 'add_patient'],
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
    
    // الوصول إلى users من النطاق العام
    let totalUsers = 0;
    let hasAdmin = false;
    
    if (typeof users !== 'undefined' && users && Array.isArray(users)) {
        totalUsers = users.length;
        // التحقق من وجود مدير
        hasAdmin = users.some(u => u.role === 'admin' || u.type === 'admin');
    }
    
    console.log('📊 عدد المستخدمين:', totalUsers);
    console.log('👑 يوجد مدير؟', hasAdmin);
    
    // إذا كان لا يوجد مدير بعد
    if (!hasAdmin) {
        console.log('👉 لا يوجد مدير - نعرض مدير ومريض');
        return ['patient', 'admin'];
    }
    
    // إذا كان هناك مدير بالفعل
    console.log('👉 يوجد مدير - نعرض مريض فقط');
    return ['patient'];
}

// إظهار/إخفاء حقل العيادة حسب الدور
function toggleRoleField() {
    const type = document.getElementById('regType')?.value;
    const clinicField = document.getElementById('clinicField');
    const doctorField = document.getElementById('doctorField');
    
    if (clinicField) {
        if (type === 'doctor' || type === 'admin') {
            clinicField.style.display = 'block';
        } else {
            clinicField.style.display = 'none';
        }
    }
    
    if (doctorField) {
        doctorField.style.display = 'none';
    }
}

// التحقق من صلاحية التعديل
function canEdit(patientId) {
    if (!currentUser) return false;
    
    const role = currentUser.role || currentUser.type;
    
    // المدير: view only (ميقدرش يعدل)
    if (role === 'admin') return false;
    
    // الطبيب: يقدر يعدل
    if (role === 'doctor') return true;
    
    // المساعد: لا يعدل (يبقى view only)
    if (role === 'assistant') return false;
    
    // المريض: يقرأ فقط ملفه
    if (role === 'patient') {
        return currentUser.id === patientId;
    }
    
    return false;
}

// التحقق من صلاحية تعليق طبيب
function canSuspendDoctor() {
    return hasPermission('suspend_doctor');
}

// الحصول على قائمة الأدوار للتقييم
function getAvailableRolesForRating() {
    return ['patient'];
}

// التحقق مما إذا كان المستخدم مسؤولاً
function isAdmin() {
    const role = currentUser?.role || currentUser?.type;
    return role === 'admin';
}

// التحقق مما إذا كان المستخدم طبيباً
function isDoctor() {
    const role = currentUser?.role || currentUser?.type;
    return role === 'doctor';
}

// التحقق مما إذا كان المستخدم مساعداً
function isAssistant() {
    const role = currentUser?.role || currentUser?.type;
    return role === 'assistant';
}

// التحقق مما إذا كان المستخدم موظف استقبال
function isReceptionist() {
    const role = currentUser?.role || currentUser?.type;
    return role === 'receptionist';
}

// التحقق مما إذا كان المستخدم مريضاً
function isPatient() {
    const role = currentUser?.role || currentUser?.type;
    return role === 'patient';
}
// ✅ نهاية الملف - لا يوجد أقواس زائدة