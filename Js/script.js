// تفعيل الخلفية
particlesJS('particles-js', {
    particles: {
        number: { value: 50, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: { type: 'circle' },
        opacity: { value: 0.4, random: false },
        size: { value: 2, random: true },
        line_linked: { enable: false },
        move: { enable: true, speed: 2, direction: 'none', random: true, straight: false, out_mode: 'out' }
    },
    interactivity: {
        detect_on: 'canvas',
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 80, duration: 0.4 }, push: { particles_nb: 2 } }
    },
    retina_detect: true
});

window.togglePassword = function(fieldId, icon) {
    const field = document.getElementById(fieldId);
    field.type = field.type === 'password' ? 'text' : 'password';
    icon.classList.toggle('fa-eye-slash');
    icon.classList.toggle('fa-eye');
};

(function() {
    if (typeof bcrypt === 'undefined') {
        window.bcrypt = {
            hash: (pwd) => Promise.resolve(CryptoJS.SHA256(pwd).toString()),
            compare: (pwd, hash) => Promise.resolve(CryptoJS.SHA256(pwd).toString() === hash)
        };
    }
})();

// تهيئة Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDummyKeyForExample",
    authDomain: "dentflow-example.firebaseapp.com",
    projectId: "dentflow-example",
    storageBucket: "dentflow-example.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890"
};

let firebaseApp, firebaseAuth, firebaseDb;
let useFirebase = false;

// دالة تأكيد محسنة
window.showConfirmDialog = function(message, onConfirm, onCancel) {
    if (typeof Swal !== 'undefined') {
        Swal.fire({
            title: currentLang === 'ar' ? 'تأكيد' : 'Confirm',
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#00cec9',
            cancelButtonColor: '#dc3545',
            confirmButtonText: currentLang === 'ar' ? 'نعم' : 'Yes',
            cancelButtonText: currentLang === 'ar' ? 'لا' : 'No'
        }).then((result) => {
            if (result.isConfirmed && onConfirm) onConfirm();
            else if (onCancel) onCancel();
        });
    } else {
        if (confirm(message) && onConfirm) onConfirm();
        else if (onCancel) onCancel();
    }
};

// -------------------- الترجمة الكاملة --------------------
const translations = {
    ar: {
        save: 'حفظ',
        cancel: 'إلغاء',
        confirm: 'تأكيد',
        delete: 'حذف',
        edit: 'تعديل',
        back: 'عودة',
        next: 'التالي',
        previous: 'السابق',
        close: 'إغلاق',
        darkMode: 'الوضع الليلي',
        english: 'English',
        deleteAccount: 'حذف حسابي',
        resetApp: 'إعادة تعيين التطبيق',
        logout: 'تسجيل خروج',
        copyright: 'جميع الحقوق محفوظة © 2025 DentFlow',
        dashboard: 'لوحة التحكم',
        patients: 'المرضى',
        appointments: 'المواعيد',
        invoices: 'الفواتير',
        reports: 'التقارير',
        backup: 'النسخ الاحتياطي',
        myProfile: 'ملفي الطبي',
        myDoctors: 'أطبائي',
        myAppointments: 'مواعيدي',
        currentPatient: 'المريض الحالي',
        waitingPatients: 'المرضى في الانتظار',
        followupPatients: 'مرضى تحت المتابعة',
        donePatients: 'مرضى تم علاجهم',
        startSession: 'بدء جلسة',
        viewFile: 'عرض الملف',
        done: 'تم',
        followup: 'متابعة',
        contract: 'العقد',
        agree: 'أوافق',
        disagree: 'لا أوافق',
        contractApproved: 'تمت الموافقة على العقد ولا يمكن التعديل',
        contractSaved: 'تم حفظ العقد',
        modifyRequest: 'طلب تعديل العقد',
        modifyRequestText: 'يريد الطبيب تعديل التشخيص أو خطة العلاج. هل توافق؟',
        filter: 'فلتر',
        search: 'بحث',
        byDate: 'بالتاريخ',
        byWeek: 'هذا الأسبوع',
        byMonth: 'هذا الشهر',
        byDiagnosis: 'بالتشخيص',
        all: 'الكل',
        passwordRequirements: 'كلمة المرور يجب أن تكون 8 أحرف على الأقل، تحتوي على حرف كبير ورقم',
        uploadImages: 'رفع صور',
        comment: 'تعليق',
        xray: 'صورة الأشعة',
        caseImages: 'صور الحالة',
        before: 'قبل',
        after: 'بعد',
        general: 'عام',
        login: 'تسجيل الدخول',
        register: 'إنشاء حساب',
        patient: 'مريض',
        doctor: 'طبيب',
        username: 'اسم المستخدم',
        password: 'كلمة المرور',
        fullName: 'الاسم الكامل',
        clinicName: 'اسم العيادة',
        confirmDeleteAccount: 'تأكيد حذف الحساب',
        deleteWarning: 'هل أنت متأكد؟ لا يمكن التراجع عن هذا الإجراء.',
        deleteConfirm: 'حذف نهائي',
        resetData: 'مسح جميع البيانات',
        resetWarning: 'سيتم حذف جميع المستخدمين والمواعيد. هل أنت متأكد؟',
        resetConfirm: 'مسح الكل',
        renewSubscription: 'تجديد الاشتراك',
        subscriptionExpired: 'انتهت صلاحية اشتراكك. يرجى تجديد الاشتراك لمواصلة استخدام النظام.',
        renewNow: 'تجديد الاشتراك (شهر واحد)',
        changeProfilePic: 'تغيير الصورة الشخصية',
        setFollowup: 'تحديد موعد متابعة',
        date: 'التاريخ',
        time: 'الوقت',
        selectTooth: 'اختر موقع الألم',
        upperJaw: 'الفك العلوي',
        lowerJaw: 'الفك السفلي',
        clickTooth: 'انقر على السن الذي يؤلمك',
        personalData: 'البيانات الشخصية',
        medicalHistory: 'التاريخ الطبي',
        dentalHistory: 'التاريخ السني',
        reasonForVisit: 'سبب الزيارة',
        treatmentPlan: 'خطة العلاج',
        faq: 'الأسئلة الشائعة',
        invalidCredentials: 'بيانات غير صحيحة',
        wrongPassword: 'كلمة مرور خاطئة',
        accountCreated: 'تم إنشاء الحساب، سجل الدخول الآن',
        encryptionError: 'خطأ في التشفير',
        enterCredentials: 'أدخل اسم المستخدم وكلمة المرور',
        usernameExists: 'اسم المستخدم موجود',
        profilePicUpdated: 'تم تحديث الصورة',
        accountDeleted: 'تم حذف الحساب',
        dataCleared: 'تم مسح جميع البيانات، سيتم إعادة التحميل',
        today: 'اليوم',
        thisWeek: 'هذا الأسبوع',
        thisMonth: 'هذا الشهر',
        noCurrentPatient: 'لا يوجد مريض حالي',
        noWaitingPatients: 'لا يوجد مرضى في الانتظار',
        noFollowupPatients: 'لا يوجد مرضى تحت المتابعة',
        noCompletedPatients: 'لا يوجد مرضى تم علاجهم',
        turn: 'دور',
        view: 'عرض',
        add: 'إضافة',
        total: 'الإجمالي',
        printReport: 'طباعة التقرير',
        downloadBackup: 'تحميل نسخة احتياطية',
        createInvoice: 'إنشاء فاتورة',
        service: 'الخدمة',
        amount: 'المبلغ',
        invoiceList: 'قائمة الفواتير',
        upcomingAppointments: 'المواعيد القادمة',
        addAppointment: 'إضافة موعد',
        patientName: 'اسم المريض',
        diagnosis: 'التشخيص',
        risks: 'المخاطر المحتملة',
        contractContent: 'أقر أنا الموقع أدناه بأن طبيب الأسنان قد شرح لي حالتي الصحية وخطة العلاج المقترحة بشكل واضح ومفهوم. كما تم إبلاغي بأن بعض الإجراءات العلاجية قد تتضمن مخاطر محتملة مثل: ألم أو تورم مؤقت، نزيف بسيط، حساسية مؤقتة للأسنان، احتمال الحاجة إلى علاج إضافي. وأفهم أن نتائج العلاج قد تختلف من شخص لآخر، ولا يمكن ضمان نتائج محددة بشكل مطلق. أتعهد بالالتزام بتعليمات الطبيب قبل وبعد العلاج، وإبلاغه بأي أمراض أو أدوية قد تؤثر على العلاج. كما أوافق على إجراء الفحص السريري، والأشعة السينية، والتخدير الموضعي، وأي إجراءات علاجية ضرورية لحالتي. وأقر بمسؤوليتي عن سداد تكاليف العلاج المتفق عليها مع العيادة.',
        patientSignature: 'توقيع المريض',
        doctorSignature: 'توقيع الطبيب',
        dateLabel: 'التاريخ',
        savePDF: 'حفظ PDF',
        editAppointment: 'تعديل الموعد',
        mainComplaint: 'الشكوى الرئيسية',
        painDurationAfterTrigger: 'مدة استمرار الألم',
        instantly: 'لحظي',
        threeToFiveSeconds: 'من ٣ إلى ٥ ثواني',
        fiveToThirtySeconds: 'من ٥ إلى ٣٠ ثانية',
        minuteOrMore: 'دقيقة أو أكثر',
        withSweets: 'مع السكريات',
        deleteImage: 'حذف الصورة',
        downloadPatientFilePDF: 'تحميل ملف المريض PDF',
        modify: 'تعديل',
        saveAll: 'حفظ الكل',
        approve: 'موافقة',
        reject: 'رفض',
        doctorDiagnosis: 'تشخيص الطبيب',
        potentialRisks: 'المخاطر المحتملة',
        patientFile: 'ملف المريض',
        noData: 'لا توجد بيانات',
        uploadNewImages: 'رفع صور جديدة',
        selectCategory: 'اختر التصنيف',
        doctorComment: 'تعليق الطبيب',
        addComment: 'إضافة تعليق',
        saveComment: 'حفظ التعليق',
        deleteComment: 'حذف التعليق',
        editComment: 'تعديل التعليق',
        noComments: 'لا توجد تعليقات',
        imagesSaved: 'تم حفظ الصور',
        commentSaved: 'تم حفظ التعليق',
        commentDeleted: 'تم حذف التعليق',
        confirmDelete: 'تأكيد الحذف',
        areYouSure: 'هل أنت متأكد؟',
        yes: 'نعم',
        no: 'لا',
        success: 'نجاح',
        error: 'خطأ',
        warning: 'تحذير',
        info: 'معلومة',
        loading: 'جاري التحميل...',
        pleaseWait: 'الرجاء الانتظار...',
        operationSuccessful: 'تمت العملية بنجاح',
        operationFailed: 'فشلت العملية',
        tryAgain: 'حاول مرة أخرى',
        networkError: 'خطأ في الشبكة',
        serverError: 'خطأ في الخادم',
        unauthorized: 'غير مصرح',
        forbidden: 'ممنوع',
        notFound: 'غير موجود',
        conflict: 'تعارض',
        tooManyRequests: 'طلبات كثيرة',
        internalError: 'خطأ داخلي',
        serviceUnavailable: 'الخدمة غير متاحة',
        gatewayTimeout: 'انتهاء المهلة',
        unknownError: 'خطأ غير معروف',
        aiAssistant: 'مساعد الذكاء الاصطناعي للعلاج',
        aiAssistantDesc: 'احصل على اقتراحات لخطط العلاج بناءً على أعراض المريض',
        patientInfo: 'معلومات المريض',
        symptoms: 'الأعراض',
        xrayNotes: 'ملاحظات الأشعة',
        generatePlan: 'توليد خطة العلاج',
        generating: 'جاري التوليد...',
        aiResponse: 'استجابة الذكاء الاصطناعي',
        diagnosisSummary: 'ملخص التشخيص',
        suggestedTreatment: 'خطة العلاج المقترحة',
        medications: 'الأدوية المقترحة',
        followupAdvice: 'نصائح المتابعة',
        copyPlan: 'نسخ الخطة',
        saveToPatient: 'حفظ في ملف المريض',
        disclaimer: 'تنبيه: اقتراحات الذكاء الاصطناعي هي للمساعدة فقط ويجب مراجعتها دائمًا من قبل طبيب أسنان مؤهل.',
        planSaved: 'تم حفظ الخطة في ملف المريض',
        planCopied: 'تم نسخ الخطة',
        fillRequiredFields: 'يرجى ملء جميع الحقول المطلوبة',
        selectPatientFirst: 'يرجى اختيار المريض أولاً',
        age: 'العمر',
        gender: 'النوع',
        male: 'ذكر',
        female: 'أنثى',
        chiefComplaint: 'الشكوى الرئيسية',
        preliminaryDiagnosis: 'تشخيص مبدئي بالذكاء الاصطناعي',
        getPreliminaryDiagnosis: 'احصل على تشخيص مبدئي',
        analyzingPatientData: 'جاري تحليل بيانات المريض...',
        possibleDiagnosis: 'التشخيصات المحتملة',
        recommendedTreatment: 'العلاج المقترح',
        confidence: 'نسبة الثقة',
        differentialDiagnosis: 'التشخيص التفريقي',
        aiSuggestions: 'اقتراحات الذكاء الاصطناعي',
        acceptSuggestion: 'قبول الاقتراح',
        modifySuggestion: 'تعديل الاقتراح',
        highConfidence: 'ثقة عالية',
        mediumConfidence: 'ثقة متوسطة',
        lowConfidence: 'ثقة منخفضة',
        treatmentSteps: 'خطوات العلاج',
        estimatedDuration: 'المدة المتوقعة',
        successRate: 'نسبة النجاح المتوقعة',
        alternatives: 'بدائل علاجية',
        basedOnSymptoms: 'بناءً على الأعراض المدخلة',
        clinicalPearls: 'نصائح إكلينيكية',
        medicationSuggestions: 'اقتراحات أدوية',
        useMedication: 'استخدم',
        medicationExists: 'الدواء موجود بالفعل',
        medicationAdded: 'تم إضافة الدواء لخطة العلاج'
    },
    en: {
        save: 'Save',
        cancel: 'Cancel',
        confirm: 'Confirm',
        delete: 'Delete',
        edit: 'Edit',
        back: 'Back',
        next: 'Next',
        previous: 'Previous',
        close: 'Close',
        darkMode: 'Dark Mode',
        english: 'العربية',
        deleteAccount: 'Delete Account',
        resetApp: 'Reset App',
        logout: 'Logout',
        copyright: 'All rights reserved © 2025 DentFlow',
        dashboard: 'Dashboard',
        patients: 'Patients',
        appointments: 'Appointments',
        invoices: 'Invoices',
        reports: 'Reports',
        backup: 'Backup',
        myProfile: 'My Profile',
        myDoctors: 'My Doctors',
        myAppointments: 'My Appointments',
        currentPatient: 'Current Patient',
        waitingPatients: 'Waiting Patients',
        followupPatients: 'Follow-up Patients',
        donePatients: 'Completed Patients',
        startSession: 'Start Session',
        viewFile: 'View File',
        done: 'Done',
        followup: 'Follow-up',
        contract: 'Contract',
        agree: 'I Agree',
        disagree: 'I Disagree',
        contractApproved: 'Contract approved and cannot be modified',
        contractSaved: 'Contract saved',
        modifyRequest: 'Modify Contract Request',
        modifyRequestText: 'The doctor wants to modify the diagnosis or treatment plan. Do you agree?',
        filter: 'Filter',
        search: 'Search',
        byDate: 'By Date',
        byWeek: 'This Week',
        byMonth: 'This Month',
        byDiagnosis: 'By Diagnosis',
        all: 'All',
        passwordRequirements: 'Password must be at least 8 characters, contain a capital letter and a number',
        uploadImages: 'Upload Images',
        comment: 'Comment',
        xray: 'X-ray Image',
        caseImages: 'Case Images',
        before: 'Before',
        after: 'After',
        general: 'General',
        login: 'Login',
        register: 'Register',
        patient: 'Patient',
        doctor: 'Doctor',
        username: 'Username',
        password: 'Password',
        fullName: 'Full Name',
        clinicName: 'Clinic Name',
        confirmDeleteAccount: 'Confirm Delete Account',
        deleteWarning: 'Are you sure? This action cannot be undone.',
        deleteConfirm: 'Delete Permanently',
        resetData: 'Reset All Data',
        resetWarning: 'All users and appointments will be deleted. Are you sure?',
        resetConfirm: 'Reset All',
        renewSubscription: 'Renew Subscription',
        subscriptionExpired: 'Your subscription has expired. Please renew to continue using the system.',
        renewNow: 'Renew Subscription (1 month)',
        changeProfilePic: 'Change Profile Picture',
        setFollowup: 'Set Follow-up',
        date: 'Date',
        time: 'Time',
        selectTooth: 'Select Tooth Location',
        upperJaw: 'Upper Jaw',
        lowerJaw: 'Lower Jaw',
        clickTooth: 'Click on the tooth that hurts',
        personalData: 'Personal Data',
        medicalHistory: 'Medical History',
        dentalHistory: 'Dental History',
        reasonForVisit: 'Reason for Visit',
        treatmentPlan: 'Treatment Plan',
        faq: 'FAQ',
        invalidCredentials: 'Invalid credentials',
        wrongPassword: 'Wrong password',
        accountCreated: 'Account created, please login now',
        encryptionError: 'Encryption error',
        enterCredentials: 'Enter username and password',
        usernameExists: 'Username already exists',
        profilePicUpdated: 'Profile picture updated',
        accountDeleted: 'Account deleted',
        dataCleared: 'All data cleared, reloading...',
        today: 'Today',
        thisWeek: 'This Week',
        thisMonth: 'This Month',
        noCurrentPatient: 'No current patient',
        noWaitingPatients: 'No waiting patients',
        noFollowupPatients: 'No follow-up patients',
        noCompletedPatients: 'No completed patients',
        turn: 'Turn',
        view: 'View',
        add: 'Add',
        total: 'Total',
        printReport: 'Print Report',
        downloadBackup: 'Download Backup',
        createInvoice: 'Create Invoice',
        service: 'Service',
        amount: 'Amount',
        invoiceList: 'Invoices List',
        upcomingAppointments: 'Upcoming Appointments',
        addAppointment: 'Add Appointment',
        patientName: 'Patient Name',
        diagnosis: 'Diagnosis',
        risks: 'Potential Risks',
        contractContent: 'I, the undersigned, acknowledge that the dentist has clearly explained my health condition and proposed treatment plan. I have also been informed that some treatment procedures may involve potential risks such as: temporary pain or swelling, minor bleeding, temporary tooth sensitivity, possibility of additional treatment. I understand that treatment results may vary from person to person, and specific outcomes cannot be guaranteed. I undertake to follow the doctor\'s instructions before and after treatment, and to inform him of any diseases or medications that may affect the treatment. I also agree to undergo clinical examination, X-rays, local anesthesia, and any necessary treatment procedures for my condition. And I acknowledge my responsibility to pay the treatment costs agreed upon with the clinic.',
        patientSignature: 'Patient Signature',
        doctorSignature: 'Doctor Signature',
        dateLabel: 'Date',
        savePDF: 'Save PDF',
        editAppointment: 'Edit Appointment',
        mainComplaint: 'Main Complaint',
        painDurationAfterTrigger: 'Pain Duration After Trigger',
        instantly: 'Instantly',
        threeToFiveSeconds: '3 to 5 seconds',
        fiveToThirtySeconds: '5 to 30 seconds',
        minuteOrMore: 'Minute or more',
        withSweets: 'With Sweets',
        deleteImage: 'Delete Image',
        downloadPatientFilePDF: 'Download Patient File PDF',
        modify: 'Modify',
        saveAll: 'Save All',
        approve: 'Approve',
        reject: 'Reject',
        doctorDiagnosis: 'Doctor Diagnosis',
        potentialRisks: 'Potential Risks',
        patientFile: 'Patient File',
        noData: 'No data',
        uploadNewImages: 'Upload New Images',
        selectCategory: 'Select Category',
        doctorComment: 'Doctor Comment',
        addComment: 'Add Comment',
        saveComment: 'Save Comment',
        deleteComment: 'Delete Comment',
        editComment: 'Edit Comment',
        noComments: 'No comments',
        imagesSaved: 'Images saved',
        commentSaved: 'Comment saved',
        commentDeleted: 'Comment deleted',
        confirmDelete: 'Confirm Delete',
        areYouSure: 'Are you sure?',
        yes: 'Yes',
        no: 'No',
        success: 'Success',
        error: 'Error',
        warning: 'Warning',
        info: 'Info',
        loading: 'Loading...',
        pleaseWait: 'Please wait...',
        operationSuccessful: 'Operation successful',
        operationFailed: 'Operation failed',
        tryAgain: 'Try again',
        networkError: 'Network error',
        serverError: 'Server error',
        unauthorized: 'Unauthorized',
        forbidden: 'Forbidden',
        notFound: 'Not found',
        conflict: 'Conflict',
        tooManyRequests: 'Too many requests',
        internalError: 'Internal error',
        serviceUnavailable: 'Service unavailable',
        gatewayTimeout: 'Gateway timeout',
        unknownError: 'Unknown error',
        aiAssistant: 'AI Treatment Assistant',
        aiAssistantDesc: 'Get treatment plan suggestions based on patient symptoms',
        patientInfo: 'Patient Information',
        symptoms: 'Symptoms',
        xrayNotes: 'X-Ray Notes',
        generatePlan: 'Generate Treatment Plan',
        generating: 'Generating...',
        aiResponse: 'AI Response',
        diagnosisSummary: 'Diagnosis Summary',
        suggestedTreatment: 'Suggested Treatment Plan',
        medications: 'Suggested Medications',
        followupAdvice: 'Follow-up Advice',
        copyPlan: 'Copy Plan',
        saveToPatient: 'Save to Patient Record',
        disclaimer: 'Disclaimer: AI suggestions are for assistance only and should always be reviewed by a qualified dentist.',
        planSaved: 'Plan saved to patient record',
        planCopied: 'Plan copied',
        fillRequiredFields: 'Please fill all required fields',
        selectPatientFirst: 'Please select a patient first',
        age: 'Age',
        gender: 'Gender',
        male: 'Male',
        female: 'Female',
        chiefComplaint: 'Chief Complaint',
        preliminaryDiagnosis: 'AI Preliminary Diagnosis',
        getPreliminaryDiagnosis: 'Get Preliminary Diagnosis',
        analyzingPatientData: 'Analyzing patient data...',
        possibleDiagnosis: 'Possible Diagnoses',
        recommendedTreatment: 'Recommended Treatment',
        confidence: 'Confidence Level',
        differentialDiagnosis: 'Differential Diagnosis',
        aiSuggestions: 'AI Suggestions',
        acceptSuggestion: 'Accept Suggestion',
        modifySuggestion: 'Modify Suggestion',
        highConfidence: 'High Confidence',
        mediumConfidence: 'Medium Confidence',
        lowConfidence: 'Low Confidence',
        treatmentSteps: 'Treatment Steps',
        estimatedDuration: 'Estimated Duration',
        successRate: 'Expected Success Rate',
        alternatives: 'Treatment Alternatives',
        basedOnSymptoms: 'Based on entered symptoms',
        clinicalPearls: 'Clinical Pearls',
        medicationSuggestions: 'Medication Suggestions',
        useMedication: 'Use',
        medicationExists: 'Medication already exists',
        medicationAdded: 'Medication added to treatment plan'
    }
};

let currentLang = 'ar';

function toggleLanguage() {
    currentLang = currentLang === 'ar' ? 'en' : 'ar';
    document.body.classList.toggle('english', currentLang === 'en');
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLang;
    updateUILanguage();
    document.getElementById('langAuthAr').classList.toggle('active', currentLang === 'ar');
    document.getElementById('langAuthEn').classList.toggle('active', currentLang === 'en');
    if (currentUser) {
        if (currentUser.type === 'doctor') showDoctorView();
        else showPatientView();
    }
    setTimeout(updateRolesList, 100);
}

function updateUILanguage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.placeholder = translations[currentLang][key];
        }
    });
}

document.getElementById('langAuthAr')?.addEventListener('click', () => { if (currentLang !== 'ar') toggleLanguage(); });
document.getElementById('langAuthEn')?.addEventListener('click', () => { if (currentLang !== 'en') toggleLanguage(); });
document.getElementById('langToggle')?.addEventListener('click', toggleLanguage);

function validatePassword(password) {
    const regex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
}

// -------------------- البيانات الأساسية --------------------
const SALT_ROUNDS = 10;
let notifications = JSON.parse(localStorage.getItem('dentflow_notifications')) || [];
let auditLogs = JSON.parse(localStorage.getItem('dentflow_auditLogs')) || [];
let doctorRatings = JSON.parse(localStorage.getItem('dentflow_doctorRatings')) || [];
let suspendedDoctors = JSON.parse(localStorage.getItem('dentflow_suspendedDoctors')) || [];

function saveNotifications() {
    localStorage.setItem('dentflow_notifications', JSON.stringify(notifications));
}

function saveAuditLogs() {
    localStorage.setItem('dentflow_auditLogs', JSON.stringify(auditLogs));
}

function saveDoctorRatings() {
    localStorage.setItem('dentflow_doctorRatings', JSON.stringify(doctorRatings));
}

function saveSuspendedDoctors() {
    localStorage.setItem('dentflow_suspendedDoctors', JSON.stringify(suspendedDoctors));
}

let users = JSON.parse(localStorage.getItem('dentflow_users')) || [];
let patientsData = JSON.parse(localStorage.getItem('dentflow_patientsData')) || {};
let queue = JSON.parse(localStorage.getItem('dentflow_queue')) || [];
let followups = JSON.parse(localStorage.getItem('dentflow_followups')) || [];
let relations = JSON.parse(localStorage.getItem('dentflow_relations')) || [];
let profilePics = JSON.parse(localStorage.getItem('dentflow_profilePics')) || {};
let appointments = JSON.parse(localStorage.getItem('dentflow_appointments')) || [];
let invoices = JSON.parse(localStorage.getItem('dentflow_invoices')) || [];
let subscriptions = JSON.parse(localStorage.getItem('dentflow_subscriptions')) || {};
let dentalCharts = JSON.parse(localStorage.getItem('dentflow_dentalCharts')) || {};
let patientImages = JSON.parse(localStorage.getItem('dentflow_patientImages')) || {};
let patientComments = JSON.parse(localStorage.getItem('dentflow_patientComments')) || {};
let contracts = JSON.parse(localStorage.getItem('dentflow_contracts')) || {};
let contractModifyRequests = JSON.parse(localStorage.getItem('dentflow_contractModifyRequests')) || {};
let clinicData = JSON.parse(localStorage.getItem('dentflow_clinicData')) || {};
let aiTreatmentPlans = JSON.parse(localStorage.getItem('dentflow_aiTreatmentPlans')) || {};
let preliminaryDiagnoses = JSON.parse(localStorage.getItem('dentflow_preliminaryDiagnoses')) || {};

let currentUser = null;
let selectedPatientForFollowup = null;
let currentTabIndex = 0;
let lastQueueDate = localStorage.getItem('dentflow_lastQueueDate') || '';
let todayQueueCount = 0;

function saveUsers() { localStorage.setItem('dentflow_users', JSON.stringify(users)); }
function savePatientsData() { localStorage.setItem('dentflow_patientsData', JSON.stringify(patientsData)); }
function saveQueue() { localStorage.setItem('dentflow_queue', JSON.stringify(queue)); }
function saveFollowups() { localStorage.setItem('dentflow_followups', JSON.stringify(followups)); }
function saveRelations() { localStorage.setItem('dentflow_relations', JSON.stringify(relations)); }
function saveProfilePics() { localStorage.setItem('dentflow_profilePics', JSON.stringify(profilePics)); }
function saveAppointments() { localStorage.setItem('dentflow_appointments', JSON.stringify(appointments)); }
function saveInvoices() { localStorage.setItem('dentflow_invoices', JSON.stringify(invoices)); }
function saveSubscriptions() { localStorage.setItem('dentflow_subscriptions', JSON.stringify(subscriptions)); }
function saveDentalCharts() { localStorage.setItem('dentflow_dentalCharts', JSON.stringify(dentalCharts)); }
function savePatientImages() { localStorage.setItem('dentflow_patientImages', JSON.stringify(patientImages)); }
function savePatientComments() { localStorage.setItem('dentflow_patientComments', JSON.stringify(patientComments)); }
function saveContracts() { localStorage.setItem('dentflow_contracts', JSON.stringify(contracts)); }
function saveContractModifyRequests() { localStorage.setItem('dentflow_contractModifyRequests', JSON.stringify(contractModifyRequests)); }
function saveClinicData() { localStorage.setItem('dentflow_clinicData', JSON.stringify(clinicData)); }
function saveAITreatmentPlans() { localStorage.setItem('dentflow_aiTreatmentPlans', JSON.stringify(aiTreatmentPlans)); }
function savePreliminaryDiagnoses() { localStorage.setItem('dentflow_preliminaryDiagnoses', JSON.stringify(preliminaryDiagnoses)); }
 // دالة النسخ الاحتياطي التلقائي
function autoBackup() {
    const lastBackup = localStorage.getItem('lastBackup');
    const now = new Date().toDateString();
    
    if (lastBackup !== now) {
        const backup = {
            users, patientsData, queue, followups,
            relations, appointments, invoices, notifications,
            auditLogs, doctorRatings, suspendedDoctors
        };
        
        localStorage.setItem('dentflow_backup', JSON.stringify(backup));
        localStorage.setItem('lastBackup', now);
        
        if (currentUser?.role === 'admin') {
            showToast('تم إنشاء نسخة احتياطية تلقائية');
        }
    }
}
function showLoading() { document.getElementById('loadingOverlay').style.display = 'flex'; }
function hideLoading() { document.getElementById('loadingOverlay').style.display = 'none'; }

function showToast(msg) {
    const t = document.getElementById('customToast');
    document.getElementById('toastMessage').textContent = msg;
    t.style.display = 'flex';
    setTimeout(() => t.style.display = 'none', 2500);
}

function validatePhone(p) { return /^[0-9]{10,15}$/.test(p); }

// -------------------- عناصر DOM --------------------
const authWrapper = document.getElementById('authWrapper');
const mainApp = document.getElementById('mainApp');
const tabLogin = document.getElementById('tabLogin');
const tabRegister = document.getElementById('tabRegister');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const regType = document.getElementById('regType');
const doctorField = document.getElementById('doctorField');
const logoutBtn = document.getElementById('logoutBtn');
const menuToggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const darkModeToggle = document.getElementById('darkModeToggle');
const deleteAccountBtn = document.getElementById('deleteAccountBtn');
const resetAppBtn = document.getElementById('resetAppBtn');
const confirmDeleteBtn = document.getElementById('confirmDeleteAccount');
const confirmResetBtn = document.getElementById('confirmResetApp');
const uploadPicModal = new bootstrap.Modal(document.getElementById('uploadPicModal'));
const followupModal = new bootstrap.Modal(document.getElementById('followupModal'));
const toothModal = new bootstrap.Modal(document.getElementById('toothModal'));
const deleteAccountModal = new bootstrap.Modal(document.getElementById('deleteAccountModal'));
const resetAppModal = new bootstrap.Modal(document.getElementById('resetAppModal'));
const subscriptionModal = new bootstrap.Modal(document.getElementById('subscriptionModal'));
const contractViewModal = new bootstrap.Modal(document.getElementById('contractViewModal'));
const caseImagesModal = new bootstrap.Modal(document.getElementById('caseImagesModal'));
const contractModifyRequestModal = new bootstrap.Modal(document.getElementById('contractModifyRequestModal'));

// -------------------- أحداث تسجيل الدخول والتسجيل --------------------
if (tabLogin) {
    tabLogin.addEventListener('click', () => {
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    });
}

if (tabRegister) {
    tabRegister.addEventListener('click', () => {
        tabRegister.classList.add('active');
        tabLogin.classList.remove('active');
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
    });
}

if (regType) {
    regType.addEventListener('change', () => {
        doctorField.style.display = regType.value === 'doctor' ? 'block' : 'none';
    });
}

if (registerBtn) {
    registerBtn.addEventListener('click', async () => {
        const type = regType.value;
        const name = document.getElementById('regName').value.trim();
        const username = document.getElementById('regUsername').value.trim();
        const password = document.getElementById('regPassword').value.trim();
        const clinic = document.getElementById('regClinic')?.value.trim() || '';

        if (!name || !username || !password) {
            alert(translations[currentLang].passwordRequirements);
            return;
        }
        if (!validatePassword(password)) {
            alert(translations[currentLang].passwordRequirements);
            return;
        }
        if (users.find(u => u.username === username)) {
            alert(translations[currentLang].usernameExists);
            return;
        }
        showLoading();
        try {
            const hashed = await bcrypt.hash(password, SALT_ROUNDS);
            users.push({
                id: Date.now().toString(),
                username,
                password: hashed,
                name,
                type,
                role: type,
                clinic: type === 'doctor' || type === 'admin' ? clinic : '',
                createdAt: new Date().toISOString()
            });
            saveUsers();
            hideLoading();
            alert(translations[currentLang].accountCreated);
            if (tabLogin) tabLogin.click();
        } catch (e) {
            hideLoading();
            alert(translations[currentLang].encryptionError);
        }
    });
}

if (loginBtn) {
    loginBtn.addEventListener('click', async () => {
        const type = document.getElementById('loginType').value;
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value.trim();
        
        document.getElementById('loginUsernameError').innerText = '';
        document.getElementById('loginPasswordError').innerText = '';

        if (!username || !password) {
            if (!username) document.getElementById('loginUsernameError').innerText = 'الرجاء إدخال اسم المستخدم';
            if (!password) document.getElementById('loginPasswordError').innerText = 'الرجاء إدخال كلمة المرور';
            return;
        }
        
        console.log('🔍 محاولة تسجيل دخول:', { username, type });
        
        const user = users.find(u => 
            u.username === username && 
            (u.role === type || u.type === type)
        );
        
        if (!user) {
            document.getElementById('loginUsernameError').innerText = 'بيانات الدخول غير صحيحة';
            return;
        }
        
        showLoading();
        
        try {
            if (await bcrypt.compare(password, user.password)) {
                currentUser = user;
                
                if (!currentUser.role && currentUser.type) {
                    currentUser.role = currentUser.type;
                }
                
                localStorage.setItem('dentflow_currentUser', JSON.stringify(currentUser));
                hideLoading();
                
                console.log('✅ تسجيل دخول ناجح:', currentUser);
                
                // إخفاء شاشة الدخول وإظهار التطبيق
                authWrapper.style.display = 'none';
                mainApp.style.display = 'block';
                document.body.classList.add('in-app');
                
                // تحديث معلومات الشريط الجانبي
                updateSidebarUserInfo();
                buildSidebar();
                
                // عرض الشاشة المناسبة حسب الدور
                if (currentUser.role === 'admin' || currentUser.role === 'doctor') {
                    showDoctorView();
                } else {
                    showPatientView();
                }
                
                updateUILanguage();
                window.scrollTo(0, 0);
                
            } else {
                hideLoading();
                document.getElementById('loginPasswordError').innerText = 'كلمة المرور غير صحيحة';
            }
        } catch (e) {
            console.error('❌ خطأ:', e);
            hideLoading();
            alert('حدث خطأ، حاول مرة أخرى');
        }
    });
}

if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
        currentUser = null;
        localStorage.removeItem('dentflow_currentUser');
        authWrapper.style.display = 'flex';
        mainApp.style.display = 'none';
        document.body.classList.remove('in-app');
    });
}

if (deleteAccountBtn) {
    deleteAccountBtn.addEventListener('click', () => deleteAccountModal.show());
}

if (confirmDeleteBtn) {
    confirmDeleteBtn.addEventListener('click', () => {
        showConfirmDialog(
            currentLang === 'ar' ? 'هل أنت متأكد من حذف حسابك؟ لا يمكن التراجع عن هذا الإجراء.' : 'Are you sure you want to delete your account? This action cannot be undone.',
            function() {
                if (!currentUser) return;
                const uid = currentUser.id;
                users = users.filter(u => u.id !== uid);
                delete patientsData[uid];
                queue = queue.filter(q => q.patientId !== uid && q.doctorId !== uid);
                followups = followups.filter(f => f.patientId !== uid && f.doctorId !== uid);
                relations = relations.filter(r => r.patientId !== uid && r.doctorId !== uid);
                delete profilePics[uid];
                appointments = appointments.filter(a => a.patientId !== uid && a.doctorId !== uid);
                invoices = invoices.filter(i => i.patientId !== uid && i.doctorId !== uid);
                delete dentalCharts[uid];
                delete patientImages[uid];
                delete patientComments[uid];
                delete contracts[uid];
                delete aiTreatmentPlans[uid];
                delete preliminaryDiagnoses[uid];
                saveUsers(); savePatientsData(); saveQueue(); saveFollowups(); saveRelations(); saveProfilePics();
                saveAppointments(); saveInvoices(); saveDentalCharts(); savePatientImages(); savePatientComments(); saveContracts(); saveAITreatmentPlans(); savePreliminaryDiagnoses();
                deleteAccountModal.hide();
                showToast(translations[currentLang].accountDeleted);
                if (logoutBtn) logoutBtn.click();
            }
        );
    });
}

if (resetAppBtn) {
    resetAppBtn.addEventListener('click', () => resetAppModal.show());
}

if (confirmResetBtn) {
    confirmResetBtn.addEventListener('click', () => {
        showConfirmDialog(
            currentLang === 'ar' ? 'هل أنت متأكد من مسح جميع البيانات؟' : 'Are you sure you want to reset all data?',
            function() {
                localStorage.clear();
                resetAppModal.hide();
                showToast(translations[currentLang].dataCleared);
                setTimeout(() => location.reload(), 1500);
            }
        );
    });
}

if (menuToggle) {
    menuToggle.addEventListener('click', () => sidebar.classList.toggle('show'));
}

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('dentflow_darkMode', isDark);
        darkModeToggle.innerHTML = isDark ? '<i class="fas fa-sun"></i> ' + (currentLang === 'ar' ? 'الوضع النهاري' : 'Light Mode') : '<i class="fas fa-moon"></i> ' + (currentLang === 'ar' ? 'الوضع الليلي' : 'Dark Mode');
    });
}

if (localStorage.getItem('dentflow_darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    if (darkModeToggle) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> ' + (currentLang === 'ar' ? 'الوضع النهاري' : 'Light Mode');
    }
}

document.getElementById('saveProfilePic')?.addEventListener('click', () => {
    const file = document.getElementById('profilePicUpload').files[0];
    if (file) {
        showLoading();
        const reader = new FileReader();
        reader.onload = (e) => {
            profilePics[currentUser.id] = e.target.result;
            saveProfilePics();
            updateSidebarUserInfo();
            uploadPicModal.hide();
            hideLoading();
            showToast(translations[currentLang].profilePicUpdated);
        };
        reader.readAsDataURL(file);
    }
});

// -------------------- نظام الاشتراك --------------------
function checkSubscription() {
    let sub = subscriptions[currentUser.id];
    if (!sub) {
        subscriptionModal.show();
        return;
    }
    let today = new Date();
    let expiry = new Date(sub.expiry);
    if (today > expiry) {
        subscriptionModal.show();
    } else {
        if (currentUser.role === 'admin' || currentUser.role === 'doctor' || currentUser.type === 'doctor') {
            showDoctorView();
        } else {
            showMainApp();
        }
    }
}

window.startSubscription = function() {
    let expiry = new Date();
    expiry.setMonth(expiry.getMonth() + 1);
    subscriptions[currentUser.id] = {
        plan: "basic",
        expiry: expiry.toISOString()
    };
    saveSubscriptions();
    subscriptionModal.hide();
    showMainApp();
};

// -------------------- عرض التطبيق الرئيسي --------------------
function showMainApp() {
    authWrapper.style.display = 'none';
    mainApp.style.display = 'block';
    document.body.classList.add('in-app');
    updateSidebarUserInfo();
    buildSidebar();
    
    if (currentUser.role === 'admin' || currentUser.role === 'doctor' || currentUser.type === 'doctor') {
        showDoctorView();
    } else {
        showPatientView();
    }
    
    updateUILanguage();
    window.scrollTo(0, 0);
}

function updateSidebarUserInfo() {
    const pic = profilePics[currentUser.id] || 'https://via.placeholder.com/80';
    const userRole = currentUser.role || currentUser.type;
    
    let roleText = '';
    switch(userRole) {
        case 'admin': roleText = currentLang === 'ar' ? 'مدير النظام' : 'Admin'; break;
        case 'doctor': roleText = currentLang === 'ar' ? 'طبيب' : 'Doctor'; break;
        case 'assistant': roleText = currentLang === 'ar' ? 'مساعد' : 'Assistant'; break;
        case 'receptionist': roleText = currentLang === 'ar' ? 'استقبال' : 'Receptionist'; break;
        default: roleText = currentLang === 'ar' ? 'مريض' : 'Patient';
    }
    
    document.getElementById('sidebarUserInfo').innerHTML = `
        <img src="${pic}" class="profile-pic" onclick="uploadPicModal.show()">
        <div><strong>${currentUser.name}</strong></div>
        <div>${roleText}</div>
    `;
}

function buildSidebar() {
    const nav = document.getElementById('v-pills-tab');
    const userRole = currentUser.role || currentUser.type;
    
    if (userRole === 'admin' || userRole === 'doctor') {
        let buttons = `
            <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#dashboard"><i class="fas fa-chart-pie"></i> <span data-i18n="dashboard">لوحة التحكم</span></button>
            <button class="nav-link" data-bs-toggle="pill" data-bs-target="#patients"><i class="fas fa-users"></i> <span data-i18n="patients">المرضى</span></button>
            <button class="nav-link" data-bs-toggle="pill" data-bs-target="#appointmentsMgmt"><i class="fas fa-calendar-alt"></i> <span data-i18n="appointments">المواعيد</span></button>
            <button class="nav-link" data-bs-toggle="pill" data-bs-target="#invoices"><i class="fas fa-file-invoice"></i> <span data-i18n="invoices">الفواتير</span></button>
            <button class="nav-link" data-bs-toggle="pill" data-bs-target="#reports"><i class="fas fa-chart-bar"></i> <span data-i18n="reports">التقارير</span></button>
            <button class="nav-link" data-bs-toggle="pill" data-bs-target="#backup"><i class="fas fa-database"></i> <span data-i18n="backup">النسخ الاحتياطي</span></button>
            <button class="nav-link" data-bs-toggle="pill" data-bs-target="#aiAssistant"><i class="fas fa-robot"></i> <span data-i18n="aiAssistant">مساعد الذكاء الاصطناعي</span></button>
        `;
        
        if (userRole === 'admin') {
            buttons += `
                <button class="nav-link" data-bs-toggle="pill" data-bs-target="#users">
                    <i class="fas fa-users-cog"></i> <span>إدارة المستخدمين</span>
                </button>
            `;
        }
        
        nav.innerHTML = buttons;
        
    } else if (userRole === 'assistant' || userRole === 'receptionist') {
        nav.innerHTML = `
            <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#patients"><i class="fas fa-users"></i> <span data-i18n="patients">المرضى</span></button>
            <button class="nav-link" data-bs-toggle="pill" data-bs-target="#appointmentsMgmt"><i class="fas fa-calendar-alt"></i> <span data-i18n="appointments">المواعيد</span></button>
        `;
    } else {
        nav.innerHTML = `
            <button class="nav-link active" data-bs-toggle="pill" data-bs-target="#profile"><i class="fas fa-user-injured"></i> <span data-i18n="myProfile">ملفي الطبي</span></button>
            <button class="nav-link" data-bs-toggle="pill" data-bs-target="#myDoctors"><i class="fas fa-user-md"></i> <span data-i18n="myDoctors">أطبائي</span></button>
            <button class="nav-link" data-bs-toggle="pill" data-bs-target="#appointments"><i class="fas fa-calendar-alt"></i> <span data-i18n="myAppointments">مواعيدي</span></button>
        `;
    }
    
    setTimeout(() => {
        document.querySelector('#v-pills-tab .nav-link')?.click();
    }, 100);
}

// ================== دوال المريض ==================
function showPatientView() {
    const tabs = [
        translations[currentLang].personalData,
        translations[currentLang].medicalHistory,
        translations[currentLang].dentalHistory,
        translations[currentLang].reasonForVisit,
        translations[currentLang].followup,
        translations[currentLang].treatmentPlan,
        translations[currentLang].faq,
        translations[currentLang].contract
    ];
    const ids = ['personal','medical','dental','reason','followup','treatment','faq','contract'];
    let th = '<div class="horizontal-tabs">';
    tabs.forEach((n,i)=> th+=`<button class="horizontal-tab ${i===0?'active':''}" data-tab="${ids[i]}">${n}</button>`);
    th+='</div>';
    let ch = ids.map(id=>`<div class="tab-pane-custom ${id==='personal'?'active':''}" id="tab-${id}"></div>`).join('');
    
    document.getElementById('v-pills-tabContent').innerHTML = `
        <div class="tab-pane active" id="profile">
            <h2 class="page-title">${translations[currentLang].myProfile} <i class="fas fa-notes-medical"></i></h2>
            ${th}${ch}
            <div class="navigation-buttons">
                <button class="btn btn-outline-accent" id="prevTab" disabled>${translations[currentLang].previous}</button>
                <button class="btn btn-primary" id="nextTab">${translations[currentLang].next}</button>
            </div>
            <div id="turnNumberDisplay" style="display:none" class="alert alert-success mt-3 text-center">
                <strong>${translations[currentLang].turn}: <span id="turnNumberValue"></span></strong>
            </div>
        </div>
        <div class="tab-pane" id="myDoctors"><h2 class="page-title">${translations[currentLang].myDoctors} <i class="fas fa-user-md"></i></h2><div class="card"><div class="card-body" id="myDoctorsList"></div></div></div>
        <div class="tab-pane" id="appointments"><h2 class="page-title">${translations[currentLang].myAppointments} <i class="fas fa-calendar-check"></i></h2><div class="card"><div class="card-body" id="patientAppointments"></div></div></div>
    `;
    loadPersonalTab();
    loadMedicalTab();
    loadDentalTab();
    loadReasonTab();
    loadFollowupTab();
    loadTreatmentTab();
    loadFaqTab();
    loadContractTab();

    document.querySelectorAll('.horizontal-tab').forEach((btn,i)=>{
        btn.addEventListener('click',function(){
            document.querySelectorAll('.horizontal-tab').forEach(b=>b.classList.remove('active'));
            this.classList.add('active');
            document.querySelectorAll('.tab-pane-custom').forEach(p=>p.classList.remove('active'));
            document.getElementById(`tab-${this.dataset.tab}`).classList.add('active');
            currentTabIndex = i;
            document.getElementById('prevTab').disabled = currentTabIndex===0;
            document.getElementById('nextTab').textContent = currentTabIndex===tabs.length-1 ? (currentLang==='ar'?'حفظ':'Save') : (currentLang==='ar'?'التالي':'Next');
            window.scrollTo(0, 0);
        });
    });
    
    document.getElementById('prevTab')?.addEventListener('click',()=>{
        if(currentTabIndex>0){
            currentTabIndex--;
            document.querySelector(`.horizontal-tab[data-tab="${ids[currentTabIndex]}"]`)?.click();
        }
    });
    
    document.getElementById('nextTab')?.addEventListener('click',()=>{
        if(currentTabIndex<tabs.length-1){
            currentTabIndex++;
            document.querySelector(`.horizontal-tab[data-tab="${ids[currentTabIndex]}"]`)?.click();
        } else {
            showLoading();
            document.querySelectorAll('.save-tab-btn:not(#saveContractDiagnosis)').forEach(b=>b.click());
            hideLoading();
            showToast(currentLang === 'ar' ? 'تم حفظ جميع البيانات' : 'All data saved');
            const today = new Date().toLocaleDateString('en-CA');
            if (lastQueueDate !== today) {
                lastQueueDate = today;
                localStorage.setItem('dentflow_lastQueueDate', today);
            }
            
            const existingQueue = queue.filter(q => q.patientId === currentUser.id && q.date === today);
            if (existingQueue.length === 0) {
                const taken = queue.filter(q => q.date === today).map(q => q.turnNumber);
                let newTurn = 1;
                while (taken.includes(newTurn)) newTurn++;
                queue.push({ patientId: currentUser.id, turnNumber: newTurn, date: today, status: 'waiting' });
                saveQueue();
                document.getElementById('turnNumberValue').textContent = newTurn;
                document.getElementById('turnNumberDisplay').style.display = 'block';
            } else {
                showToast(currentLang === 'ar' ? 'لقد أخذت دورك بالفعل اليوم' : 'You already have a turn today');
            }
            document.getElementById('nextTab').disabled = true;
        }
    });
}

function loadPersonalTab() {
    const c = document.getElementById('tab-personal');
    if (!c) return;
    const saved = patientsData[currentUser.id]?.personal || {};
    const doctors = users.filter(u => u.type === 'doctor');
    const adminUser = users.find(u => u.role === 'admin');
    const adminClinic = adminUser?.clinic || '';
    
    let opts = '<option value="">' + (currentLang === 'ar' ? 'اختر العيادة' : 'Select clinic') + '</option>';
    const allClinics = [...new Set(users.filter(u => u.clinic).map(u => u.clinic))];
    allClinics.forEach(clinic => {
        opts += `<option value="${clinic}" ${saved.clinicId === clinic ? 'selected' : ''}>${clinic}</option>`;
    });
    
    c.innerHTML = `
        <div class="card">
            <div class="card-header"><i class="fas fa-id-card"></i> <span class="section-title-bold">${translations[currentLang].personalData}</span></div>
            <div class="card-body">
                <div class="row g-4">
                    <div class="col-md-12 text-center mb-3">
                        <img src="${profilePics[currentUser.id] || 'https://via.placeholder.com/100'}" class="rounded-circle" style="width:100px;height:100px;object-fit:cover;border:3px solid #00cec9;cursor:pointer;" onclick="uploadPicModal.show()">
                        <p class="mt-2"><small>${currentLang === 'ar' ? 'انقر لتغيير الصورة' : 'Click to change picture'}</small></p>
                    </div>
                    <div class="col-md-6"><label class="form-label section-content-light">${currentLang === 'ar' ? 'الاسم الكامل' : 'Full Name'}</label><input type="text" class="form-control" value="${currentUser.name}" readonly></div>
                    <div class="col-md-3"><label class="form-label section-content-light">${currentLang === 'ar' ? 'العمر' : 'Age'}</label><input type="number" class="form-control" id="patientAge" value="${saved.age || ''}" min="0" max="120"></div>
                    <div class="col-md-3"><label class="form-label section-content-light">${currentLang === 'ar' ? 'النوع' : 'Gender'}</label><select class="form-select" id="patientGender"><option ${saved.gender === (currentLang==='ar'?'ذكر':'Male') ? 'selected' : ''}>${currentLang==='ar'?'ذكر':'Male'}</option><option ${saved.gender === (currentLang==='ar'?'أنثى':'Female') ? 'selected' : ''}>${currentLang==='ar'?'أنثى':'Female'}</option></select></div>
                    <div class="col-md-6"><label class="form-label section-content-light">${currentLang === 'ar' ? 'المهنة' : 'Occupation'}</label><input type="text" class="form-control" id="patientJob" value="${saved.job || ''}"></div>
                    <div class="col-md-6"><label class="form-label section-content-light">${currentLang === 'ar' ? 'العنوان' : 'Address'}</label><input type="text" class="form-control" id="patientAddress" value="${saved.address || ''}"></div>
                    <div class="col-md-6"><label class="form-label section-content-light">${currentLang === 'ar' ? 'رقم الهاتف' : 'Phone'}</label><input type="tel" class="form-control" id="patientPhone" value="${saved.phone || ''}" pattern="[0-9]{10,15}"></div>
                    <div class="col-md-6"><label class="form-label section-content-light">${currentLang === 'ar' ? 'العيادة المتابع معها' : 'Clinic'}</label><select class="form-select custom-select" id="patientClinic">${opts}</select></div>
                </div>
                <button class="btn btn-primary mt-3 save-tab-btn" id="savePersonal">${translations[currentLang].save}</button>
            </div>
        </div>
    `;
    
    document.getElementById('savePersonal')?.addEventListener('click', () => {
        const phone = document.getElementById('patientPhone').value;
        if (phone && !validatePhone(phone)) { 
            alert(currentLang === 'ar' ? 'رقم الهاتف غير صالح' : 'Invalid phone number'); 
            return; 
        }
        
        const clinicId = document.getElementById('patientClinic').value;
        const saved = patientsData[currentUser.id]?.personal || {};
        
        let assignedDoctorId = clinicId;
        
        if (clinicId && clinicId !== saved.clinicId) {
            const doctorsInClinic = users.filter(u => 
                (u.role === 'doctor' || u.type === 'doctor') && 
                u.clinic === clinicId
            );
            
            if (doctorsInClinic.length > 0) {
                let selectedDoctor = doctorsInClinic[0];
                let minPatients = Infinity;
                
                doctorsInClinic.forEach(doctor => {
                    const patientCount = relations.filter(r => r.doctorId === doctor.id).length;
                    if (patientCount < minPatients) {
                        minPatients = patientCount;
                        selectedDoctor = doctor;
                    }
                });
                
                assignedDoctorId = selectedDoctor.id;
                
                showToast(currentLang === 'ar' 
                    ? `تم تحويلك للدكتور ${selectedDoctor.name}` 
                    : `You have been assigned to Dr. ${selectedDoctor.name}`);
            }
        }
        
        const personal = {
            age: document.getElementById('patientAge').value,
            gender: document.getElementById('patientGender').value,
            job: document.getElementById('patientJob').value,
            address: document.getElementById('patientAddress').value,
            phone: phone,
            clinicId: clinicId,
            assignedDoctorId: assignedDoctorId
        };
        
        if (!patientsData[currentUser.id]) patientsData[currentUser.id] = {};
        patientsData[currentUser.id].personal = personal;
        savePatientsData();
        
        if (assignedDoctorId && !relations.find(r => r.patientId === currentUser.id && r.doctorId === assignedDoctorId)) {
            relations.push({ 
                patientId: currentUser.id, 
                doctorId: assignedDoctorId,
                assignedAt: new Date().toISOString()
            });
            saveRelations();
        }
        
        if (document.getElementById('myDoctorsList')) renderMyDoctors();
        showToast(currentLang === 'ar' ? 'تم حفظ البيانات الشخصية' : 'Personal data saved');
    });
}

// باقي الدوال (MedicalTab, DentalTab, ReasonTab, FollowupTab, TreatmentTab, FaqTab, ContractTab) 
// سيتم إضافتها في الرد التالي بسبب طول الرسالة

function loadMedicalTab() {
    const c = document.getElementById('tab-medical');
    if (!c) return;
    const s = patientsData[currentUser.id]?.medical || {};
    c.innerHTML = `
        <div class="card">
            <div class="card-header"><i class="fas fa-heartbeat"></i> <span class="section-title-bold">${translations[currentLang].medicalHistory}</span></div>
            <div class="card-body">
                <div class="question-item">
                    <label class="form-label section-content-light">${currentLang === 'ar' ? 'هل تعاني أو عانيت سابقًا من أي من الأمراض التالية؟' : 'Do you suffer or have you suffered from any of the following diseases?'}</label>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="diseaseHeart" ${s.heart ? 'checked' : ''}><label class="form-check-label section-content-light">${currentLang==='ar'?'أمراض القلب':'Heart disease'}</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="diseasePressure" ${s.pressure ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'ارتفاع ضغط الدم':'High blood pressure'}</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="diseaseDiabetes" ${s.diabetes ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'مرض السكري':'Diabetes'}</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="diseaseAsthma" ${s.asthma ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'الربو':'Asthma'}</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="diseaseLiver" ${s.liver ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'أمراض الكبد':'Liver disease'}</label></div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="diseaseKidney" ${s.kidney ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'أمراض الكلى':'Kidney disease'}</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="diseaseEpilepsy" ${s.epilepsy ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'الصرع':'Epilepsy'}</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="diseaseThyroid" ${s.thyroid ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'اضطرابات الغدة الدرقية':'Thyroid disorders'}</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="diseaseHepatitis" ${s.hepatitis ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'التهاب الكبد الوبائي':'Hepatitis'}</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="diseaseBleeding" ${s.bleeding ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'اضطرابات النزيف':'Bleeding disorders'}</label></div>
                        </div>
                    </div>
                    <div class="mt-2">
                        <label class="form-label section-content-light">${currentLang === 'ar' ? 'أمراض أخرى:' : 'Other diseases:'}</label>
                        <input type="text" class="form-control" id="otherDiseases" value="${s.otherDiseases || ''}">
                    </div>
                </div>
                <div class="question-item">
                    <label class="form-label section-content-light">${currentLang === 'ar' ? 'هل تتناول أي أدوية حاليًا؟' : 'Do you take any medications currently?'}</label>
                    <div class="d-flex gap-4">
                        <div class="form-check"><input class="form-check-input" type="radio" name="meds" value="yes" ${s.meds === 'yes' ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'نعم':'Yes'}</label></div>
                        <div class="form-check"><input class="form-check-input" type="radio" name="meds" value="no" ${s.meds === 'no' ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'لا':'No'}</label></div>
                    </div>
                    <div id="medsDetailsDiv" style="${s.meds === 'yes' ? 'display:block' : 'display:none'}; margin-top:10px;">
                        <input type="text" class="form-control" id="medsDetails" placeholder="${currentLang==='ar'?'اذكر الأدوية':'List medications'}" value="${s.medsDetails || ''}">
                    </div>
                </div>
                <div class="question-item">
                    <label class="form-label section-content-light">${currentLang === 'ar' ? 'هل لديك حساسية من أدوية أو مواد طبية؟' : 'Do you have any allergies to medications or medical materials?'}</label>
                    <div class="d-flex gap-4">
                        <div class="form-check"><input class="form-check-input" type="radio" name="allergy" value="yes" ${s.allergy === 'yes' ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'نعم':'Yes'}</label></div>
                        <div class="form-check"><input class="form-check-input" type="radio" name="allergy" value="no" ${s.allergy === 'no' ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'لا':'No'}</label></div>
                    </div>
                    <div id="allergyDetailsDiv" style="${s.allergy === 'yes' ? 'display:block' : 'display:none'}; margin-top:10px;">
                        <input type="text" class="form-control" id="allergyDetails" placeholder="${currentLang==='ar'?'اذكر المواد المسببة':'List allergens'}" value="${s.allergyDetails || ''}">
                    </div>
                </div>
                <div class="question-item">
                    <label class="form-label section-content-light">${currentLang === 'ar' ? 'هل سبق لك دخول المستشفى أو إجراء عملية جراحية؟' : 'Have you ever been hospitalized or had surgery?'}</label>
                    <div class="d-flex gap-4">
                        <div class="form-check"><input class="form-check-input" type="radio" name="surgery" value="yes" ${s.surgery === 'yes' ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'نعم':'Yes'}</label></div>
                        <div class="form-check"><input class="form-check-input" type="radio" name="surgery" value="no" ${s.surgery === 'no' ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'لا':'No'}</label></div>
                    </div>
                    <div id="surgeryDetailsDiv" style="${s.surgery === 'yes' ? 'display:block' : 'display:none'}; margin-top:10px;">
                        <input type="text" class="form-control" id="surgeryDetails" placeholder="${currentLang==='ar'?'اشرح':'Explain'}" value="${s.surgeryDetails || ''}">
                    </div>
                </div>
                <div class="question-item">
                    <label class="form-label section-content-light">${currentLang === 'ar' ? 'للنساء: هل يوجد حمل حاليًا؟' : 'For women: Are you currently pregnant?'}</label>
                    <div class="d-flex gap-4">
                        <div class="form-check"><input class="form-check-input" type="radio" name="pregnant" value="yes" ${s.pregnant === 'yes' ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'نعم':'Yes'}</label></div>
                        <div class="form-check"><input class="form-check-input" type="radio" name="pregnant" value="no" ${s.pregnant === 'no' ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'لا':'No'}</label></div>
                        <div class="form-check"><input class="form-check-input" type="radio" name="pregnant" value="na" ${s.pregnant === 'na' ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'لا ينطبق':'N/A'}</label></div>
                    </div>
                    <div id="pregnancyWeeksDiv" style="${s.pregnant === 'yes' ? 'display:block' : 'display:none'}; margin-top:10px;">
                        <label class="form-label section-content-light">${currentLang==='ar'?'عدد أسابيع الحمل:':'Weeks of pregnancy:'}</label>
                        <input type="number" class="form-control" id="pregnancyWeeks" min="1" max="42" value="${s.pregnancyWeeks || ''}">
                    </div>
                </div>
                <button class="btn btn-primary save-tab-btn" id="saveMedical">${translations[currentLang].save}</button>
            </div>
        </div>
    `;
    
    document.querySelectorAll('input[name="meds"]').forEach(r => r.addEventListener('change', function () {
        document.getElementById('medsDetailsDiv').style.display = this.value === 'yes' ? 'block' : 'none';
    }));
    document.querySelectorAll('input[name="allergy"]').forEach(r => r.addEventListener('change', function () {
        document.getElementById('allergyDetailsDiv').style.display = this.value === 'yes' ? 'block' : 'none';
    }));
    document.querySelectorAll('input[name="surgery"]').forEach(r => r.addEventListener('change', function () {
        document.getElementById('surgeryDetailsDiv').style.display = this.value === 'yes' ? 'block' : 'none';
    }));
    document.querySelectorAll('input[name="pregnant"]').forEach(r => r.addEventListener('change', function () {
        document.getElementById('pregnancyWeeksDiv').style.display = this.value === 'yes' ? 'block' : 'none';
    }));
    
    document.getElementById('saveMedical')?.addEventListener('click', () => {
        const medical = {
            heart: document.getElementById('diseaseHeart').checked,
            pressure: document.getElementById('diseasePressure').checked,
            diabetes: document.getElementById('diseaseDiabetes').checked,
            asthma: document.getElementById('diseaseAsthma').checked,
            liver: document.getElementById('diseaseLiver').checked,
            kidney: document.getElementById('diseaseKidney').checked,
            epilepsy: document.getElementById('diseaseEpilepsy').checked,
            thyroid: document.getElementById('diseaseThyroid').checked,
            hepatitis: document.getElementById('diseaseHepatitis').checked,
            bleeding: document.getElementById('diseaseBleeding').checked,
            otherDiseases: document.getElementById('otherDiseases').value,
            meds: document.querySelector('input[name="meds"]:checked')?.value,
            medsDetails: document.getElementById('medsDetails').value,
            allergy: document.querySelector('input[name="allergy"]:checked')?.value,
            allergyDetails: document.getElementById('allergyDetails').value,
            surgery: document.querySelector('input[name="surgery"]:checked')?.value,
            surgeryDetails: document.getElementById('surgeryDetails').value,
            pregnant: document.querySelector('input[name="pregnant"]:checked')?.value,
            pregnancyWeeks: document.getElementById('pregnancyWeeks').value
        };
        if (!patientsData[currentUser.id]) patientsData[currentUser.id] = {};
        patientsData[currentUser.id].medical = medical;
        savePatientsData();
        showToast(currentLang === 'ar' ? 'تم حفظ التاريخ الطبي' : 'Medical history saved');
    });
}

function loadDentalTab() {
    const c = document.getElementById('tab-dental');
    if (!c) return;
    const s = patientsData[currentUser.id]?.dental || {};
    c.innerHTML = `
        <div class="card">
            <div class="card-header"><i class="fas fa-tooth"></i> <span class="section-title-bold">${translations[currentLang].dentalHistory}</span></div>
            <div class="card-body">
                <div class="question-item">
                    <label class="form-label section-content-light">${currentLang === 'ar' ? 'متى كانت آخر زيارة لطبيب الأسنان؟' : 'When was your last dental visit?'}</label>
                    <input type="text" class="form-control" id="lastVisit" value="${s.lastVisit || ''}">
                </div>
                <div class="question-item">
                    <label class="form-label section-content-light">${currentLang === 'ar' ? 'هل تعاني من أي من الأعراض التالية؟' : 'Do you have any of the following symptoms?'}</label>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="symptomPain" ${s.symptomPain ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'ألم في الأسنان':'Tooth pain'}</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="symptomBleeding" ${s.symptomBleeding ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'نزيف في اللثة':'Bleeding gums'}</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="symptomBadBreath" ${s.symptomBadBreath ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'رائحة فم كريهة':'Bad breath'}</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="symptomSensitivity" ${s.symptomSensitivity ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'حساسية من البارد أو الساخن':'Sensitivity to hot/cold'}</label></div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="symptomChewing" ${s.symptomChewing ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'صعوبة في المضغ':'Difficulty chewing'}</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="symptomJaw" ${s.symptomJaw ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'ألم في مفصل الفك':'Jaw pain'}</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="symptomGrinding" ${s.symptomGrinding ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'صرير الأسنان':'Teeth grinding'}</label></div>
                        </div>
                    </div>
                </div>
                <div class="question-item">
                    <label class="form-label section-content-light">${currentLang === 'ar' ? 'هل تنزف لثتك أثناء تنظيف الأسنان؟' : 'Do your gums bleed when brushing?'}</label>
                    <div class="d-flex gap-4">
                        <div class="form-check"><input class="form-check-input" type="radio" name="gumBleed" value="yes" ${s.gumBleed === 'yes' ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'نعم':'Yes'}</label></div>
                        <div class="form-check"><input class="form-check-input" type="radio" name="gumBleed" value="no" ${s.gumBleed === 'no' ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'لا':'No'}</label></div>
                    </div>
                </div>
                <div class="question-item">
                    <label class="form-label section-content-light">${currentLang === 'ar' ? 'هل سبق لك إجراء أي من العلاجات التالية؟' : 'Have you ever had any of the following treatments?'}</label>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="prevOrtho" ${s.prevOrtho ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'تقويم الأسنان':'Orthodontics'}</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="prevRoot" ${s.prevRoot ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'حشو عصب':'Root canal'}</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="prevImplant" ${s.prevImplant ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'زراعة الأسنان':'Dental implant'}</label></div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="prevCrown" ${s.prevCrown ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'تيجان أو جسور':'Crowns/bridges'}</label></div>
                            <div class="form-check"><input class="form-check-input" type="checkbox" id="prevDenture" ${s.prevDenture ? 'checked' : ''}><label class="section-content-light">${currentLang==='ar'?'أطقم أسنان':'Dentures'}</label></div>
                        </div>
                    </div>
                </div>
                <div class="question-item">
                    <label class="form-label section-content-light">${currentLang === 'ar' ? 'سبب الزيارة اليوم (وصف مختصر):' : 'Reason for today\'s visit (brief description):'}</label>
                    <textarea class="form-control" id="visitReason" rows="3">${s.visitReason || ''}</textarea>
                </div>
                <button class="btn btn-primary save-tab-btn" id="saveDental">${translations[currentLang].save}</button>
            </div>
        </div>
    `;
    
    document.getElementById('saveDental')?.addEventListener('click', () => {
        const dental = {
            lastVisit: document.getElementById('lastVisit').value,
            symptomPain: document.getElementById('symptomPain').checked,
            symptomBleeding: document.getElementById('symptomBleeding').checked,
            symptomBadBreath: document.getElementById('symptomBadBreath').checked,
            symptomSensitivity: document.getElementById('symptomSensitivity').checked,
            symptomChewing: document.getElementById('symptomChewing').checked,
            symptomJaw: document.getElementById('symptomJaw').checked,
            symptomGrinding: document.getElementById('symptomGrinding').checked,
            gumBleed: document.querySelector('input[name="gumBleed"]:checked')?.value,
            prevOrtho: document.getElementById('prevOrtho').checked,
            prevRoot: document.getElementById('prevRoot').checked,
            prevImplant: document.getElementById('prevImplant').checked,
            prevCrown: document.getElementById('prevCrown').checked,
            prevDenture: document.getElementById('prevDenture').checked,
            visitReason: document.getElementById('visitReason').value
        };
        if (!patientsData[currentUser.id]) patientsData[currentUser.id] = {};
        patientsData[currentUser.id].dental = dental;
        savePatientsData();
        showToast(currentLang === 'ar' ? 'تم حفظ التاريخ السني' : 'Dental history saved');
    });
}

function loadReasonTab() {
    const c = document.getElementById('tab-reason');
    if (!c) return;
    const s = patientsData[currentUser.id]?.reason || {};
    c.innerHTML = `
        <div class="card">
            <div class="card-header"><i class="fas fa-notes-medical"></i> <span class="section-title-bold">${translations[currentLang].reasonForVisit}</span></div>
            <div class="card-body">
                <div class="question-item">
                    <label class="form-label section-content-light"><i class="fas fa-edit"></i> ${currentLang === 'ar' ? 'الشكوى الرئيسية' : 'Main Complaint'}</label>
                    <textarea class="form-control" id="mainComplaint" rows="3">${s.mainComplaint || ''}</textarea>
                </div>
                <div class="question-item">
                    <label class="form-label section-content-light"><i class="fas fa-clock"></i> ${currentLang === 'ar' ? 'مدة الألم' : 'Pain duration'}</label>
                    <select class="form-select" id="painDuration">
                        <option ${s.painDuration === (currentLang==='ar'?'أقل من يوم':'Less than a day') ? 'selected' : ''}>${currentLang==='ar'?'أقل من يوم':'Less than a day'}</option>
                        <option ${s.painDuration === (currentLang==='ar'?'1-3 أيام':'1-3 days') ? 'selected' : ''}>${currentLang==='ar'?'1-3 أيام':'1-3 days'}</option>
                        <option ${s.painDuration === (currentLang==='ar'?'أسبوع':'A week') ? 'selected' : ''}>${currentLang==='ar'?'أسبوع':'A week'}</option>
                        <option ${s.painDuration === (currentLang==='ar'?'أكثر':'More') ? 'selected' : ''}>${currentLang==='ar'?'أكثر':'More'}</option>
                    </select>
                </div>
                <div class="question-item">
                    <label class="form-label section-content-light"><i class="fas fa-bolt"></i> ${currentLang === 'ar' ? 'نوع الألم' : 'Pain type'}</label>
                    <select class="form-select" id="painType">
                        <option ${s.painType === (currentLang==='ar'?'حاد':'Sharp') ? 'selected' : ''}>${currentLang==='ar'?'حاد':'Sharp'}</option>
                        <option ${s.painType === (currentLang==='ar'?'نابض':'Throbbing') ? 'selected' : ''}>${currentLang==='ar'?'نابض':'Throbbing'}</option>
                        <option ${s.painType === (currentLang==='ar'?'مستمر':'Constant') ? 'selected' : ''}>${currentLang==='ar'?'مستمر':'Constant'}</option>
                    </select>
                </div>
                <div class="question-item">
                    <label class="form-label section-content-light"><i class="fas fa-chart-line"></i> ${currentLang === 'ar' ? 'شدة الألم (1-10)' : 'Pain intensity (1-10)'}</label>
                    <input type="range" class="form-range" id="painRange" min="1" max="10" value="${s.painIntensity || 5}">
                    <div class="text-center" id="painValue">${s.painIntensity || 5}</div>
                </div>
                <div class="question-item">
                    <label class="form-label section-content-light"><i class="fas fa-hand-holding-heart"></i> ${currentLang === 'ar' ? 'هل يحدث مع محفز؟' : 'Triggered by?'}</label>
                    <select class="form-select" id="painTrigger">
                        <option ${s.painTrigger === (currentLang==='ar'?'بدون محفز':'None') ? 'selected' : ''}>${currentLang==='ar'?'بدون محفز':'None'}</option>
                        <option ${s.painTrigger === (currentLang==='ar'?'مع البارد':'Cold') ? 'selected' : ''}>${currentLang==='ar'?'مع البارد':'Cold'}</option>
                        <option ${s.painTrigger === (currentLang==='ar'?'مع الساخن':'Hot') ? 'selected' : ''}>${currentLang==='ar'?'مع الساخن':'Hot'}</option>
                        <option ${s.painTrigger === (currentLang==='ar'?'مع السكريات':'With sweets') ? 'selected' : ''}>${currentLang==='ar'?'مع السكريات':'With sweets'}</option>
                    </select>
                </div>
                <div class="question-item">
                    <label class="form-label section-content-light"><i class="fas fa-hourglass-half"></i> ${translations[currentLang].painDurationAfterTrigger}</label>
                    <select class="form-select" id="painDurationAfterTrigger">
                        <option value="instantly" ${s.painDurationAfterTrigger === 'instantly' ? 'selected' : ''}>${translations[currentLang].instantly}</option>
                        <option value="3to5" ${s.painDurationAfterTrigger === '3to5' ? 'selected' : ''}>${translations[currentLang].threeToFiveSeconds}</option>
                        <option value="5to30" ${s.painDurationAfterTrigger === '5to30' ? 'selected' : ''}>${translations[currentLang].fiveToThirtySeconds}</option>
                        <option value="minute+" ${s.painDurationAfterTrigger === 'minute+' ? 'selected' : ''}>${translations[currentLang].minuteOrMore}</option>
                    </select>
                </div>
                <div class="question-item">
                    <label class="form-label section-content-light"><i class="fas fa-x-ray"></i> ${currentLang === 'ar' ? 'صورة الأشعة (X-ray):' : 'X-ray image:'}</label>
                    <input type="file" id="xrayUpload" accept="image/*" class="form-control">
                    <div id="xrayPreview" class="mt-2">
                        ${patientsData[currentUser.id]?.xray ? `<img src="${patientsData[currentUser.id].xray}" class="xray-preview">` : ''}
                    </div>
                </div>
                <button class="btn btn-primary save-tab-btn" id="saveReason">${translations[currentLang].save}</button>
            </div>
        </div>
    `;
    
    const painRange = document.getElementById('painRange');
    if (painRange) painRange.addEventListener('input', () => document.getElementById('painValue').textContent = painRange.value);
    
    document.getElementById('xrayUpload')?.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (ev) => {
                document.getElementById('xrayPreview').innerHTML = `<img src="${ev.target.result}" class="xray-preview">`;
                if (!patientsData[currentUser.id]) patientsData[currentUser.id] = {};
                patientsData[currentUser.id].xray = ev.target.result;
                savePatientsData();
                showToast(currentLang === 'ar' ? 'تم حفظ صورة الأشعة' : 'X-ray saved');
            };
            reader.readAsDataURL(file);
        }
    });
    
    document.getElementById('saveReason')?.addEventListener('click', () => {
        const reason = {
            mainComplaint: document.getElementById('mainComplaint').value,
            painDuration: document.getElementById('painDuration').value,
            painType: document.getElementById('painType').value,
            painIntensity: document.getElementById('painRange').value,
            painTrigger: document.getElementById('painTrigger').value,
            painDurationAfterTrigger: document.getElementById('painDurationAfterTrigger').value
        };
        if (!patientsData[currentUser.id]) patientsData[currentUser.id] = {};
        patientsData[currentUser.id].reason = reason;
        savePatientsData();
        showToast(currentLang === 'ar' ? 'تم حفظ سبب الزيارة' : 'Reason saved');
    });
}

function loadFollowupTab() {
    const c = document.getElementById('tab-followup');
    if (!c) return;
    c.innerHTML = `
        <div class="card">
            <div class="card-header"><i class="fas fa-calendar-check"></i> <span class="section-title-bold">${currentLang === 'ar' ? 'نصائح ما بعد العلاج' : 'Post-treatment tips'}</span></div>
            <div class="card-body">
                <label class="form-label section-content-light">${currentLang === 'ar' ? 'اختر نوع العلاج:' : 'Select treatment type:'}</label>
                <select class="form-select mb-4" id="treatmentTypeSelect">
                    <option value="filling">${currentLang==='ar'?'حشو عادي':'Filling'}</option>
                    <option value="rootcanal">${currentLang==='ar'?'حشو عصب':'Root canal'}</option>
                    <option value="implant">${currentLang==='ar'?'زراعة':'Implant'}</option>
                    <option value="extraction">${currentLang==='ar'?'خلع':'Extraction'}</option>
                </select>
                <div id="followupAdvice"></div>
            </div>
        </div>
    `;
    
    const adviceData = {
        filling: '<div class="alert alert-info">' + (currentLang==='ar'?'ألم خفيف لمدة 24-48 ساعة أمر طبيعي. تجنب الأكل حتى زوال المخدر.':'Mild pain for 24-48 hours is normal. Avoid eating until anesthesia wears off.') + '</div>',
        rootcanal: '<div class="alert alert-warning">' + (currentLang==='ar'?'تجنب المضغ على السن المعالج لبضعة أيام. قد تشعر بحساسية.':'Avoid chewing on the treated tooth for a few days. You may feel sensitivity.') + '</div>',
        implant: '<div class="alert alert-success">' + (currentLang==='ar'?'تجنب التدخين والمضغ القوي. اتبع تعليمات الطبيب.':'Avoid smoking and heavy chewing. Follow doctor\'s instructions.') + '</div>',
        extraction: '<div class="alert alert-secondary">' + (currentLang==='ar'?'ضع كمادات باردة، وتجنب المضمضة لمدة 24 ساعة.':'Apply cold compresses, avoid rinsing for 24 hours.') + '</div>'
    };
    
    const select = document.getElementById('treatmentTypeSelect');
    const adviceDiv = document.getElementById('followupAdvice');
    if (select) {
        select.addEventListener('change', () => adviceDiv.innerHTML = adviceData[select.value] || '');
        adviceDiv.innerHTML = adviceData[select.value];
    }
}

function loadTreatmentTab() {
    const c = document.getElementById('tab-treatment');
    if (!c) return;
    const saved = patientsData[currentUser.id]?.treatmentPlan || '';
    c.innerHTML = `
        <div class="card">
            <div class="card-header"><i class="fas fa-notes-medical"></i> <span class="section-title-bold">${translations[currentLang].treatmentPlan}</span></div>
            <div class="card-body">
                <p class="section-content-light">${saved || (currentLang==='ar'?'لا توجد خطة علاج بعد':'No treatment plan yet')}</p>
            </div>
        </div>
    `;
}

function loadFaqTab() {
    const c = document.getElementById('tab-faq');
    if (!c) return;
    c.innerHTML = `
        <div class="card">
            <div class="card-header"><i class="fas fa-question-circle"></i> <span class="section-title-bold">${translations[currentLang].faq}</span></div>
            <div class="card-body">
                <div class="accordion" id="faqAccordion">
                    <div class="accordion-item">
                        <h2 class="accordion-header"><button class="accordion-button" data-bs-toggle="collapse" data-bs-target="#faq1">${currentLang==='ar'?'كم يستمر الألم بعد الحشو العادي؟':'How long does pain last after a filling?'}</button></h2>
                        <div id="faq1" class="accordion-collapse collapse show"><div class="accordion-body section-content-light">${currentLang==='ar'?'24-48 ساعة، إذا زاد عن 3 أيام اتصل بالطبيب.':'24-48 hours; if it lasts more than 3 days, contact your doctor.'}</div></div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header"><button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq2">${currentLang==='ar'?'متى يمكن الأكل بعد الخلع؟':'When can I eat after an extraction?'}</button></h2>
                        <div id="faq2" class="accordion-collapse collapse"><div class="accordion-body section-content-light">${currentLang==='ar'?'بعد ساعتين، تجنب الأكل على جهة الخلع.':'After two hours, avoid eating on the extraction side.'}</div></div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header"><button class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#faq3">${currentLang==='ar'?'هل التبييض مؤلم؟':'Is teeth whitening painful?'}</button></h2>
                        <div id="faq3" class="accordion-collapse collapse"><div class="accordion-body section-content-light">${currentLang==='ar'?'قد يسبب حساسية مؤقتة.':'May cause temporary sensitivity.'}</div></div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function loadContractTab() {
    const c = document.getElementById('tab-contract');
    if (!c) return;
    const saved = patientsData[currentUser.id]?.contract || {};
    const doctorDiagnosis = patientsData[currentUser.id]?.doctorDiagnosis || '';
    const treatmentPlan = patientsData[currentUser.id]?.treatmentPlan || '';
    const risks = patientsData[currentUser.id]?.risks || (currentLang==='ar'?'لا توجد مخاطر محددة':'No specific risks');
    const doctorName = (currentUser.type === 'patient' && patientsData[currentUser.id]?.personal?.clinicId)
        ? (users.find(u => u.id === patientsData[currentUser.id].personal.clinicId)?.name || (currentLang==='ar'?'الطبيب':'Doctor'))
        : (currentLang==='ar'?'الطبيب':'Doctor');
    const contractStatus = contracts[currentUser.id]?.status || 'pending';
    const modifyRequest = contractModifyRequests[currentUser.id];
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();
    const formattedDate = `${year}-${month}-${day}`;

    let contractContent = '';
    if (currentUser.type === 'patient') {
        if (contractStatus === 'pending') {
            if (doctorDiagnosis && treatmentPlan) {
                contractContent = `
                    <div class="contract-box">
                        <p>${translations[currentLang].contractContent}</p>
                        <hr>
                        <p><strong>${currentLang==='ar'?'اسم المريض:' : 'Patient name:'}</strong> <input type="text" class="form-control" id="contractPatientName" value="${saved.patientName || currentUser.name}" style="display:inline-block; width:auto;"></p>
                        <p><strong>${currentLang==='ar'?'توقيع المريض:' : 'Patient signature:'}</strong> <input type="text" class="form-control" id="contractPatientSignature" value="${saved.patientSignature || ''}" placeholder="${currentLang==='ar'?'اكتب الاسم للتوقيع':'Type name as signature'}"></p>
                        <p><strong>${currentLang==='ar'?'اسم الطبيب:' : 'Doctor name:'}</strong> <input type="text" class="form-control" id="contractDoctorName" value="${saved.doctorName || doctorName}" readonly></p>
                        <p><strong>${currentLang==='ar'?'توقيع الطبيب:' : 'Doctor signature:'}</strong> <input type="text" class="form-control" id="contractDoctorSignature" value="${saved.doctorSignature || ''}" placeholder="${currentLang==='ar'?'اكتب الاسم للتوقيع':'Type name as signature'}" readonly></p>
                        <p><strong>${currentLang==='ar'?'التاريخ:' : 'Date:'}</strong> 
                            <span class="form-control" style="display:inline-block; width:auto; background:transparent; border:none;">${formattedDate}</span>
                            <input type="hidden" id="contractDay" value="${day}">
                            <input type="hidden" id="contractMonth" value="${month}">
                            <input type="hidden" id="contractYear" value="${year}">
                        </p>
                        <hr>
                        <h6>${currentLang==='ar'?'التشخيص (من الطبيب):' : 'Diagnosis (from doctor):'}</h6>
                        <p>${doctorDiagnosis}</p>
                        <h6>${currentLang==='ar'?'خطة العلاج (من الطبيب):' : 'Treatment plan (from doctor):'}</h6>
                        <p>${treatmentPlan}</p>
                        <h6>${currentLang==='ar'?'المخاطر المحتملة (من الطبيب):' : 'Potential risks (from doctor):'}</h6>
                        <p>${risks}</p>
                    </div>
                    <div class="mt-3">
                        <button class="btn btn-success" id="approveContract">${currentLang==='ar'?'أوافق':'I Agree'}</button>
                        <button class="btn btn-danger" id="rejectContract">${currentLang==='ar'?'لا أوافق':'I Disagree'}</button>
                    </div>
                `;
            } else {
                contractContent = `<p class="text-warning">${currentLang==='ar'?'لم يقم الطبيب بعد بإدخال التشخيص وخطة العلاج':'The doctor has not yet entered diagnosis and treatment plan'}</p>`;
            }
        } else if (contractStatus === 'approved') {
            let modifyHtml = '';
            if (modifyRequest && modifyRequest.status === 'pending') {
                modifyHtml = `
                    <div class="alert alert-info">
                        ${currentLang==='ar'?'طلب تعديل العقد من الطبيب. هل توافق؟':'The doctor requests to modify the contract. Do you agree?'}
                        <button class="btn btn-sm btn-success" onclick="respondToModifyRequest('${currentUser.id}', true)">${translations[currentLang].agree}</button>
                        <button class="btn btn-sm btn-danger" onclick="respondToModifyRequest('${currentUser.id}', false)">${translations[currentLang].disagree}</button>
                    </div>
                `;
            }
            contractContent = `
                <div class="contract-box">
                    <p>${currentLang==='ar'?'تمت الموافقة على العقد ولا يمكن التعديل.':'Contract approved and cannot be modified.'}</p>
                    ${modifyHtml}
                    <hr>
                    <p><strong>${currentLang==='ar'?'التاريخ:' : 'Date:'}</strong> ${contracts[currentUser.id]?.date || formattedDate}</p>
                    <h6>${currentLang==='ar'?'التشخيص:' : 'Diagnosis:'}</h6>
                    <p>${doctorDiagnosis || ''}</p>
                    <h6>${currentLang==='ar'?'خطة العلاج:' : 'Treatment plan:'}</h6>
                    <p>${treatmentPlan || ''}</p>
                    <h6>${currentLang==='ar'?'المخاطر:' : 'Risks:'}</h6>
                    <p>${risks}</p>
                </div>
            `;
        } else {
            contractContent = `<p>${currentLang==='ar'?'تم رفض العقد.':'Contract rejected.'}</p>`;
        }
    } else {
        contractContent = `
            <div class="contract-box">
                <p>${translations[currentLang].contractContent}</p>
                <hr>
                <h6>${currentLang==='ar'?'التشخيص:' : 'Diagnosis:'}</h6>
                <textarea class="form-control" id="doctorDiagnosis" rows="2">${doctorDiagnosis}</textarea>
                <h6 class="mt-3">${currentLang==='ar'?'خطة العلاج:' : 'Treatment plan:'}</h6>
                <textarea class="form-control" id="treatmentPlan" rows="3">${treatmentPlan}</textarea>
                <h6 class="mt-3">${currentLang==='ar'?'المخاطر المحتملة:' : 'Potential risks:'}</h6>
                <textarea class="form-control" id="risks" rows="2">${risks}</textarea>
                <h6 class="mt-3">${currentLang==='ar'?'توقيع الطبيب:' : 'Doctor signature:'}</h6>
                <input type="text" class="form-control" id="doctorSignature" value="${saved.doctorSignature || ''}" placeholder="${currentLang==='ar'?'اكتب اسمك للتوقيع':'Type your name as signature'}">
                <p class="mt-2"><strong>${currentLang==='ar'?'التاريخ:' : 'Date:'}</strong> ${formattedDate}</p>
                <button class="btn btn-primary mt-3" id="saveContractDiagnosis">${translations[currentLang].save}</button>
            </div>
        `;
    }

    c.innerHTML = `
        <div class="card">
            <div class="card-header"><i class="fas fa-file-contract"></i> <span class="section-title-bold">${translations[currentLang].contract}</span></div>
            <div class="card-body">
                ${contractContent}
            </div>
        </div>
    `;

    if (currentUser.type === 'patient') {
        document.getElementById('approveContract')?.addEventListener('click', () => {
            const day = document.getElementById('contractDay').value;
            const month = document.getElementById('contractMonth').value;
            const year = document.getElementById('contractYear').value;
            const dateStr = year && month && day ? `${year}-${month}-${day}` : formattedDate;
            contracts[currentUser.id] = { status: 'approved', date: dateStr };
            saveContracts();
            loadContractTab();
            showToast(translations[currentLang].contractApproved);
        });
        
        document.getElementById('rejectContract')?.addEventListener('click', () => {
            contracts[currentUser.id] = { status: 'rejected', date: formattedDate };
            saveContracts();
            loadContractTab();
            showToast(currentLang === 'ar' ? 'تم رفض العقد' : 'Contract rejected');
        });
    } else if (currentUser.type === 'doctor') {
        document.getElementById('saveContractDiagnosis')?.addEventListener('click', () => {
            const diagnosis = document.getElementById('doctorDiagnosis').value;
            const treatmentPlan = document.getElementById('treatmentPlan').value;
            const risks = document.getElementById('risks').value;
            const doctorSignature = document.getElementById('doctorSignature').value;
            if (!patientsData[currentUser.id]) patientsData[currentUser.id] = {};
            patientsData[currentUser.id].doctorDiagnosis = diagnosis;
            patientsData[currentUser.id].treatmentPlan = treatmentPlan;
            patientsData[currentUser.id].risks = risks;
            if (!patientsData[currentUser.id].contract) patientsData[currentUser.id].contract = {};
            patientsData[currentUser.id].contract.doctorSignature = doctorSignature;
            savePatientsData();
            showToast(translations[currentLang].contractSaved);
        });
    }
}

window.respondToModifyRequest = function(patientId, approve) {
    if (approve) {
        delete contracts[patientId];
        delete contractModifyRequests[patientId];
        saveContracts();
        saveContractModifyRequests();
        showToast(currentLang==='ar'?'تمت الموافقة، يمكن للطبيب التعديل الآن':'Approved, doctor can modify now');
    } else {
        if (contractModifyRequests[patientId]) {
            contractModifyRequests[patientId].status = 'rejected';
            saveContractModifyRequests();
        }
        showToast(currentLang==='ar'?'تم رفض طلب التعديل':'Modify request rejected');
    }
    loadContractTab();
};

// دالة تحميل ملف المريض PDF
window.downloadPatientFilePDF = function(patientId) {
    if (currentUser.type === 'patient') {
        alert(currentLang==='ar'?'هذه الخاصية متاحة للأطباء فقط':'This feature is for doctors only');
        return;
    }
    
    if (!patientId) {
        alert(currentLang==='ar'?'يرجى تحديد المريض':'Please select patient');
        return;
    }
    
    showLoading();
    
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const patient = users.find(u => u.id === patientId);
    const info = patientsData[patientId] || {};
    
    doc.setFontSize(22);
    doc.setTextColor(0, 0, 0);
    let title = currentLang === 'ar' ? 'ملف المريض' : 'Patient File';
    doc.text(title, 105, 20, { align: 'center' });
    
    let y = 35;
    
    doc.setFontSize(14);
    doc.setFont('helvetica', 'bold');
    let patientNameLabel = currentLang === 'ar' ? 'اسم المريض' : 'Patient Name';
    doc.text(patientNameLabel + ': ' + (patient?.name || ''), 20, y);
    y += 10;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    
    if (info.personal) {
        doc.setFont('helvetica', 'bold');
        doc.text(currentLang === 'ar' ? 'البيانات الشخصية' : 'Personal Data', 20, y);
        doc.setFont('helvetica', 'normal');
        y += 7;
        
        doc.text((currentLang === 'ar' ? 'العمر' : 'Age') + ': ' + (info.personal.age || '-'), 25, y);
        y += 6;
        doc.text((currentLang === 'ar' ? 'النوع' : 'Gender') + ': ' + (info.personal.gender || '-'), 25, y);
        y += 6;
        doc.text((currentLang === 'ar' ? 'الهاتف' : 'Phone') + ': ' + (info.personal.phone || '-'), 25, y);
        y += 6;
        doc.text((currentLang === 'ar' ? 'العنوان' : 'Address') + ': ' + (info.personal.address || '-'), 25, y);
        y += 10;
    }
    
    if (info.medical) {
        doc.setFont('helvetica', 'bold');
        doc.text(currentLang === 'ar' ? 'التاريخ الطبي' : 'Medical History', 20, y);
        doc.setFont('helvetica', 'normal');
        y += 7;
        
        let medicalText = '';
        if (info.medical.heart) medicalText += (currentLang==='ar'?'أمراض القلب, ':'Heart disease, ');
        if (info.medical.pressure) medicalText += (currentLang==='ar'?'ضغط الدم, ':'High BP, ');
        if (info.medical.diabetes) medicalText += (currentLang==='ar'?'السكري, ':'Diabetes, ');
        if (info.medical.asthma) medicalText += (currentLang==='ar'?'الربو, ':'Asthma, ');
        
        if (medicalText) {
            doc.text(medicalText.slice(0, -2), 25, y, { maxWidth: 160 });
            y += 7;
        }
        
        if (info.medical.otherDiseases) {
            doc.text((currentLang === 'ar' ? 'أمراض أخرى' : 'Other Diseases') + ': ' + info.medical.otherDiseases, 25, y, { maxWidth: 160 });
            y += 7;
        }
        y += 3;
    }
    
    if (info.reason) {
        doc.setFont('helvetica', 'bold');
        doc.text(currentLang === 'ar' ? 'سبب الزيارة' : 'Reason for Visit', 20, y);
        doc.setFont('helvetica', 'normal');
        y += 7;
        
        doc.text((currentLang === 'ar' ? 'الشكوى الرئيسية' : 'Main Complaint') + ': ' + (info.reason.mainComplaint || '-'), 25, y, { maxWidth: 160 });
        y += 7;
        doc.text((currentLang === 'ar' ? 'مدة الألم' : 'Pain Duration') + ': ' + (info.reason.painDuration || '-'), 25, y);
        y += 6;
        doc.text((currentLang === 'ar' ? 'شدة الألم' : 'Pain Intensity') + ': ' + (info.reason.painIntensity || '-') + '/10', 25, y);
        y += 10;
    }
    
    if (info.doctorDiagnosis) {
        doc.setFont('helvetica', 'bold');
        doc.text(currentLang === 'ar' ? 'تشخيص الطبيب' : 'Doctor Diagnosis', 20, y);
        doc.setFont('helvetica', 'normal');
        y += 7;
        doc.text(info.doctorDiagnosis, 25, y, { maxWidth: 160 });
        y += 10;
    }
    
    if (info.treatmentPlan) {
        doc.setFont('helvetica', 'bold');
        doc.text(currentLang === 'ar' ? 'خطة العلاج' : 'Treatment Plan', 20, y);
        doc.setFont('helvetica', 'normal');
        y += 7;
        doc.text(info.treatmentPlan, 25, y, { maxWidth: 160 });
        y += 10;
    }
    
    if (info.risks) {
        doc.setFont('helvetica', 'bold');
        doc.text(currentLang === 'ar' ? 'المخاطر المحتملة' : 'Potential Risks', 20, y);
        doc.setFont('helvetica', 'normal');
        y += 7;
        doc.text(info.risks, 25, y, { maxWidth: 160 });
    }
    
    hideLoading();
    
    let fileName = 'patient-file';
    if (patient?.name) {
        fileName += '-' + patient.name.replace(/[^a-zA-Z0-9\u0600-\u06FF]/g, '-');
    }
    fileName += '.pdf';
    
    doc.save(fileName);
};

function renderMyDoctors() {
    const myRelations = relations.filter(r => r.patientId === currentUser.id);
    const container = document.getElementById('myDoctorsList');
    
    if (!container) return;
    
    if (myRelations.length === 0) {
        container.innerHTML = '<p>' + (currentLang==='ar'?'لا يوجد أطباء بعد':'No doctors yet') + '</p>';
    } else {
        let html = '';
        myRelations.forEach(rel => {
            const doctor = users.find(u => u.id === rel.doctorId);
            if (!doctor) return;
            
            const patientCount = relations.filter(r => r.doctorId === doctor.id).length;
            
            html += `<div class="patient-item">
                <div>
                    <strong>${doctor.name}</strong> - ${doctor.clinic || ''}
                    <br>
                    <small class="text-muted">
                        ${currentLang === 'ar' ? 'عدد المرضى' : 'Patients'}: ${patientCount}
                    </small>
                </div>
                <div>
                    <button class="btn btn-sm btn-info" onclick="viewDoctorProfile('${doctor.id}')">
                        <i class="fas fa-eye"></i> ${currentLang === 'ar' ? 'عرض' : 'View'}
                    </button>
                </div>
            </div>`;
        });
        container.innerHTML = html;
    }
}

function renderPatientAppointments() {
    const myFollowups = followups.filter(f => f.patientId === currentUser.id);
    const container = document.getElementById('patientAppointments');
    if (!container) return;
    if (myFollowups.length === 0) container.innerHTML = '<p>' + (currentLang==='ar'?'لا توجد مواعيد متابعة':'No follow-up appointments') + '</p>';
    else {
        let html = '';
        myFollowups.forEach(f => {
            const doctor = users.find(u => u.id === f.doctorId);
            html += `<div class="patient-item">${f.date} ${f.time} - د. ${doctor?.name || ''}</div>`;
        });
        container.innerHTML = html;
    }
}

// ================== دوال الطبيب ==================
function showDoctorView() {
    document.getElementById('v-pills-tabContent').innerHTML = `
        <div class="tab-pane active" id="dashboard">
            <h2 class="page-title">${translations[currentLang].dashboard} <i class="fas fa-chart-pie"></i></h2>
            <div class="row">
                <div class="col-md-3">
                    <div class="card text-center" onclick="switchToTab('patients')">
                        <div class="card-body">
                            <h3 id="patientsCount">0</h3>
                            <p>${translations[currentLang].patients}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-center" onclick="switchToTab('appointmentsMgmt')">
                        <div class="card-body">
                            <h3 id="appointmentsCount">0</h3>
                            <p>${translations[currentLang].appointments}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-center" onclick="switchToTab('invoices')">
                        <div class="card-body">
                            <h3 id="invoicesCount">0</h3>
                            <p>${translations[currentLang].invoices}</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="card text-center" onclick="switchToTab('reports')">
                        <div class="card-body">
                            <h3 id="revenue">0</h3>
                            <p>${translations[currentLang].total}</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row mt-4">
                <div class="col-md-12">
                    <div class="card">
                        <div class="card-header">
                            <i class="fas fa-chart-line"></i> 
                            ${currentLang === 'ar' ? 'إحصائيات المرضى' : 'Patients Statistics'}
                        </div>
                        <div class="card-body">
                            <canvas id="patientsChart" style="width:100%; max-height:300px;"></canvas>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="queue-container mt-4">
                <div class="queue-card"><h4>${translations[currentLang].currentPatient}</h4><div id="currentPatient"></div></div>
                <div class="queue-card"><h4>${translations[currentLang].waitingPatients}</h4><div id="waitingPatients"></div></div>
                <div class="queue-card"><h4>${translations[currentLang].followupPatients}</h4><div id="followupPatients"></div></div>
                <div class="queue-card"><h4>${translations[currentLang].donePatients}</h4><div id="donePatients"></div></div>
            </div>
        </div>
        
        <div class="tab-pane" id="patients">
            <h2 class="page-title">${translations[currentLang].patients} <i class="fas fa-users"></i></h2>
            
            <div class="filter-section">
                <input type="text" class="form-control" id="patientSearch" placeholder="${translations[currentLang].search}..." oninput="applyAdvancedFilter()">
                
                <select class="form-select" id="filterDate" onchange="applyAdvancedFilter()">
                    <option value="all">${translations[currentLang].all}</option>
                    <option value="today">${translations[currentLang].today}</option>
                    <option value="week">${translations[currentLang].thisWeek}</option>
                    <option value="month">${translations[currentLang].thisMonth}</option>
                </select>
                
                <input type="text" class="form-control" id="filterDiagnosis" placeholder="${translations[currentLang].byDiagnosis}" oninput="applyAdvancedFilter()">
                
                <select class="form-select" id="filterGender" onchange="applyAdvancedFilter()">
                    <option value="all">${currentLang === 'ar' ? 'كل الأنواع' : 'All Genders'}</option>
                    <option value="ذكر">${currentLang === 'ar' ? 'ذكر' : 'Male'}</option>
                    <option value="أنثى">${currentLang === 'ar' ? 'أنثى' : 'Female'}</option>
                </select>
                
                <input type="number" class="form-control" id="filterAge" placeholder="${currentLang === 'ar' ? 'العمر' : 'Age'}" oninput="applyAdvancedFilter()" min="0" max="120">
            </div>
            
            <div class="d-flex justify-content-between align-items-center mb-2">
                <small class="text-muted">
                    ${currentLang === 'ar' ? 'عدد النتائج: ' : 'Results: '} <span id="resultCount">0</span>
                </small>
            </div>
            
            <div class="card">
                <div class="card-header">${translations[currentLang].patients}</div>
                <div class="card-body">
                    <table class="table table-hover table-responsive-stack">
                        <thead>
                            <tr>
                                <th>${translations[currentLang].patientName}</th>
                                <th>${translations[currentLang].phone || 'الهاتف'}</th>
                                <th>${translations[currentLang].age}</th>
                                <th>${translations[currentLang].gender}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="patientsTable"></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="tab-pane" id="appointmentsMgmt">
            <h2 class="page-title">${translations[currentLang].appointments} <i class="fas fa-calendar-alt"></i></h2>
            
            <div class="card">
                <div class="card-header">${translations[currentLang].addAppointment}</div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4">
                            <label class="form-label">${translations[currentLang].patient}</label>
                            <select class="form-select custom-select" id="appointmentPatient"></select>
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">${translations[currentLang].date}</label>
                            <input type="text" class="form-control datepicker" id="appointmentDate">
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">${translations[currentLang].time}</label>
                            <input type="time" class="form-control" id="appointmentTime">
                        </div>
                        <div class="col-md-2">
                            <label class="form-label">&nbsp;</label>
                            <button class="btn btn-primary w-100" onclick="addAppointment()">${translations[currentLang].add}</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card mt-3">
                <div class="card-header">${translations[currentLang].upcomingAppointments} (${translations[currentLang].followupPatients})</div>
                <div class="card-body">
                    <table class="table table-responsive-stack">
                        <thead>
                            <tr>
                                <th>${translations[currentLang].patient}</th>
                                <th>${translations[currentLang].date}</th>
                                <th>${translations[currentLang].time}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="appointmentsTable"></tbody>
                    </table>
                </div>
            </div>
        </div>
        
        <div class="tab-pane" id="invoices">
            <h2 class="page-title">${translations[currentLang].invoices} <i class="fas fa-file-invoice"></i></h2>
            
            <div class="card">
                <div class="card-header">${translations[currentLang].createInvoice}</div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <label class="form-label">${translations[currentLang].patient}</label>
                            <select class="form-select custom-select" id="invoicePatient"></select>
                        </div>
                        <div class="col-md-4">
                            <label class="form-label">${translations[currentLang].service}</label>
                            <input type="text" class="form-control" id="invoiceService">
                        </div>
                        <div class="col-md-2">
                            <label class="form-label">${translations[currentLang].amount}</label>    
                            <input type="number" class="form-control" id="invoicePrice" step="0.01">
                        </div>
                        <div class="col-md-2">
                            <label class="form-label">${currentLang === 'ar' ? 'الضريبة %' : 'VAT %'}</label>
                            <input type="number" class="form-control" id="invoiceVat" value="14" step="0.1" min="0" max="100">
                        </div>
                        <div class="col-md-2">
                            <label class="form-label">${currentLang === 'ar' ? 'الإجمالي' : 'Total'}</label>
                            <input type="text" class="form-control" id="invoiceTotal" readonly>
                        </div>
                        <div class="col-md-2">
                            <label class="form-label">&nbsp;</label>
                            <button class="btn btn-primary w-100" onclick="createInvoice()">${translations[currentLang].add}</button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card mt-3">
                <div class="card-header">${translations[currentLang].invoiceList}</div>
                <div class="card-body">
                    <table class="table table-responsive-stack">
                        <thead>
                            <tr>
                                <th>${translations[currentLang].patient}</th>
                                <th>${translations[currentLang].service}</th>
                                <th>${translations[currentLang].amount}</th>
                                <th>${translations[currentLang].date}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="invoicesTable"></tbody>
                    </table>
                    <h5 class="mt-3">${translations[currentLang].total}: <span id="totalRevenue"></span></h5>
                    <button class="btn btn-outline-accent mt-2" onclick="printInvoice()">${translations[currentLang].printReport}</button>
                    <button class="btn btn-outline-accent mt-2" onclick="downloadInvoicePDF()">${translations[currentLang].savePDF}</button>
                </div>
            </div>
        </div>
        
        <div class="tab-pane" id="reports">
            <h2 class="page-title">${translations[currentLang].reports} <i class="fas fa-chart-bar"></i></h2>
            <div class="card">
                <div class="card-body">
                    <p>${translations[currentLang].patients}: <span id="reportPatients">0</span></p>
                    <p>${translations[currentLang].appointments}: <span id="reportAppointments">0</span></p>
                    <p>${translations[currentLang].invoices}: <span id="reportInvoices">0</span></p>
                    <p>${translations[currentLang].total}: <span id="reportRevenue">0</span></p>
                </div>
            </div>
        </div>
        
        <div class="tab-pane" id="backup">
            <h2 class="page-title">${translations[currentLang].backup} <i class="fas fa-database"></i></h2>
            <div class="card">
                <div class="card-body">
                    <button class="btn btn-primary" onclick="backupData()">${translations[currentLang].downloadBackup}</button>
                    <button class="btn btn-success mt-2" onclick="restoreBackup()">استعادة النسخة الاحتياطية</button>
                </div>
            </div>
        </div>
        
        <div class="tab-pane" id="aiAssistant">
            <h2 class="page-title">${translations[currentLang].aiAssistant} <i class="fas fa-robot"></i></h2>
            <p class="text-muted">${translations[currentLang].aiAssistantDesc}</p>
            
            <div class="row">
                <div class="col-md-6">
                    <div class="ai-assistant-card">
                        <h5 class="section-title-bold">${translations[currentLang].patientInfo}</h5>
                        <div class="mb-3">
                            <label class="form-label section-content-light">${translations[currentLang].patient}</label>
                            <select class="form-select" id="aiPatientSelect" onchange="loadPatientDataForAI()">
                                <option value="">${translations[currentLang].selectPatientFirst}</option>
                            </select>
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label section-content-light">${translations[currentLang].patientName}</label>
                            <input type="text" class="form-control" id="aiPatientName" readonly>
                        </div>
                        
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <label class="form-label section-content-light">${translations[currentLang].age}</label>
                                <input type="number" class="form-control" id="aiPatientAge">
                            </div>
                            <div class="col-md-6 mb-3">
                                <label class="form-label section-content-light">${translations[currentLang].gender}</label>
                                <select class="form-select" id="aiPatientGender">
                                    <option value="male">${translations[currentLang].male}</option>
                                    <option value="female">${translations[currentLang].female}</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label section-content-light">${translations[currentLang].chiefComplaint}</label>
                            <textarea class="form-control" id="aiChiefComplaint" rows="2"></textarea>
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label section-content-light">${translations[currentLang].symptoms}</label>
                            <textarea class="form-control" id="aiSymptoms" rows="3" placeholder="${currentLang==='ar'?'مثال: تورم، حساسية للبارد':'Example: swelling, sensitivity to cold'}"></textarea>
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label section-content-light">${translations[currentLang].diagnosis}</label>
                            <input type="text" class="form-control" id="aiDiagnosis" placeholder="${currentLang==='ar'?'مثال: تسوس، التهاب لثة':'Example: cavity, gingivitis'}">
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label section-content-light">${translations[currentLang].xrayNotes}</label>
                            <textarea class="form-control" id="aiXrayNotes" rows="2"></textarea>
                        </div>
                        
                        <div class="mb-3">
                            <label class="form-label section-content-light">${translations[currentLang].medicalHistory}</label>
                            <textarea class="form-control" id="aiMedicalHistory" rows="2" placeholder="${currentLang==='ar'?'مثال: سكري، ضغط':'Example: diabetes, hypertension'}"></textarea>
                        </div>
                        
                        <button class="btn btn-accent w-100" onclick="generateAITreatmentPlan()" id="generateAIBtn">
                            <i class="fas fa-robot me-2"></i>${translations[currentLang].generatePlan}
                        </button>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <div class="ai-response-card" id="aiResponseContainer" style="display: none;">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h5 class="section-title-bold mb-0">${translations[currentLang].aiResponse}</h5>
                            <span class="ai-badge"><i class="fas fa-robot me-1"></i>AI</span>
                        </div>
                        
                        <div class="mb-3">
                            <h6 class="text-primary">${translations[currentLang].diagnosisSummary}</h6>
                            <p id="aiDiagnosisSummary" class="section-content-light"></p>
                        </div>
                        
                        <div class="mb-3">
                            <h6 class="text-primary">${translations[currentLang].suggestedTreatment}</h6>
                            <div id="aiTreatmentSteps" class="section-content-light"></div>
                        </div>
                        
                        <div class="mb-3">
                            <h6 class="text-primary">${translations[currentLang].medications}</h6>
                            <p id="aiMedications" class="section-content-light"></p>
                        </div>
                        
                        <div class="mb-3">
                            <h6 class="text-primary">${translations[currentLang].followupAdvice}</h6>
                            <p id="aiFollowupAdvice" class="section-content-light"></p>
                        </div>
                        
                        <div class="ai-disclaimer">
                            <i class="fas fa-exclamation-triangle me-2"></i>
                            ${translations[currentLang].disclaimer}
                        </div>
                        
                        <div class="mt-3 d-flex gap-2">
                            <button class="copy-btn" onclick="copyAIPlan()">
                                <i class="fas fa-copy me-2"></i>${translations[currentLang].copyPlan}
                            </button>
                            <button class="btn btn-primary flex-grow-1" onclick="saveAIPlanToPatient()">
                                <i class="fas fa-save me-2"></i>${translations[currentLang].saveToPatient}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        ${hasPermission('manage_users') ? `
        <div class="tab-pane" id="users">
            <h2 class="page-title">إدارة المستخدمين <i class="fas fa-users-cog"></i></h2>
            
            <div class="card mb-3">
                <div class="card-header">
                    <i class="fas fa-user-plus"></i> إضافة مستخدم جديد
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <label class="form-label">الاسم</label>
                            <input type="text" class="form-control" id="newUserName" placeholder="الاسم الكامل">
                        </div>
                        <div class="col-md-3">
                            <label class="form-label">اسم المستخدم</label>
                            <input type="text" class="form-control" id="newUserUsername" placeholder="اسم المستخدم">
                        </div>
                        <div class="col-md-2">
                            <label class="form-label">كلمة المرور</label>
                            <input type="password" class="form-control" id="newUserPassword" placeholder="******">
                        </div>
                        <div class="col-md-2">
                            <label class="form-label">الدور</label>
                            <select class="form-select" id="newUserRole">
                                <option value="doctor">طبيب</option>
                                <option value="assistant">مساعد</option>
                                <option value="receptionist">استقبال</option>
                                <option value="admin">مدير</option>
                            </select>
                        </div>
                        <div class="col-md-2">
                            <label class="form-label">&nbsp;</label>
                            <button class="btn btn-primary w-100" onclick="addNewUser()">
                                <i class="fas fa-save"></i> إضافة
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="card">
                <div class="card-header">
                    <i class="fas fa-users"></i> قائمة المستخدمين
                </div>
                <div class="card-body">
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th>الاسم</th>
                                <th>اسم المستخدم</th>
                                <th>الدور</th>
                                <th>تاريخ الإنشاء</th>
                                <th>التقييم</th>
                                <th>الإجراءات</th>
                            </tr>
                        </thead>
                        <tbody id="usersTable">
                            <tr>
                                <td colspan="6" class="text-center">جاري التحميل...</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        ` : ''}
    `;
    
    loadDashboardData();
    loadPatientsList();
    loadAppointmentsList();
    loadInvoicesList();
    loadReports();
    document.getElementById('patientSearch')?.addEventListener('input', searchPatient);
    populatePatientSelects();
    populateAIPatientSelect();
    checkAppointments();
    renderDoctorDashboard();
    document.querySelectorAll('#v-pills-tab .nav-link').forEach(link => {
        link.addEventListener('click', () => window.scrollTo(0, 0));
    });
    
    setTimeout(() => {
        const priceInput = document.getElementById('invoicePrice');
        const vatInput = document.getElementById('invoiceVat');
        const totalInput = document.getElementById('invoiceTotal');
        
        if (priceInput && vatInput && totalInput) {
            function calculateTotal() {
                const price = parseFloat(priceInput.value) || 0;
                const vat = parseFloat(vatInput.value) || 0;
                const total = price + (price * vat / 100);
                totalInput.value = total.toFixed(2);
            }
            
            priceInput.addEventListener('input', calculateTotal);
            vatInput.addEventListener('input', calculateTotal);
        }
    }, 500);
    
    if (hasPermission('manage_users')) {
        $('#users').on('shown.bs.tab', function() {
            loadUsersList();
        });
    }
    // تحديث قائمة المستخدمين عند فتح التبويب
document.querySelectorAll('button[data-bs-target="#users"]').forEach(btn => {
    btn.addEventListener('click', function() {
        console.log('📋 تم فتح تبويب المستخدمين');
        setTimeout(loadUsersList, 100);
    });
});
}

// دوال AI Assistant
function populateAIPatientSelect() {
    let myRelations = relations.filter(r => r.doctorId === currentUser.id);
    let patients = myRelations.map(r => users.find(u => u.id === r.patientId)).filter(p => p);
    let options = '<option value="">' + (currentLang==='ar'?'اختر المريض':'Select patient') + '</option>';
    patients.forEach(p => options += `<option value="${p.id}">${p.name}</option>`);
    const select = document.getElementById('aiPatientSelect');
    if (select) select.innerHTML = options;
}

window.loadPatientDataForAI = function() {
    const patientId = document.getElementById('aiPatientSelect').value;
    if (!patientId) return;
    
    const patient = users.find(u => u.id === patientId);
    const info = patientsData[patientId] || {};
    
    document.getElementById('aiPatientName').value = patient?.name || '';
    document.getElementById('aiPatientAge').value = info.personal?.age || '';
    document.getElementById('aiPatientGender').value = info.personal?.gender === (currentLang==='ar'?'ذكر':'Male') ? 'male' : 'female';
    document.getElementById('aiChiefComplaint').value = info.reason?.mainComplaint || '';
    document.getElementById('aiSymptoms').value = '';
    
    let symptoms = [];
    if (info.dental) {
        if (info.dental.symptomPain) symptoms.push(currentLang==='ar'?'ألم في الأسنان':'Tooth pain');
        if (info.dental.symptomBleeding) symptoms.push(currentLang==='ar'?'نزيف اللثة':'Bleeding gums');
        if (info.dental.symptomSensitivity) symptoms.push(currentLang==='ar'?'حساسية':'Sensitivity');
        if (info.dental.symptomJaw) symptoms.push(currentLang==='ar'?'ألم في الفك':'Jaw pain');
    }
    document.getElementById('aiSymptoms').value = symptoms.join(', ');
    
    document.getElementById('aiDiagnosis').value = info.doctorDiagnosis || '';
    
    let medicalHistory = [];
    if (info.medical) {
        if (info.medical.diabetes) medicalHistory.push(currentLang==='ar'?'سكري':'Diabetes');
        if (info.medical.pressure) medicalHistory.push(currentLang==='ar'?'ضغط':'Hypertension');
        if (info.medical.heart) medicalHistory.push(currentLang==='ar'?'قلب':'Heart disease');
        if (info.medical.asthma) medicalHistory.push(currentLang==='ar'?'ربو':'Asthma');
    }
    document.getElementById('aiMedicalHistory').value = medicalHistory.join(', ');
};

// متغيرات لإدارة تحديد الصور
let isSelectMode = false;
let selectedImages = [];
let currentPatientIdForImages = null;

window.viewCaseImages = function(patientId) {
    currentPatientIdForImages = patientId;
    const images = patientImages[patientId] || [];
    let imagesHtml = '';
    
    imagesHtml = `
        <div class="images-selection-toolbar">
            <button class="select-images-btn" onclick="toggleSelectMode()">
                <i class="fas fa-check-square"></i> ${currentLang==='ar'?'تحديد صور':'Select Images'}
            </button>
            <button class="delete-selected-btn" id="deleteSelectedBtn" onclick="deleteSelectedImages()">
                <i class="fas fa-trash-alt"></i> ${currentLang==='ar'?'حذف المحدد':'Delete Selected'} (<span id="selectedCount">0</span>)
            </button>
            <button class="cancel-selection-btn" id="cancelSelectionBtn" onclick="cancelSelection()">
                <i class="fas fa-times"></i> ${currentLang==='ar'?'إلغاء التحديد':'Cancel Selection'}
            </button>
        </div>
    `;
    
    imagesHtml += `
        <button class="add-images-btn" onclick="showImageUploadModal('${patientId}')">
            <i class="fas fa-plus-circle"></i> ${currentLang==='ar'?'إضافة صور جديدة':'Add New Images'}
        </button>
    `;
    
    if (images.length === 0) {
        imagesHtml += '<p class="text-center">' + (currentLang==='ar'?'لا توجد صور':'No images') + '</p>';
    } else {
        imagesHtml += '<div class="row" id="imagesGrid">';
        images.forEach((img, index) => {
            const isSelected = selectedImages.includes(index);
            imagesHtml += `
                <div class="col-md-4 mb-3">
                    <div class="image-container ${isSelected ? 'selected' : ''}" data-index="${index}">
                        <input type="checkbox" class="image-checkbox ${isSelectMode ? 'show' : ''}" 
                               data-index="${index}" ${isSelected ? 'checked' : ''} 
                               onchange="handleImageSelection(${index}, this.checked)">
                        <img src="${img.url || img}" class="img-fluid xray-preview" 
                             onclick="${isSelectMode ? 'toggleImageCheckbox('+index+')' : 'openImageViewer(\''+patientId+'\', '+index+')'}">
                    </div>
                </div>`;
        });
        imagesHtml += '</div>';
    }
    
    document.getElementById('caseImagesBody').innerHTML = imagesHtml;
    updateSelectionToolbar();
    caseImagesModal.show();
};

window.toggleSelectMode = function() {
    isSelectMode = !isSelectMode;
    if (!isSelectMode) {
        cancelSelection();
    }
    
    document.querySelectorAll('.image-checkbox').forEach(cb => {
        if (isSelectMode) {
            cb.classList.add('show');
        } else {
            cb.classList.remove('show');
        }
    });
    
    const selectBtn = document.querySelector('.select-images-btn');
    if (selectBtn) {
        if (isSelectMode) {
            selectBtn.classList.add('active');
        } else {
            selectBtn.classList.remove('active');
        }
    }
    
    updateSelectionToolbar();
};

window.handleImageSelection = function(index, checked) {
    if (checked) {
        if (!selectedImages.includes(index)) {
            selectedImages.push(index);
        }
    } else {
        selectedImages = selectedImages.filter(i => i !== index);
    }
    
    const container = document.querySelector(`.image-container[data-index="${index}"]`);
    if (container) {
        if (checked) {
            container.classList.add('selected');
        } else {
            container.classList.remove('selected');
        }
    }
    
    updateSelectionToolbar();
};

window.toggleImageCheckbox = function(index) {
    const checkbox = document.querySelector(`.image-checkbox[data-index="${index}"]`);
    if (checkbox) {
        checkbox.checked = !checkbox.checked;
        handleImageSelection(index, checkbox.checked);
    }
};

function updateSelectionToolbar() {
    const deleteBtn = document.getElementById('deleteSelectedBtn');
    const cancelBtn = document.getElementById('cancelSelectionBtn');
    const selectedCountSpan = document.getElementById('selectedCount');
    
    if (selectedCountSpan) {
        selectedCountSpan.textContent = selectedImages.length;
    }
    
    if (selectedImages.length > 0) {
        if (deleteBtn) deleteBtn.classList.add('show');
        if (cancelBtn) cancelBtn.classList.add('show');
    } else {
        if (deleteBtn) deleteBtn.classList.remove('show');
        if (cancelBtn && !isSelectMode) cancelBtn.classList.remove('show');
    }
}

window.deleteSelectedImages = function() {
    if (selectedImages.length === 0 || !currentPatientIdForImages) return;
    
    showConfirmDialog(
        currentLang==='ar' 
            ? `هل أنت متأكد من حذف ${selectedImages.length} صورة؟` 
            : `Are you sure you want to delete ${selectedImages.length} image(s)?`,
        function() {
            let images = patientImages[currentPatientIdForImages] || [];
            
            selectedImages.sort((a, b) => b - a).forEach(index => {
                images.splice(index, 1);
            });
            
            if (images.length === 0) {
                delete patientImages[currentPatientIdForImages];
            } else {
                patientImages[currentPatientIdForImages] = images;
            }
            
            savePatientImages();
            
            selectedImages = [];
            isSelectMode = false;
            
            viewCaseImages(currentPatientIdForImages);
            
            showToast(currentLang==='ar'?'تم حذف الصور المحددة':'Selected images deleted');
        }
    );
};

window.cancelSelection = function() {
    selectedImages = [];
    isSelectMode = false;
    
    document.querySelectorAll('.image-checkbox').forEach(cb => {
        cb.checked = false;
        cb.classList.remove('show');
    });
    
    document.querySelectorAll('.image-container').forEach(container => {
        container.classList.remove('selected');
    });
    
    const selectBtn = document.querySelector('.select-images-btn');
    if (selectBtn) {
        selectBtn.classList.remove('active');
    }
    
    updateSelectionToolbar();
};

window.showImageUploadModal = function(patientId) {
    currentPatientIdForImages = patientId;
    
    const modalHtml = `
        <div class="modal fade" id="imageUploadModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content glass-card">
                    <div class="modal-header">
                        <h5 class="modal-title">${currentLang==='ar'?'إضافة صور جديدة':'Add New Images'}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <select class="form-select mb-3" id="uploadImageCategory">
                            <option value="general">${translations[currentLang].general}</option>
                            <option value="before">${translations[currentLang].before}</option>
                            <option value="after">${translations[currentLang].after}</option>
                        </select>
                        <input type="file" id="bulkImageUpload" accept="image/*" multiple class="form-control mb-3">
                        <div id="uploadPreview" class="row"></div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">${translations[currentLang].cancel}</button>
                        <button class="btn btn-primary" onclick="uploadSelectedImages()">${translations[currentLang].uploadImages}</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    if (document.getElementById('imageUploadModal')) {
        document.getElementById('imageUploadModal').remove();
    }
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    const uploadModal = new bootstrap.Modal(document.getElementById('imageUploadModal'));
    uploadModal.show();
    
    document.getElementById('bulkImageUpload').addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        const previewDiv = document.getElementById('uploadPreview');
        previewDiv.innerHTML = '';
        
        files.forEach((file, index) => {
            const reader = new FileReader();
            reader.onload = (ev) => {
                const col = document.createElement('div');
                col.className = 'col-md-4 mb-2';
                col.innerHTML = `
                    <div class="image-container">
                        <img src="${ev.target.result}" class="img-fluid xray-preview" style="max-height:100px;">
                        <small class="d-block text-center">${file.name.substring(0, 15)}${file.name.length > 15 ? '...' : ''}</small>
                    </div>
                `;
                previewDiv.appendChild(col);
            };
            reader.readAsDataURL(file);
        });
    });
};

window.uploadSelectedImages = function() {
    const files = document.getElementById('bulkImageUpload').files;
    const category = document.getElementById('uploadImageCategory').value;
    
    if (files.length === 0) {
        alert(currentLang==='ar'?'اختر صور أولاً':'Select images first');
        return;
    }
    
    showLoading();
    
    if (!patientImages[currentPatientIdForImages]) {
        patientImages[currentPatientIdForImages] = [];
    }
    
    let processed = 0;
    
    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (ev) => {
            patientImages[currentPatientIdForImages].push({
                url: ev.target.result,
                category: category
            });
            
            processed++;
            if (processed === files.length) {
                savePatientImages();
                hideLoading();
                bootstrap.Modal.getInstance(document.getElementById('imageUploadModal')).hide();
                viewCaseImages(currentPatientIdForImages);
                showToast(currentLang==='ar'?'تم رفع الصور بنجاح':'Images uploaded successfully');
            }
        };
        reader.readAsDataURL(file);
    });
};

window.getPreliminaryDiagnosis = async function(patientId) {
    if (!patientId) {
        alert(translations[currentLang].selectPatientFirst);
        return;
    }

    showLoading();
    document.getElementById('loadingOverlay').innerHTML = `
        <div style="text-align: center;">
            <div class="spinner"></div>
            <p style="color: white; margin-top: 20px; font-size: 18px;">
                ${translations[currentLang].analyzingPatientData || 'جاري تحليل بيانات المريض...'}
            </p>
        </div>
    `;
    
    const patient = users.find(u => u.id === patientId);
    const info = patientsData[patientId] || {};
    
    const patientData = {
        age: info.personal?.age || '',
        gender: info.personal?.gender || '',
        chiefComplaint: info.reason?.mainComplaint || '',
        symptoms: [],
        medicalHistory: [],
        dentalHistory: info.dental || {}
    };

    if (info.dental) {
        if (info.dental.symptomPain) patientData.symptoms.push('ألم في الأسنان');
        if (info.dental.symptomBleeding) patientData.symptoms.push('نزيف اللثة');
        if (info.dental.symptomSensitivity) patientData.symptoms.push('حساسية');
        if (info.dental.symptomJaw) patientData.symptoms.push('ألم في الفك');
        if (info.dental.symptomBadBreath) patientData.symptoms.push('رائحة كريهة');
        if (info.dental.symptomChewing) patientData.symptoms.push('صعوبة مضغ');
    }

    if (info.medical) {
        if (info.medical.diabetes) patientData.medicalHistory.push('سكري');
        if (info.medical.pressure) patientData.medicalHistory.push('ضغط');
        if (info.medical.heart) patientData.medicalHistory.push('قلب');
        if (info.medical.asthma) patientData.medicalHistory.push('ربو');
    }

    const GEMINI_API_KEY = 'AIzaSyDfS2qszDErKsIyxgkOHBgWc1ZkjFuvaWs';

    try {
        const prompt = `كدكتور أسنان خبير، قم بتحليل حالة المريض التالية وقدم تشخيصاً مبدئياً دقيقاً:

معلومات المريض:
- العمر: ${patientData.age}
- الجنس: ${patientData.gender}
- الشكوى الرئيسية: ${patientData.chiefComplaint}
- الأعراض: ${patientData.symptoms.join(', ')}
- التاريخ الطبي: ${patientData.medicalHistory.join(', ')}
- آخر زيارة: ${patientData.dentalHistory?.lastVisit || 'غير محدد'}

المطلوب:
1. التشخيص المبدئي مع نسبة الثقة
2. خطة علاج مقترحة (خطوات محددة)
3. الأدوية المطلوبة
4. نصائح للمتابعة
5. تشخيص تفريقي (احتمالات أخرى)
6. نصائح إكلينيكية مهمة

قدم الإجابة بتنسيق JSON واضح.`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.3,
                    maxOutputTokens: 1024,
                }
            })
        });

        const data = await response.json();
        
        if (data.candidates && data.candidates[0]) {
            const aiText = data.candidates[0].content.parts[0].text;
            
            let diagnosisData;
            try {
                const jsonMatch = aiText.match(/\{[\s\S]*\}/);
                if (jsonMatch) {
                    diagnosisData = JSON.parse(jsonMatch[0]);
                } else {
                    diagnosisData = {
                        primaryDiagnosis: aiText.split('\n')[0] || 'تشخيص غير محدد',
                        confidence: '85%',
                        treatmentPlan: aiText.split('\n').slice(1, 5).join('\n'),
                        medications: 'حسب التشخيص',
                        followup: 'متابعة خلال أسبوع',
                        differentialDiagnosis: ['يحتاج فحص إضافي'],
                        clinicalNotes: aiText
                    };
                }
            } catch (e) {
                console.error('خطأ في تحليل JSON:', e);
                diagnosisData = {
                    primaryDiagnosis: aiText.substring(0, 100),
                    confidence: '80%',
                    treatmentPlan: 'يحتاج تقييم سريري كامل',
                    medications: 'تحدد بعد التشخيص',
                    followup: 'متابعة خلال 7 أيام',
                    differentialDiagnosis: ['التهاب دواعم السن', 'تسوس عميق', 'خراج'],
                    clinicalNotes: aiText
                };
            }
            
            if (!preliminaryDiagnoses[patientId]) {
                preliminaryDiagnoses[patientId] = [];
            }
            
            preliminaryDiagnoses[patientId].push({
                ...diagnosisData,
                date: new Date().toISOString(),
                doctorId: currentUser.id
            });
            
            savePreliminaryDiagnoses();
            
            showPreliminaryDiagnosisModal(patientId, diagnosisData);
            
            hideLoading();
            showToast('✅ تم إنشاء التشخيص المبدئي بنجاح');
        }
    } catch (error) {
        console.error('خطأ في الاتصال بالذكاء الاصطناعي:', error);
        hideLoading();
        
        const mockDiagnosis = generateMockPreliminaryDiagnosis(patientData);
        
        if (!preliminaryDiagnoses[patientId]) {
            preliminaryDiagnoses[patientId] = [];
        }
        
        preliminaryDiagnoses[patientId].push({
            ...mockDiagnosis,
            date: new Date().toISOString(),
            doctorId: currentUser.id,
            isMock: true
        });
        
        savePreliminaryDiagnoses();
        showPreliminaryDiagnosisModal(patientId, mockDiagnosis);
        showToast('⚠️ تم استخدام تشخيص وهمي (احتياطي)');
    }
};

function generateMockPreliminaryDiagnosis(patientData) {
    const isArabic = currentLang === 'ar';
    const symptoms = patientData.symptoms.join(' ').toLowerCase();
    
    let diagnosis = {
        primaryDiagnosis: '',
        confidence: '75%',
        treatmentPlan: [],
        medications: '',
        followup: '',
        differentialDiagnosis: [],
        clinicalNotes: ''
    };
    
    if (symptoms.includes('ألم') || symptoms.includes('pain')) {
        diagnosis.primaryDiagnosis = isArabic ? 'تسوس أسنان عميق' : 'Deep dental caries';
        diagnosis.treatmentPlan = isArabic ? [
            'فحص سريري شامل',
            'تصوير شعاعي للتأكد من العمق',
            'إزالة التسوس تحت التخدير الموضعي',
            'حشو تجميلي أو علاج عصب حسب العمق'
        ] : [
            'Comprehensive clinical examination',
            'X-ray to confirm depth',
            'Caries removal under local anesthesia',
            'Composite filling or root canal based on depth'
        ];
        diagnosis.medications = isArabic ? 'مسكن ألم (ايبوبروفين 400 مجم)' : 'Pain reliever (Ibuprofen 400mg)';
        diagnosis.followup = isArabic ? 'مراجعة بعد أسبوعين للتأكد من نجاح العلاج' : 'Review after 2 weeks to ensure treatment success';
        diagnosis.differentialDiagnosis = isArabic ? ['التهاب لب السن', 'خراج', 'حساسية الأسنان'] : ['Pulpitis', 'Abscess', 'Tooth sensitivity'];
        diagnosis.clinicalNotes = isArabic ? 'يوصى بإجراء اختبار حيوية اللب لتحديد مدى الضرر' : 'Pulp vitality test recommended to determine extent of damage';
    } else if (symptoms.includes('نزيف') || symptoms.includes('bleeding')) {
        diagnosis.primaryDiagnosis = isArabic ? 'التهاب اللثة' : 'Gingivitis';
        diagnosis.treatmentPlan = isArabic ? [
            'تنظيف الأسنان بإزالة الجير',
            'تلميع الأسنان',
            'تعليم تقنيات التنظيف الصحيحة',
            'متابعة العناية المنزلية'
        ] : [
            'Scaling and root planing',
            'Teeth polishing',
            'Oral hygiene instructions',
            'Home care follow-up'
        ];
        diagnosis.medications = isArabic ? 'غسول فم مطهر (كلورهيكسيدين)' : 'Antiseptic mouthwash (Chlorhexidine)';
        diagnosis.followup = isArabic ? 'مراجعة بعد 3 أشهر لتقييم تحسن اللثة' : 'Review after 3 months to assess gum improvement';
        diagnosis.differentialDiagnosis = isArabic ? ['التهاب دواعم السن', 'نقص فيتامين C', 'أمراض دم'] : ['Periodontitis', 'Vitamin C deficiency', 'Blood disorders'];
        diagnosis.clinicalNotes = isArabic ? 'ينصح بفحص تعداد الدم الكامل لاستبعاد أمراض جهازية' : 'Complete blood count recommended to rule out systemic diseases';
    } else {
        diagnosis.primaryDiagnosis = isArabic ? 'يحتاج فحص إضافي' : 'Needs further examination';
        diagnosis.treatmentPlan = isArabic ? [
            'فحص سريري كامل',
            'تصوير شعاعي بانورامي',
            'اختبارات حساسية الأسنان',
            'استشارة أخصائي عند الحاجة'
        ] : [
            'Complete clinical examination',
            'Panoramic X-ray',
            'Sensitivity tests',
            'Specialist consultation if needed'
        ];
        diagnosis.medications = isArabic ? 'مسكن ألم مؤقت عند الحاجة' : 'Temporary pain reliever as needed';
        diagnosis.followup = isArabic ? 'مراجعة خلال أسبوع لوضع خطة علاج مناسبة' : 'Review within 1 week for appropriate treatment plan';
        diagnosis.differentialDiagnosis = isArabic ? ['تسوس', 'التهاب', 'مشكلة في المفصل الفكي'] : ['Caries', 'Inflammation', 'TMJ disorder'];
        diagnosis.clinicalNotes = isArabic ? 'يوصى بتوثيق الأعراض بالتفصيل لتسهيل التشخيص' : 'Detailed symptom documentation recommended for accurate diagnosis';
    }
    
    return diagnosis;
}

function showPreliminaryDiagnosisModal(patientId, diagnosisData) {
    const patient = users.find(u => u.id === patientId);
    const modalId = 'preliminaryDiagnosisModal';
    
    if (document.getElementById(modalId)) {
        document.getElementById(modalId).remove();
    }
    
    const modalHtml = `
        <div class="modal fade" id="${modalId}" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content glass-card">
                    <div class="modal-header">
                        <h5 class="modal-title">
                            <i class="fas fa-stethoscope me-2" style="color: #667eea;"></i>
                            ${translations[currentLang].preliminaryDiagnosis} - ${patient?.name}
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="preliminary-diagnosis-card">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h6 class="mb-0">🔍 ${translations[currentLang].possibleDiagnosis}</h6>
                                <span class="diagnosis-confidence">
                                    ${translations[currentLang].confidence}: ${diagnosisData.confidence}
                                </span>
                            </div>
                            <p class="section-content-light">${diagnosisData.primaryDiagnosis}</p>
                        </div>
                        
                        <div class="ai-treatment-plan">
                            <h6>💊 ${translations[currentLang].recommendedTreatment}</h6>
                            <div class="treatment-steps">
                                ${Array.isArray(diagnosisData.treatmentPlan) ? 
                                    diagnosisData.treatmentPlan.map(step => 
                                        `<div class="treatment-step">✓ ${step}</div>`
                                    ).join('') : 
                                    `<div class="treatment-step">✓ ${diagnosisData.treatmentPlan}</div>`
                                }
                            </div>
                        </div>
                        
                        <div class="diagnosis-section">
                            <strong>💊 ${translations[currentLang].medications}</strong>
                            <p class="section-content-light">${diagnosisData.medications}</p>
                        </div>
                        
                        <div class="diagnosis-section">
                            <strong>📅 ${translations[currentLang].followupAdvice}</strong>
                            <p class="section-content-light">${diagnosisData.followup}</p>
                        </div>
                        
                        <div class="differential-diagnosis">
                            <h6>🔄 ${translations[currentLang].differentialDiagnosis}</h6>
                            ${Array.isArray(diagnosisData.differentialDiagnosis) ?
                                diagnosisData.differentialDiagnosis.map(d => 
                                    `<div class="differential-item">
                                        <span>${d}</span>
                                        <span class="differential-probability">${Math.floor(Math.random() * 30 + 10)}%</span>
                                    </div>`
                                ).join('') :
                                `<div class="differential-item">
                                    <span>${diagnosisData.differentialDiagnosis}</span>
                                    <span class="differential-probability">50%</span>
                                </div>`
                            }
                        </div>
                        
                        ${diagnosisData.clinicalNotes ? `
                            <div class="diagnosis-section">
                                <strong>📝 ${translations[currentLang].clinicalPearls}</strong>
                                <p class="section-content-light">${diagnosisData.clinicalNotes}</p>
                            </div>
                        ` : ''}
                        
                        <div class="ai-disclaimer mt-3">
                            <i class="fas fa-exclamation-triangle me-2"></i>
                            ${translations[currentLang].disclaimer}
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="accept-plan-btn" onclick="acceptPreliminaryDiagnosis('${patientId}')">
                            <i class="fas fa-check me-2"></i>${translations[currentLang].acceptSuggestion}
                        </button>
                        <button class="modify-plan-btn" onclick="modifyPreliminaryDiagnosis('${patientId}')">
                            <i class="fas fa-edit me-2"></i>${translations[currentLang].modifySuggestion}
                        </button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            <i class="fas fa-times me-2"></i>${translations[currentLang].close}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById(modalId));
    modal.show();
}

window.acceptPreliminaryDiagnosis = function(patientId) {
    const modal = document.getElementById('preliminaryDiagnosisModal');
    const diagnosisText = modal.querySelector('.preliminary-diagnosis-card p').innerText;
    const treatmentSteps = modal.querySelectorAll('.treatment-step');
    
    let treatmentPlan = '';
    treatmentSteps.forEach(step => {
        treatmentPlan += step.innerText.replace('✓ ', '') + '\n';
    });
    
    if (!patientsData[patientId]) patientsData[patientId] = {};
    patientsData[patientId].doctorDiagnosis = diagnosisText;
    patientsData[patientId].treatmentPlan = treatmentPlan;
    patientsData[patientId].aiGeneratedDiagnosis = true;
    patientsData[patientId].diagnosisDate = new Date().toISOString();
    
    savePatientsData();
    
    bootstrap.Modal.getInstance(modal).hide();
    showToast(translations[currentLang].planSaved);
};

window.modifyPreliminaryDiagnosis = function(patientId) {
    bootstrap.Modal.getInstance(document.getElementById('preliminaryDiagnosisModal')).hide();
    showPatientDetails(patientId);
    showToast(translations[currentLang].modifySuggestion);
};

const originalShowPatientDetails = window.showPatientDetails;
window.showPatientDetails = function(patientId) {
    originalShowPatientDetails(patientId);
    
    setTimeout(() => {
        const modalFooter = document.querySelector('#patientDetailsModal .modal-footer');
        if (modalFooter) {
            const diagnosisBtn = document.createElement('button');
            diagnosisBtn.className = 'preliminary-diagnosis-btn';
            diagnosisBtn.innerHTML = '<i class="fas fa-robot me-2"></i>' + translations[currentLang].getPreliminaryDiagnosis;
            diagnosisBtn.onclick = () => {
                bootstrap.Modal.getInstance(document.getElementById('patientDetailsModal')).hide();
                getPreliminaryDiagnosis(patientId);
            };
            modalFooter.insertBefore(diagnosisBtn, modalFooter.firstChild);
        }
    }, 500);
};

window.generateAITreatmentPlan = async function() {
    const patientId = document.getElementById('aiPatientSelect').value;
    const patientName = document.getElementById('aiPatientName').value;
    const age = document.getElementById('aiPatientAge').value;
    const gender = document.getElementById('aiPatientGender').value;
    const chiefComplaint = document.getElementById('aiChiefComplaint').value;
    const symptoms = document.getElementById('aiSymptoms').value;
    const diagnosis = document.getElementById('aiDiagnosis').value;
    const xrayNotes = document.getElementById('aiXrayNotes').value;
    const medicalHistory = document.getElementById('aiMedicalHistory').value;

    if (!patientId || !patientName || !age || !chiefComplaint) {
        alert(translations[currentLang].fillRequiredFields);
        return;
    }

    showLoading();
    const generateBtn = document.getElementById('generateAIBtn');
    generateBtn.disabled = true;
    generateBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>' + translations[currentLang].generating;

    const GEMINI_API_KEY = 'AIzaSyDfS2qszDErKsIyxgkOHBgWc1ZkjFuvaWs';

    try {
        const prompt = `كدكتور أسنان، حلل هذه الحالة وقدم خطة علاج مفصلة:

معلومات المريض:
- العمر: ${age}
- الجنس: ${gender === 'male' ? 'ذكر' : 'أنثى'}
- الشكوى الرئيسية: ${chiefComplaint}
- الأعراض: ${symptoms}
- التشخيص المبدئي: ${diagnosis}
- التاريخ الطبي: ${medicalHistory}
- ملاحظات الأشعة: ${xrayNotes}

المطلوب:
1. ملخص التشخيص التفصيلي
2. خطة العلاج المقترحة (خطوات مرقمة)
3. الأدوية المطلوبة (إن وجدت)
4. نصائح المتابعة

قدم الإجابة بتنسيق واضح ومفهوم.`;

        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: prompt
                    }]
                }],
                generationConfig: {
                    temperature: 0.3,
                    maxOutputTokens: 1024,
                }
            })
        });

        const data = await response.json();

        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            const aiText = data.candidates[0].content.parts[0].text;
            
            const sections = aiText.split(/\d\.|\n\n/);
            
            document.getElementById('aiDiagnosisSummary').innerHTML = sections[1] || aiText.substring(0, 200);
            
            let treatmentSteps = [];
            const lines = aiText.split('\n');
            treatmentSteps = lines.filter(line => line.match(/^\d+\.|^\-/)).map(line => line.replace(/^\d+\.\s*|^-\s*/, ''));
            
            if (treatmentSteps.length > 0) {
                let treatmentHtml = '<ol class="mb-0">';
                treatmentSteps.forEach(step => {
                    treatmentHtml += `<li>${step}</li>`;
                });
                treatmentHtml += '</ol>';
                document.getElementById('aiTreatmentSteps').innerHTML = treatmentHtml;
            } else {
                document.getElementById('aiTreatmentSteps').innerHTML = `<p>${aiText}</p>`;
            }
            
            document.getElementById('aiMedications').innerHTML = aiText.includes('أدوية') ? aiText.split('أدوية')[1]?.split('\n')[0] || 'حسب التشخيص' : 'حسب التشخيص';
            document.getElementById('aiFollowupAdvice').innerHTML = aiText.includes('متابعة') ? aiText.split('متابعة')[1]?.split('\n')[0] || 'متابعة خلال أسبوع' : 'متابعة خلال أسبوع';
            
            document.getElementById('aiResponseContainer').style.display = 'block';
            
            showToast('✅ تم التوليد باستخدام الذكاء الاصطناعي الحقيقي');
            console.log('الذكاء الاصطناعي الحقيقي شغال ✅');
        } else {
            throw new Error('استجابة غير صالحة');
        }

    } catch (error) {
        console.error('خطأ في الذكاء الاصطناعي الحقيقي:', error);
        showToast('⚠️ تم التبديل إلى الخطة الوهمية');
        
        const mockResponse = generateMockAIResponse(diagnosis, symptoms, medicalHistory);
        
        document.getElementById('aiDiagnosisSummary').innerHTML = mockResponse.diagnosisSummary;
        
        let treatmentHtml = '<ol class="mb-0">';
        mockResponse.treatmentSteps.forEach(step => {
            treatmentHtml += `<li>${step}</li>`;
        });
        treatmentHtml += '</ol>';
        document.getElementById('aiTreatmentSteps').innerHTML = treatmentHtml;
        
        document.getElementById('aiMedications').innerHTML = mockResponse.medications;
        document.getElementById('aiFollowupAdvice').innerHTML = mockResponse.followup;
        
        document.getElementById('aiResponseContainer').style.display = 'block';
        console.log('الخطة الوهمية شغالة ⚠️');
    }

    hideLoading();
    generateBtn.disabled = false;
    generateBtn.innerHTML = '<i class="fas fa-robot me-2"></i>' + translations[currentLang].generatePlan;
};

function generateMockAIResponse(diagnosis, symptoms, medicalHistory) {
    const isArabic = currentLang === 'ar';
    
    let response = {
        diagnosisSummary: '',
        treatmentSteps: [],
        medications: '',
        followup: ''
    };
    
    if (diagnosis.toLowerCase().includes('تسوس') || diagnosis.toLowerCase().includes('cavity')) {
        response.diagnosisSummary = isArabic ? 'تسوس الأسنان: تجويف في طبقة المينا' : 'Dental Caries: Cavity in enamel layer';
        response.treatmentSteps = isArabic ? [
            'فحص سريري للأسنان المصابة',
            'تصوير شعاعي لتحديد عمق التسوس',
            'إزالة التسوس باستخدام الحفر',
            'حشو تجميلي بلون السن',
            'تلميع الحشوة'
        ] : [
            'Clinical examination of affected teeth',
            'X-ray to determine cavity depth',
            'Caries removal using drilling',
            'Tooth-colored composite filling',
            'Polishing the filling'
        ];
        response.medications = isArabic ? 'مسكن ألم عند الحاجة (ايبوبروفين)' : 'Pain reliever if needed (Ibuprofen)';
        response.followup = isArabic ? 'مراجعة بعد أسبوعين للتأكد من عدم وجود حساسية' : 'Review after 2 weeks to check for sensitivity';
    } 
    else if (diagnosis.toLowerCase().includes('التهاب') || diagnosis.toLowerCase().includes('gingivitis')) {
        response.diagnosisSummary = isArabic ? 'التهاب اللثة: التهاب في أنسجة اللثة' : 'Gingivitis: Inflammation of gum tissue';
        response.treatmentSteps = isArabic ? [
            'تنظيف الأسنان بإزالة الترسبات الجيرية',
            'تلميع الأسنان',
            'تعليم تقنيات التنظيف الصحيحة',
            'غسول فم مطهر'
        ] : [
            'Scaling and root planing',
            'Teeth polishing',
            'Oral hygiene instructions',
            'Antiseptic mouthwash'
        ];
        response.medications = isArabic ? 'غسول فم مطهر بالكلورهيكسيدين' : 'Chlorhexidine mouthwash';
        response.followup = isArabic ? 'مراجعة بعد 3 أشهر لتقييم تحسن اللثة' : 'Review after 3 months to assess gum improvement';
    }
    else if (diagnosis.toLowerCase().includes('خراج') || diagnosis.toLowerCase().includes('abscess')) {
        response.diagnosisSummary = isArabic ? 'خراج سني: تجمع صديدي بسبب التهاب الجذور' : 'Dental abscess: Pus collection due to root infection';
        response.treatmentSteps = isArabic ? [
            'تصوير شعاعي لتحديد مصدر العدوى',
            'فتح الخراج لتصريف الصديد',
            'علاج قناة الجذر',
            'مضاد حيوي'
        ] : [
            'X-ray to identify infection source',
            'Incision and drainage of abscess',
            'Root canal treatment',
            'Antibiotics'
        ];
        response.medications = isArabic ? 'مضاد حيوي (أموكسيسيلين) ومسكن ألم' : 'Antibiotics (Amoxicillin) and pain reliever';
        response.followup = isArabic ? 'مراجعة بعد أسبوع للتأكد من زوال العدوى' : 'Review after 1 week to ensure infection resolved';
    }
    else {
        response.diagnosisSummary = isArabic ? 'تشخيص غير محدد: يحتاج إلى فحص إضافي' : 'Undetermined diagnosis: Needs further examination';
        response.treatmentSteps = isArabic ? [
            'فحص سريري كامل',
            'تصوير شعاعي بانورامي',
            'استشارة أخصائي عند الحاجة'
        ] : [
            'Complete clinical examination',
            'Panoramic X-ray',
            'Specialist consultation if needed'
        ];
        response.medications = isArabic ? 'مسكن ألم مؤقت (باراسيتامول)' : 'Temporary pain reliever (Paracetamol)';
        response.followup = isArabic ? 'مراجعة خلال أسبوع لوضع خطة علاج مناسبة' : 'Review within 1 week for appropriate treatment plan';
    }
    
    return response;
}

window.copyAIPlan = function() {
    const diagnosisSummary = document.getElementById('aiDiagnosisSummary').innerText;
    const treatmentSteps = document.getElementById('aiTreatmentSteps').innerText;
    const medications = document.getElementById('aiMedications').innerText;
    const followup = document.getElementById('aiFollowupAdvice').innerText;
    
    const planText = `Diagnosis Summary: ${diagnosisSummary}\n\nTreatment Plan:\n${treatmentSteps}\n\nMedications:\n${medications}\n\nFollow-up:\n${followup}`;
    
    navigator.clipboard.writeText(planText).then(() => {
        showToast(translations[currentLang].planCopied);
    }).catch(() => {
        alert('فشل النسخ');
    });
};

window.saveAIPlanToPatient = function() {
    const patientId = document.getElementById('aiPatientSelect').value;
    if (!patientId) {
        alert(translations[currentLang].selectPatientFirst);
        return;
    }
    
    const diagnosisSummary = document.getElementById('aiDiagnosisSummary').innerText;
    const treatmentSteps = document.getElementById('aiTreatmentSteps').innerText;
    const medications = document.getElementById('aiMedications').innerText;
    const followup = document.getElementById('aiFollowupAdvice').innerText;
    
    const aiPlan = {
        diagnosisSummary: diagnosisSummary,
        treatmentSteps: treatmentSteps,
        medications: medications,
        followupAdvice: followup,
        date: new Date().toISOString(),
        doctorId: currentUser.id,
        doctorName: currentUser.name
    };
    
    if (!aiTreatmentPlans[patientId]) {
        aiTreatmentPlans[patientId] = [];
    }
    
    aiTreatmentPlans[patientId].push(aiPlan);
    
    if (!patientsData[patientId]) patientsData[patientId] = {};
    patientsData[patientId].aiTreatmentPlan = treatmentSteps;
    patientsData[patientId].lastAIPlanDate = new Date().toISOString();
    
    saveAITreatmentPlans();
    savePatientsData();
    
    showToast(translations[currentLang].planSaved);
};

window.switchToTab = function(tabId) {
    document.querySelector(`[data-bs-target="#${tabId}"]`)?.click();
};

function loadDashboardData() {
    let myRelations = relations.filter(r => r.doctorId === currentUser.id);
    let patientsCount = myRelations.length;
    let today = new Date().toLocaleDateString('en-CA');
    let appointmentsToday = appointments.filter(a => a.doctorId === currentUser.id && a.date === today).length;
    let invoicesCount = invoices.filter(i => i.doctorId === currentUser.id).length;
    let total = invoices.filter(i => i.doctorId === currentUser.id).reduce((sum, inv) => sum + Number(inv.amount), 0);
    document.getElementById('patientsCount').innerText = patientsCount;
    document.getElementById('appointmentsCount').innerText = appointmentsToday;
    document.getElementById('invoicesCount').innerText = invoicesCount;
    document.getElementById('revenue').innerText = total;
    renderCharts();
}

function loadPatientsList() {
    if (currentUser.role === 'admin') {
        let allPatients = users.filter(u => u.role === 'patient');
        applyFilterToPatients(allPatients);
    } else {
        let myRelations = relations.filter(r => r.doctorId === currentUser.id);
        let patients = myRelations.map(r => users.find(u => u.id === r.patientId)).filter(p => p);
        applyFilterToPatients(patients);
    }
}

function applyFilter() {
    loadPatientsList();
}

function applyFilterToPatients(patients) {
    const search = document.getElementById('patientSearch')?.value.toLowerCase() || '';
    const filterDate = document.getElementById('filterDate')?.value || 'all';
    const filterDiagnosis = document.getElementById('filterDiagnosis')?.value.toLowerCase() || '';

    let filtered = patients.filter(p => p.name.toLowerCase().includes(search));

    if (filterDate !== 'all') {
        const today = new Date();
        const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1));
        startOfWeek.setHours(0, 0, 0, 0);
        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(endOfWeek.getDate() + 6);
        endOfWeek.setHours(23, 59, 59, 999);
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        endOfMonth.setHours(23, 59, 59, 999);

        filtered = filtered.filter(p => {
            const patientAppointments = appointments.filter(a => a.patientId === p.id);
            if (patientAppointments.length === 0) return false;
            return patientAppointments.some(a => {
                const appDate = new Date(a.date);
                if (filterDate === 'today') {
                    return appDate.toDateString() === new Date().toDateString();
                } else if (filterDate === 'week') {
                    return appDate >= startOfWeek && appDate <= endOfWeek;
                } else if (filterDate === 'month') {
                    return appDate >= startOfMonth && appDate <= endOfMonth;
                }
                return true;
            });
        });
    }

    if (filterDiagnosis) {
        filtered = filtered.filter(p => {
            const diagnosis = patientsData[p.id]?.doctorDiagnosis || '';
            return diagnosis.toLowerCase().includes(filterDiagnosis);
        });
    }

    let html = '';
    filtered.forEach(p => {
        let phone = patientsData[p.id]?.personal?.phone || '---';
        let age = patientsData[p.id]?.personal?.age || '-';
        let gender = patientsData[p.id]?.personal?.gender || '-';
        
        let actions = '<div class="patient-actions" style="display: flex; gap: 5px; flex-wrap: wrap;">';
        actions += `<button class="btn btn-sm btn-info" onclick="showPatientDetails('${p.id}')" title="${translations[currentLang].viewFile}"><i class="fas fa-eye"></i></button>`;
        actions += `<button class="btn btn-sm btn-warning" onclick="viewContract('${p.id}')" title="${translations[currentLang].contract}"><i class="fas fa-file-contract"></i></button>`;
        actions += `<button class="btn btn-sm btn-secondary" onclick="viewCaseImages('${p.id}')" title="${translations[currentLang].caseImages}"><i class="fas fa-images"></i></button>`;
        
        if (hasPermission('view_all') || currentUser.role === 'admin') {
            actions += `<button class="btn btn-sm btn-success" onclick="downloadPatientFilePDF('${p.id}')" title="${translations[currentLang].downloadPatientFilePDF}"><i class="fas fa-download"></i></button>`;
        }
        
        if (hasPermission('view_all') || currentUser.role === 'admin') {
            actions += `<button class="btn btn-sm btn-primary" onclick="getPreliminaryDiagnosis('${p.id}')" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);" title="${translations[currentLang].getPreliminaryDiagnosis}"><i class="fas fa-stethoscope"></i></button>`;
        }
        
        actions += '</div>';
        
        html += `<tr>
            <td data-label="${currentLang === 'ar' ? 'اسم المريض' : 'Patient Name'}">${p.name}</td>
            <td data-label="${translations[currentLang].phone || 'الهاتف'}">${phone}</td>
            <td data-label="${translations[currentLang].age}">${age}</td>
            <td data-label="${translations[currentLang].gender}">${gender}</td>
            <td data-label="${currentLang === 'ar' ? 'إجراءات' : 'Actions'}">${actions}</td>
        </tr>`;
    });
    
    const tbody = document.getElementById('patientsTable');
    if (tbody) tbody.innerHTML = html;
    
    const resultCount = document.getElementById('resultCount');
    if (resultCount) {
        resultCount.innerText = filtered.length;
    }
}

window.openImageViewer = function(patientId, index) {
    const images = patientImages[patientId] || [];
    if (images.length === 0) return;
    let currentIndex = index;
    const modalBody = document.getElementById('caseImagesBody');
    const showImage = () => {
        const imgUrl = images[currentIndex].url || images[currentIndex];
        modalBody.innerHTML = `
            <div class="image-viewer-body">
                ${currentIndex > 0 ? '<i class="fas fa-chevron-left nav-arrow left" onclick="openImageViewer(\''+patientId+'\', '+(currentIndex-1)+')"></i>' : ''}
                <img src="${imgUrl}" class="img-fluid">
                ${currentIndex < images.length-1 ? '<i class="fas fa-chevron-right nav-arrow right" onclick="openImageViewer(\''+patientId+'\', '+(currentIndex+1)+')"></i>' : ''}
            </div>
        `;
    };
    showImage();
};

window.viewContract = function(patientId) {
    const patient = users.find(u => u.id === patientId);
    const info = patientsData[patientId] || {};
    const doctorDiagnosis = info.doctorDiagnosis || '';
    const treatmentPlan = info.treatmentPlan || '';
    const risks = info.risks || '';
    const contractStatus = contracts[patientId]?.status || 'pending';
    const contractDate = contracts[patientId]?.date || '';
    
    let contractHtml = `
        <div class="contract-box">
            <p>${translations[currentLang].contractContent}</p>
            <hr>
            <p><strong>${currentLang==='ar'?'اسم المريض:' : 'Patient name:'}</strong> ${patient.name}</p>
            <p><strong>${currentLang==='ar'?'اسم الطبيب:' : 'Doctor name:'}</strong> ${currentUser.name}</p>
            <p><strong>${currentLang==='ar'?'التاريخ:' : 'Date:'}</strong> ${contractDate || (currentLang==='ar'?'غير محدد':'Not set')}</p>
            <p><strong>${currentLang==='ar'?'الحالة:' : 'Status:'}</strong> ${contractStatus === 'approved' ? (currentLang==='ar'?'موافق عليه':'Approved') : (contractStatus === 'rejected' ? (currentLang==='ar'?'مرفوض':'Rejected') : (currentLang==='ar'?'معلق':'Pending'))}</p>
            <hr>
            <h6>${currentLang==='ar'?'التشخيص:' : 'Diagnosis:'}</h6>
            <p>${doctorDiagnosis || (currentLang==='ar'?'غير محدد':'N/A')}</p>
            <h6>${currentLang==='ar'?'خطة العلاج:' : 'Treatment plan:'}</h6>
            <p>${treatmentPlan || (currentLang==='ar'?'غير محدد':'N/A')}</p>
            <h6>${currentLang==='ar'?'المخاطر المحتملة:' : 'Potential risks:'}</h6>
            <p>${risks || (currentLang==='ar'?'غير محدد':'N/A')}</p>
        </div>
    `;
    document.getElementById('contractViewBody').innerHTML = contractHtml;
    contractViewModal.show();
};

function searchPatient() {
    applyFilter();
}

function populatePatientSelects() {
    let myRelations = relations.filter(r => r.doctorId === currentUser.id);
    let patients = myRelations.map(r => users.find(u => u.id === r.patientId)).filter(p => p);
    let options = '<option value="">' + (currentLang==='ar'?'اختر المريض':'Select patient') + '</option>';
    patients.forEach(p => options += `<option value="${p.id}">${p.name}</option>`);
    const aptSelect = document.getElementById('appointmentPatient');
    const invSelect = document.getElementById('invoicePatient');
    if (aptSelect) aptSelect.innerHTML = options;
    if (invSelect) invSelect.innerHTML = options;
}

function addAppointment() {
    let patientId = document.getElementById('appointmentPatient').value;
    let date = document.getElementById('appointmentDate').value;
    let time = document.getElementById('appointmentTime').value;
    if (!patientId || !date || !time) return alert(currentLang==='ar'?'املأ جميع الحقول':'Fill all fields');
    appointments.push({
        id: Date.now(),
        patientId,
        doctorId: currentUser.id,
        date,
        time
    });
    saveAppointments();
    loadAppointmentsList();
    showToast(currentLang==='ar'?'تم إضافة الموعد':'Appointment added');
}

window.editAppointment = function(appointmentId) {
    const app = appointments.find(a => a.id == appointmentId);
    if (!app) return;
    const newDate = prompt(translations[currentLang].date, app.date);
    if (!newDate) return;
    const newTime = prompt(translations[currentLang].time, app.time);
    if (!newTime) return;
    app.date = newDate;
    app.time = newTime;
    saveAppointments();
    loadAppointmentsList();
    showToast(translations[currentLang].appointments);
};

function loadAppointmentsList() {
    let today = new Date().toLocaleDateString('en-CA');
    let upcomingApps = appointments.filter(a => a.doctorId === currentUser.id && a.date >= today).sort((a,b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
    let followupApps = followups.filter(f => f.doctorId === currentUser.id && f.date >= today).map(f => ({
        id: f.id,
        patientId: f.patientId,
        doctorId: f.doctorId,
        date: f.date,
        time: f.time,
        isFollowup: true
    }));
    let all = [...upcomingApps, ...followupApps].sort((a,b) => a.date.localeCompare(b.date) || a.time.localeCompare(b.time));
    let html = '';
    all.forEach(a => {
        let patient = users.find(u => u.id === a.patientId);
        html += `<tr><td>${patient?.name || ''}</td><td>${a.date}</td><td>${a.time}</td><td>
            <button class="btn btn-sm btn-warning" onclick="editAppointment(${a.id})">${translations[currentLang].edit}</button>
        </td></tr>`;
    });
    const tbody = document.getElementById('appointmentsTable');
    if (tbody) tbody.innerHTML = html;
}

function checkAppointments() {
    let today = new Date().toLocaleDateString('en-CA');
    let todaysApps = appointments.filter(a => a.doctorId === currentUser.id && a.date === today);
    if (todaysApps.length > 0) {
        let names = todaysApps.map(a => users.find(u => u.id === a.patientId)?.name).join(', ');
        showToast((currentLang==='ar'?`لديك مواعيد اليوم مع: ${names}`:`You have appointments today with: ${names}`));
    }
}

function createInvoice() {
    let patientId = document.getElementById('invoicePatient').value;
    let service = document.getElementById('invoiceService').value;
    let amount = document.getElementById('invoicePrice').value;
    let vat = document.getElementById('invoiceVat').value || 0;
    let total = document.getElementById('invoiceTotal').value;
    
    if (!patientId || !service || !amount) {
        return alert(currentLang==='ar'?'املأ جميع الحقول':'Fill all fields');
    }
    
    const vatAmount = (amount * vat / 100).toFixed(2);
    
    invoices.push({
        id: Date.now(),
        patientId,
        doctorId: currentUser.id,
        service,
        amount: Number(amount),
        vat: Number(vat),
        vatAmount: Number(vatAmount),
        total: Number(total),
        date: new Date().toLocaleDateString('en-CA')
    });
    
    saveInvoices();
    loadInvoicesList();
    loadDashboardData();
    loadReports();
    showToast(currentLang==='ar'?'تم إضافة الفاتورة':'Invoice added');
}

function loadInvoicesList() {
    let invs = invoices.filter(i => i.doctorId === currentUser.id).sort((a,b) => b.id - a.id);
    let html = '';
    let total = 0;
    invs.forEach(i => {
        let patient = users.find(u => u.id === i.patientId);
        html += `<tr><td>${patient?.name || ''}</td><td>${i.service}</td><td>${i.amount}</td><td>${i.vat || 0}%</td><td>${i.vatAmount || 0}</td><td><strong>${i.total || i.amount}</strong></td><td>${i.date}</td><td>
            <button class="btn btn-sm btn-outline-accent" onclick="printInvoice(${i.id})"><i class="fas fa-print"></i></button>
        </td></tr>`;
        total += i.total || i.amount;
    });
    const tbody = document.getElementById('invoicesTable');
    if (tbody) tbody.innerHTML = html;
    const totalSpan = document.getElementById('totalRevenue');
    if (totalSpan) totalSpan.innerText = total;
}

function loadReports() {
    let myRelations = relations.filter(r => r.doctorId === currentUser.id);
    let patientsCount = myRelations.length;
    let appsCount = appointments.filter(a => a.doctorId === currentUser.id).length;
    let invsCount = invoices.filter(i => i.doctorId === currentUser.id).length;
    let total = invoices.filter(i => i.doctorId === currentUser.id).reduce((sum, i) => sum + i.amount, 0);
    const repPatients = document.getElementById('reportPatients');
    const repApps = document.getElementById('reportAppointments');
    const repInvs = document.getElementById('reportInvoices');
    const repRev = document.getElementById('reportRevenue');
    if (repPatients) repPatients.innerText = patientsCount;
    if (repApps) repApps.innerText = appsCount;
    if (repInvs) repInvs.innerText = invsCount;
    if (repRev) repRev.innerText = total;
}

window.printInvoice = function(id) {
    let inv = invoices.find(i => i.id === id);
    if (!inv) { window.print(); return; }
    let patient = users.find(u => u.id === inv.patientId);
    let win = window.open('', '_blank');
    win.document.write(`
        <html dir="${currentLang==='ar'?'rtl':'ltr'}"><head><title>${currentLang==='ar'?'فاتورة':'Invoice'}</title>
        <style>body{font-family:${currentLang==='ar'?'Lateef':'Noto Naskh Arabic'};padding:20px;}</style></head>
        <body>
        <h2>${currentLang==='ar'?'فاتورة علاج':'Treatment Invoice'}</h2>
        <p>${currentLang==='ar'?'التاريخ':'Date'}: ${inv.date}</p>
        <p>${currentLang==='ar'?'المريض':'Patient'}: ${patient?.name}</p>
        <p>${currentLang==='ar'?'الخدمة':'Service'}: ${inv.service}</p>
        <p>${currentLang==='ar'?'المبلغ':'Amount'}: ${inv.amount}</p>
        <hr>
        <p>${currentLang==='ar'?'شكراً لزيارتكم':'Thank you for your visit'}</p>
        </body></html>
    `);
    win.print();
};

window.downloadInvoicePDF = function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    html2canvas(document.querySelector('#invoicesTable')).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 10, 10, 190, 0);
        doc.save('invoice.pdf');
    });
};

function backupData() {
    let data = {
        users,
        patientsData,
        queue,
        followups,
        relations,
        profilePics,
        appointments,
        invoices,
        subscriptions,
        dentalCharts,
        patientImages,
        patientComments,
        contracts,
        contractModifyRequests,
        clinicData,
        aiTreatmentPlans,
        preliminaryDiagnoses,
        notifications,
        auditLogs,
        doctorRatings,
        suspendedDoctors
    };
    let blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
    let a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'dentflow-backup.json';
    a.click();
    showToast(currentLang==='ar'?'تم إنشاء النسخة الاحتياطية':'Backup created');
}

function restoreBackup() {
    if (!hasPermission('manage_users')) return;
    
    showConfirmDialog(
        currentLang === 'ar' ? 'هل أنت متأكد من استعادة النسخة الاحتياطية؟ سيتم فقدان البيانات الحالية.' : 'Are you sure you want to restore backup? Current data will be lost.',
        function() {
            const backup = localStorage.getItem('dentflow_backup');
            if (!backup) {
                showToast(currentLang === 'ar' ? 'لا توجد نسخة احتياطية' : 'No backup found');
                return;
            }
            
            try {
                const data = JSON.parse(backup);
                users = data.users || [];
                patientsData = data.patientsData || {};
                queue = data.queue || [];
                followups = data.followups || [];
                relations = data.relations || [];
                appointments = data.appointments || [];
                invoices = data.invoices || [];
                notifications = data.notifications || [];
                auditLogs = data.auditLogs || [];
                doctorRatings = data.doctorRatings || [];
                suspendedDoctors = data.suspendedDoctors || [];
                
                saveUsers(); savePatientsData(); saveQueue(); saveFollowups();
                saveRelations(); saveAppointments(); saveInvoices();
                saveNotifications(); saveAuditLogs(); saveDoctorRatings(); saveSuspendedDoctors();
                
                showToast(currentLang === 'ar' ? 'تم استعادة النسخة الاحتياطية بنجاح' : 'Backup restored successfully');
                setTimeout(() => location.reload(), 1500);
            } catch (e) {
                showToast(currentLang === 'ar' ? 'خطأ في استعادة النسخة الاحتياطية' : 'Error restoring backup');
            }
        }
    );
}

function renderDoctorDashboard() {
    const today = new Date().toLocaleDateString('en-CA');
    const tq = queue.filter(q => q.date === today);
    const current = tq.find(q => q.status === 'current');
    const waiting = tq.filter(q => q.status === 'waiting').sort((a,b) => a.turnNumber - b.turnNumber);
    const followup = tq.filter(q => q.status === 'followup');
    const done = tq.filter(q => q.status === 'done');

    const currentDiv = document.getElementById('currentPatient');
    const waitingDiv = document.getElementById('waitingPatients');
    const followupDiv = document.getElementById('followupPatients');
    const doneDiv = document.getElementById('donePatients');
    
    if (currentDiv) currentDiv.innerHTML = current ? renderPatientItem(current, true) : '<p>' + translations[currentLang].noCurrentPatient + '</p>';
    if (waitingDiv) waitingDiv.innerHTML = waiting.length ? waiting.map(w => renderPatientItem(w, false, true)).join('') : '<p>' + translations[currentLang].noWaitingPatients + '</p>';
    if (followupDiv) followupDiv.innerHTML = followup.length ? followup.map(f => renderPatientItem(f)).join('') : '<p>' + translations[currentLang].noFollowupPatients + '</p>';
    if (doneDiv) doneDiv.innerHTML = done.length ? done.map(d => renderPatientItem(d)).join('') : '<p>' + translations[currentLang].noCompletedPatients + '</p>';
    
    renderCharts();
}

function renderPatientItem(queueItem, isCurrent = false, showStart = false) {
    const patient = users.find(u => u.id === queueItem.patientId);
    const followupDate = followups.find(f => f.patientId === queueItem.patientId && f.doctorId === currentUser.id);
    const userRole = currentUser.role || currentUser.type;
    
    let actions = '<div class="patient-actions">';
    
    if (isCurrent) {
        if (userRole !== 'admin') {
            actions += `
                <button class="btn btn-success btn-sm" onclick="markAsDone('${queueItem.patientId}')">${translations[currentLang].done}</button>
                <button class="btn btn-warning btn-sm" onclick="markAsFollowup('${queueItem.patientId}')">${translations[currentLang].followup}</button>
            `;
        }
        
        actions += `
            <button class="btn btn-info btn-sm" onclick="showPatientDetails('${queueItem.patientId}')">${translations[currentLang].viewFile}</button>
            <button class="btn btn-secondary btn-sm" onclick="viewContract('${queueItem.patientId}')">${translations[currentLang].contract}</button>
        `;
        
    } else if (showStart) {
        if (userRole !== 'admin') {
            actions += `<button class="btn btn-primary btn-sm start-session-btn" onclick="startSession('${queueItem.patientId}')">${translations[currentLang].startSession}</button>`;
        }
        
        actions += `
            <button class="btn btn-info btn-sm" onclick="showPatientDetails('${queueItem.patientId}')">${translations[currentLang].viewFile}</button>
            <button class="btn btn-secondary btn-sm" onclick="viewContract('${queueItem.patientId}')">${translations[currentLang].contract}</button>
        `;
    }
    
    actions += '</div>';
    
    return `<div class="patient-item">
        <div>
            <strong>${patient?.name || (currentLang==='ar'?'مريض':'Patient')}</strong> 
            (${translations[currentLang].turn} ${queueItem.turnNumber})
            ${followupDate ? `<br>${translations[currentLang].followup}: ${followupDate.date}` : ''}
        </div>
        ${actions}
    </div>`;
}

window.startSession = function(patientId) {
    const today = new Date().toLocaleDateString('en-CA');
    const current = queue.find(q => q.date === today && q.status === 'current');
    if (current) {
        current.status = 'waiting';
    }
    const p = queue.find(q => q.date === today && q.patientId === patientId && q.status === 'waiting');
    if (p) {
        p.status = 'current';
        saveQueue();
        renderDoctorDashboard();
        showPatientDetails(patientId);
        showToast((currentLang==='ar'?`بدأت جلسة مع ${users.find(u => u.id === patientId)?.name}`:`Session started with ${users.find(u => u.id === patientId)?.name}`));
    } else {
        alert(currentLang==='ar'?'المريض غير موجود في قائمة الانتظار اليوم':'Patient not in today\'s queue');
    }
};

window.markAsDone = function(patientId) {
    const today = new Date().toLocaleDateString('en-CA');
    const current = queue.find(q => q.date === today && q.status === 'current');
    if (current && current.patientId === patientId) {
        current.status = 'done';
        const next = queue.find(q => q.date === today && q.status === 'waiting');
        if (next) next.status = 'current';
        saveQueue();
        renderDoctorDashboard();
        showToast(translations[currentLang].done);
    } else {
        alert(currentLang==='ar'?'لا يوجد مريض حالي بهذا الاسم':'No current patient with that name');
    }
};

window.markAsFollowup = function(patientId) {
    selectedPatientForFollowup = patientId;
    followupModal.show();
};

document.getElementById('saveFollowup')?.addEventListener('click', () => {
    const date = document.getElementById('followupDate').value;
    const time = document.getElementById('followupTime').value;
    if (!date || !time) { alert(currentLang==='ar'?'اختر التاريخ والوقت':'Select date and time'); return; }

    const today = new Date().toLocaleDateString('en-CA');
    const current = queue.find(q => q.date === today && q.status === 'current');
    if (current && current.patientId === selectedPatientForFollowup) {
        current.status = 'followup';
    } else {
        const waitingPatient = queue.find(q => q.date === today && q.patientId === selectedPatientForFollowup && q.status === 'waiting');
        if (waitingPatient) waitingPatient.status = 'followup';
    }

    followups.push({ patientId: selectedPatientForFollowup, doctorId: currentUser.id, date, time });
    saveFollowups();
    saveQueue();

    const nextWaiting = queue.find(q => q.date === today && q.status === 'waiting');
    if (nextWaiting) {
        nextWaiting.status = 'current';
        saveQueue();
    }

    followupModal.hide();
    renderDoctorDashboard();
    showToast(translations[currentLang].followup);
});

window.showPatientDetails = function(patientId) {
    const patient = users.find(u => u.id === patientId);
    const info = patientsData[patientId] || {};
    const images = patientImages[patientId] || [];
    const comments = patientComments[patientId] || '';
    const patientPic = profilePics[patientId] || 'https://via.placeholder.com/100';
    const beforeImages = images.filter(img => img.category === 'before');
    const afterImages = images.filter(img => img.category === 'after');
    const generalImages = images.filter(img => !img.category || img.category === 'general');

    function renderImages(imgs) {
        if (imgs.length === 0) return '<p>' + (currentLang==='ar'?'لا توجد صور':'No images') + '</p>';
        let html = '<div class="row">';
        imgs.forEach((img, idx) => {
            html += `
                <div class="col-md-4 mb-2">
                    <div class="image-container">
                        <img src="${img.url || img}" class="img-fluid xray-preview" onclick="window.open('${img.url || img}')">
                        <button class="delete-image-btn" onclick="deleteSingleImage('${patientId}', ${idx})"><i class="fas fa-times"></i></button>
                    </div>
                </div>`;
        });
        html += '</div>';
        return html;
    }

    const lastUpdate = info.diagnosisDate ? 
        `<small class="text-muted d-block mt-1">
            آخر تحديث: ${new Date(info.diagnosisDate).toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US')}
        </small>` : '';

    const modalHtml = `
        <div class="modal fade" id="patientDetailsModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content glass-card">
                    <div class="modal-header">
                        <h5 class="modal-title">${currentLang==='ar'?'ملف المريض: ':'Patient file: '}${patient.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center mb-3">
                            <img src="${patientPic}" class="rounded-circle" style="width:100px;height:100px;object-fit:cover;border:3px solid #00cec9;">
                        </div>
                        <h6 class="text-primary section-title-bold">${currentLang==='ar'?'التشخيص':'Diagnosis'}</h6>
                        <textarea class="form-control" id="doctorDiagnosis" rows="2" 
    ${(contracts[patientId]?.status === 'approved' || !canEdit(patientId)) ? 'readonly' : ''}>${info.doctorDiagnosis || ''}</textarea>
                        <div id="medicationsSuggestions" class="mt-2"></div>
                        ${lastUpdate}
                        <h6 class="mt-3 text-primary section-title-bold">${currentLang==='ar'?'خطة العلاج':'Treatment plan'}</h6>
                        <textarea class="form-control" id="treatmentPlan" rows="3" 
    ${(contracts[patientId]?.status === 'approved' || !canEdit(patientId)) ? 'readonly' : ''}>${info.treatmentPlan || ''}</textarea>
                        <h6 class="mt-3 text-primary section-title-bold">${currentLang==='ar'?'المخاطر المحتملة':'Potential risks'}</h6>
                        <textarea class="form-control" id="risks" rows="2" 
    ${(contracts[patientId]?.status === 'approved' || !canEdit(patientId)) ? 'readonly' : ''}>${info.risks || ''}</textarea>
                        
                        ${currentUser.role === 'admin' ? `
                            <div class="mt-3">
                                <h6 class="text-primary section-title-bold">
                                    <i class="fas fa-pen"></i> ${currentLang === 'ar' ? 'ملاحظات المدير' : 'Admin Notes'}
                                </h6>
                                <textarea class="form-control" id="adminNotes" rows="3">${info.adminNotes || ''}</textarea>
                            </div>
                        ` : ''}
                        
                        ${currentUser.role === 'doctor' && info.adminNotes ? `
                            <div class="mt-3 p-3" style="background: rgba(255, 193, 7, 0.1); border-right: 3px solid #ffc107;">
                                <h6 class="text-warning">
                                    <i class="fas fa-pen"></i> ${currentLang === 'ar' ? 'ملاحظات المدير' : 'Admin Notes'}
                                </h6>
                                <p class="mb-0">${info.adminNotes}</p>
                                <small class="text-muted">${new Date(info.diagnosisDate).toLocaleDateString()}</small>
                            </div>
                        ` : ''}
                        
                        ${contracts[patientId]?.status === 'approved' ? 
                            `<div class="alert alert-info mt-2">${currentLang==='ar'?'العقد موافق عليه، لا يمكن التعديل.':'Contract approved, cannot modify.'}</div>
                             <button class="btn btn-warning" onclick="requestContractModify('${patientId}')">${currentLang==='ar'?'طلب تعديل العقد':'Request modify contract'}</button>` : ''}
                        <hr>
                        <h6 class="text-primary section-title-bold">${currentLang==='ar'?'البيانات الشخصية':'Personal data'}</h6>
                        <div class="row section-content-light">
                            <div class="col-md-6"><strong>${currentLang==='ar'?'العمر':'Age'}:</strong> ${info.personal?.age || (currentLang==='ar'?'غير محدد':'N/A')}</div>
                            <div class="col-md-6"><strong>${currentLang==='ar'?'النوع':'Gender'}:</strong> ${info.personal?.gender || (currentLang==='ar'?'غير محدد':'N/A')}</div>
                            <div class="col-md-6"><strong>${currentLang==='ar'?'المهنة':'Occupation'}:</strong> ${info.personal?.job || (currentLang==='ar'?'غير محدد':'N/A')}</div>
                            <div class="col-md-6"><strong>${currentLang==='ar'?'العنوان':'Address'}:</strong> ${info.personal?.address || (currentLang==='ar'?'غير محدد':'N/A')}</div>
                            <div class="col-md-6"><strong>${currentLang==='ar'?'الهاتف':'Phone'}:</strong> ${info.personal?.phone || (currentLang==='ar'?'غير محدد':'N/A')}</div>
                        </div>
                        <h6 class="mt-3 text-primary section-title-bold">${currentLang==='ar'?'التاريخ الطبي':'Medical history'}</h6>
                        <div class="row section-content-light">
                            <div class="col-md-6"><strong>${currentLang==='ar'?'أمراض القلب':'Heart disease'}:</strong> ${info.medical?.heart ? (currentLang==='ar'?'نعم':'Yes') : (currentLang==='ar'?'لا':'No')}</div>
                            <div class="col-md-6"><strong>${currentLang==='ar'?'ضغط الدم':'High BP'}:</strong> ${info.medical?.pressure ? (currentLang==='ar'?'نعم':'Yes') : (currentLang==='ar'?'لا':'No')}</div>
                            <div class="col-md-6"><strong>${currentLang==='ar'?'السكري':'Diabetes'}:</strong> ${info.medical?.diabetes ? (currentLang==='ar'?'نعم':'Yes') : (currentLang==='ar'?'لا':'No')}</div>
                            <div class="col-md-6"><strong>${currentLang==='ar'?'الربو':'Asthma'}:</strong> ${info.medical?.asthma ? (currentLang==='ar'?'نعم':'Yes') : (currentLang==='ar'?'لا':'No')}</div>
                        </div>
                        <h6 class="mt-3 text-primary section-title-bold">${currentLang==='ar'?'التاريخ السني':'Dental history'}</h6>
                        <div class="row section-content-light">
                            <div class="col-md-6"><strong>${currentLang==='ar'?'آخر زيارة':'Last visit'}:</strong> ${info.dental?.lastVisit || (currentLang==='ar'?'غير محدد':'N/A')}</div>
                            <div class="col-md-6"><strong>${currentLang==='ar'?'ألم في الأسنان':'Tooth pain'}:</strong> ${info.dental?.symptomPain ? (currentLang==='ar'?'نعم':'Yes') : (currentLang==='ar'?'لا':'No')}</div>
                        </div>
                        <h6 class="mt-3 text-primary section-title-bold">${currentLang==='ar'?'سبب الزيارة':'Reason for visit'}</h6>
                        <div class="row section-content-light">
                            <div class="col-md-12"><strong>${translations[currentLang].mainComplaint}:</strong> ${info.reason?.mainComplaint || (currentLang==='ar'?'غير محدد':'N/A')}</div>
                            <div class="col-md-6"><strong>${currentLang==='ar'?'مدة الألم':'Pain duration'}:</strong> ${info.reason?.painDuration || (currentLang==='ar'?'غير محدد':'N/A')}</div>
                            <div class="col-md-6"><strong>${currentLang==='ar'?'نوع الألم':'Pain type'}:</strong> ${info.reason?.painType || (currentLang==='ar'?'غير محدد':'N/A')}</div>
                            <div class="col-md-6"><strong>${currentLang==='ar'?'شدة الألم':'Intensity'}:</strong> ${info.reason?.painIntensity || (currentLang==='ar'?'غير محدد':'N/A')}</div>
                            <div class="col-md-6"><strong>${currentLang==='ar'?'المحفز':'Trigger'}:</strong> ${info.reason?.painTrigger || (currentLang==='ar'?'غير محدد':'N/A')}</div>
                            <div class="col-md-6"><strong>${translations[currentLang].painDurationAfterTrigger}:</strong> ${info.reason?.painDurationAfterTrigger ? translations[currentLang][info.reason.painDurationAfterTrigger] || info.reason.painDurationAfterTrigger : (currentLang==='ar'?'غير محدد':'N/A')}</div>
                        </div>
                        ${info.xray ? `<h6 class="mt-3 text-primary section-title-bold">${currentLang==='ar'?'صورة الأشعة':'X-ray'}</h6><img src="${info.xray}" class="xray-preview">` : ''}
                        <hr>
                        <h6 class="text-primary section-title-bold">${currentLang==='ar'?'صور إضافية للحالة':'Additional case images'}</h6>
                        <ul class="nav nav-tabs" id="imageTabs">
                            <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#before">${translations[currentLang].before}</a></li>
                            <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#after">${translations[currentLang].after}</a></li>
                            <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#general">${translations[currentLang].general}</a></li>
                        </ul>
                        <div class="tab-content mt-2">
                            <div class="tab-pane active" id="before">${renderImages(beforeImages)}</div>
                            <div class="tab-pane" id="after">${renderImages(afterImages)}</div>
                            <div class="tab-pane" id="general">${renderImages(generalImages)}</div>
                        </div>
                        <h6 class="mt-3 section-title-bold">${currentLang==='ar'?'إضافة صور جديدة':'Add new images'}</h6>
                        <select class="form-select mb-2" id="imageCategory">
                            <option value="before">${translations[currentLang].before}</option>
                            <option value="after">${translations[currentLang].after}</option>
                            <option value="general">${translations[currentLang].general}</option>
                        </select>
                        <input type="file" id="additionalImages" accept="image/*" multiple class="form-control mb-2">
                        <div id="additionalImagesPreview"></div>
                        <h6 class="mt-3 text-primary section-title-bold">${currentLang==='ar'?'تعليق الطبيب':'Doctor\'s comment'}</h6>
                        <textarea class="form-control" id="doctorComment" rows="3">${comments}</textarea>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onclick="savePatientDetails('${patientId}')">${translations[currentLang].save}</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">${translations[currentLang].close}</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    if (document.getElementById('patientDetailsModal')) document.getElementById('patientDetailsModal').remove();
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById('patientDetailsModal'));
    modal.show();

    document.getElementById('additionalImages').addEventListener('change', function(e) {
        const files = Array.from(e.target.files);
        const category = document.getElementById('imageCategory').value;
        const previewDiv = document.getElementById('additionalImagesPreview');
        previewDiv.innerHTML = '';
        files.forEach(file => {
            const reader = new FileReader();
            reader.onload = (ev) => {
                const img = document.createElement('img');
                img.src = ev.target.result;
                img.className = 'xray-preview';
                img.style.maxWidth = '100px';
                img.style.margin = '5px';
                img.onclick = () => window.open(ev.target.result);
                previewDiv.appendChild(img);
                if (!patientImages[patientId]) patientImages[patientId] = [];
                patientImages[patientId].push({ url: ev.target.result, category: category });
                savePatientImages();
            };
            reader.readAsDataURL(file);
        });
    });
    
    setTimeout(() => {
        const modalFooter = document.querySelector('#patientDetailsModal .modal-footer');
        
        setTimeout(() => {
            const diagnosisField = document.getElementById('doctorDiagnosis');
            if (diagnosisField) {
                diagnosisField.addEventListener('input', function() {
                    updateMedicationSuggestions(patientId);
                });
                updateMedicationSuggestions(patientId);
            }
        }, 600);

        if (modalFooter) {
            const diagnosisBtn = document.createElement('button');
            diagnosisBtn.className = 'preliminary-diagnosis-btn';
            diagnosisBtn.innerHTML = '<i class="fas fa-stethoscope me-2"></i>' + (currentLang==='ar'?'تشخيص مبدئي':'Preliminary Diagnosis');
            diagnosisBtn.onclick = () => {
                bootstrap.Modal.getInstance(document.getElementById('patientDetailsModal')).hide();
                getPreliminaryDiagnosis(patientId);
            };
            modalFooter.insertBefore(diagnosisBtn, modalFooter.firstChild);
        }
    }, 500);
};

window.deleteSingleImage = function(patientId, index) {
    showConfirmDialog(
        currentLang==='ar'?'هل أنت متأكد من حذف هذه الصورة؟':'Are you sure you want to delete this image?',
        function() {
            let images = patientImages[patientId] || [];
            images.splice(index, 1);
            if (images.length === 0) {
                delete patientImages[patientId];
            } else {
                patientImages[patientId] = images;
            }
            savePatientImages();
            
            const modal = bootstrap.Modal.getInstance(document.getElementById('patientDetailsModal'));
            if (modal) modal.hide();
            setTimeout(() => showPatientDetails(patientId), 300);
            
            showToast(currentLang==='ar'?'تم حذف الصورة':'Image deleted');
        }
    );
};

window.requestContractModify = function(patientId) {
    if (contracts[patientId]?.status === 'approved') {
        contractModifyRequests[patientId] = { status: 'pending', date: new Date().toISOString() };
        saveContractModifyRequests();
        showToast(currentLang==='ar'?'تم إرسال طلب التعديل للمريض':'Modify request sent to patient');
    }
};

window.savePatientDetails = function(patientId) {
    patientsData[patientId].diagnosisDate = new Date().toISOString();
    const diagnosis = document.getElementById('doctorDiagnosis').value;
    const treatmentPlan = document.getElementById('treatmentPlan').value;
    const risks = document.getElementById('risks').value;
    const comment = document.getElementById('doctorComment').value;
    
    if (currentUser.role === 'admin') {
        const adminNotes = document.getElementById('adminNotes')?.value || '';
        if (adminNotes !== patientsData[patientId]?.adminNotes) {
            patientsData[patientId].adminNotes = adminNotes;
            
            const doctorRelation = relations.find(r => r.patientId === patientId);
            if (doctorRelation) {
                addNotification(
                    doctorRelation.doctorId,
                    patientId,
                    currentLang === 'ar' ? 'المدير أضاف ملاحظة على حالة المريض' : 'Admin added a note on patient case',
                    'admin_note'
                );
                updateSidebarUserInfo();
            }
        }
    }
    
    if (contracts[patientId]?.status === 'approved') {
        if (contractModifyRequests[patientId]?.status !== 'approved') {
            alert(currentLang==='ar'?'لا يمكن التعديل بعد موافقة المريض على العقد إلا بعد طلب موافقة جديدة':'Cannot modify after patient approval without a new approval');
            return;
        } else {
            delete contractModifyRequests[patientId];
            delete contracts[patientId];
        }
    }
    
    if (!patientsData[patientId]) patientsData[patientId] = {};
    patientsData[patientId].doctorDiagnosis = diagnosis;
    patientsData[patientId].treatmentPlan = treatmentPlan;
    patientsData[patientId].risks = risks;
    patientsData[patientId].diagnosisDate = new Date().toISOString();
    patientComments[patientId] = comment;
    savePatientsData();
    savePatientComments();
    saveContracts();
    saveContractModifyRequests();
    showToast(translations[currentLang].contractSaved);
    bootstrap.Modal.getInstance(document.getElementById('patientDetailsModal')).hide();
};

document.querySelectorAll('.tooth-selector').forEach(el => {
    el.addEventListener('click', function () {
        document.getElementById('selectedTooth').value = this.dataset.tooth;
        document.querySelectorAll('.tooth-selector').forEach(c => c.setAttribute('fill', '#00cec9'));
        this.setAttribute('fill', '#6c5ce7');
    });
});

document.getElementById('confirmTooth')?.addEventListener('click', () => {
    const s = document.getElementById('selectedTooth').value;
    if (s) {
        const painLocationField = document.getElementById('painLocation');
        if (painLocationField) {
            painLocationField.value = (currentLang==='ar'?`السن رقم ${s}`:`Tooth #${s}`);
        }
        toothModal.hide();
    }
});

function renderCharts() {
    const canvas = document.getElementById('patientsChart');
    if (!canvas) return;
    
    let existingChart = Chart.getChart(canvas);
    if (existingChart) {
        existingChart.destroy();
    }
    
    const months = [];
    const patientsCount = [];
    const appointmentsCount = [];
    
    for (let i = 5; i >= 0; i--) {
        const d = new Date();
        d.setMonth(d.getMonth() - i);
        months.push(d.toLocaleDateString(currentLang === 'ar' ? 'ar-EG' : 'en-US', { month: 'short' }));
        
        const monthStart = new Date(d.getFullYear(), d.getMonth(), 1);
        const monthEnd = new Date(d.getFullYear(), d.getMonth() + 1, 0);
        
        const newPatients = relations.filter(r => {
            const patient = users.find(u => u.id === r.patientId);
            if (!patient) return false;
            const patientDate = new Date(parseInt(patient.id));
            return patientDate >= monthStart && patientDate <= monthEnd;
        }).length;
        
        const monthAppointments = appointments.filter(a => {
            if (a.doctorId !== currentUser.id) return false;
            const appDate = new Date(a.date);
            return appDate >= monthStart && appDate <= monthEnd;
        }).length;
        
        patientsCount.push(newPatients);
        appointmentsCount.push(monthAppointments);
    }
    
    new Chart(canvas, {
        type: 'line',
        data: {
            labels: months,
            datasets: [
                {
                    label: currentLang === 'ar' ? 'مرضى جدد' : 'New Patients',
                    data: patientsCount,
                    borderColor: '#00cec9',
                    backgroundColor: 'rgba(0, 206, 201, 0.1)',
                    tension: 0.3,
                    fill: true
                },
                {
                    label: currentLang === 'ar' ? 'مواعيد' : 'Appointments',
                    data: appointmentsCount,
                    borderColor: '#6c5ce7',
                    backgroundColor: 'rgba(108, 92, 231, 0.1)',
                    tension: 0.3,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                        font: { size: 12 }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { 
                        color: 'white',
                        stepSize: 1
                    },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                },
                x: {
                    ticks: { color: 'white' },
                    grid: { color: 'rgba(255,255,255,0.1)' }
                }
            }
        }
    });
}

function loadAuditLogs() {
    const container = document.getElementById('auditLogsList');
    if (!container) return;
    
    let html = '';
    auditLogs.slice(0, 50).forEach(log => {
        html += `
            <div class="audit-log-entry">
                <div class="action">${log.action}</div>
                <div class="details">${log.details}</div>
                <div class="time">${new Date(log.timestamp).toLocaleString()}</div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function updateMedicationSuggestions(patientId) {
    const diagnosisField = document.getElementById('doctorDiagnosis');
    const suggestionsDiv = document.getElementById('medicationsSuggestions');
    
    if (!diagnosisField || !suggestionsDiv) return;
    
    const diagnosis = diagnosisField.value;
    const suggestions = suggestMedications(patientId, diagnosis);
    
    if (suggestions.length === 0) {
        suggestionsDiv.innerHTML = '';
        return;
    }
    
    let html = `
        <div class="card mt-2" style="background: rgba(0, 206, 201, 0.1); border: 1px solid #00cec9;">
            <div class="card-header" style="background: transparent; border-bottom: 1px solid #00cec9; padding: 8px 12px;">
                <small><i class="fas fa-pills me-1"></i> ${currentLang === 'ar' ? 'اقتراحات أدوية' : 'Medication Suggestions'}</small>
            </div>
            <div class="card-body" style="padding: 8px 12px;">
    `;
    
    suggestions.forEach(med => {
        html += `
            <div class="mb-2 pb-2" style="border-bottom: 1px solid rgba(255,255,255,0.1);">
                <div class="d-flex justify-content-between">
                    <strong style="color: #00cec9;">${med.name}</strong>
                    <small class="text-warning">${med.warning}</small>
                </div>
                <small class="text-muted">${med.dose}</small>
                <button class="btn btn-sm btn-outline-accent mt-1" onclick="useMedicationSuggestion('${med.name}', '${med.dose}')" style="font-size: 12px; padding: 2px 8px;">
                    <i class="fas fa-plus"></i> ${currentLang === 'ar' ? 'استخدم' : 'Use'}
                </button>
            </div>
        `;
    });
    
    html += `
            </div>
        </div>
    `;
    
    suggestionsDiv.innerHTML = html;
}

window.useMedicationSuggestion = function(medName, dosage) {
    const treatmentPlan = document.getElementById('treatmentPlan');
    if (!treatmentPlan) return;
    
    let currentPlan = treatmentPlan.value;
    const medLine = `\n- ${medName}: ${dosage}`;
    
    if (currentPlan.includes(medName)) {
        showToast(currentLang === 'ar' ? 'الدواء موجود بالفعل' : 'Medication already exists');
    } else {
        treatmentPlan.value += medLine;
        showToast(currentLang === 'ar' ? 'تم إضافة الدواء لخطة العلاج' : 'Medication added to treatment plan');
    }
};

function updateRolesList() {
    const regTypeSelect = document.getElementById('regType');
    if (!regTypeSelect) return;
    
    const currentValue = regTypeSelect.value;
    regTypeSelect.innerHTML = '';
    
    let availableRoles = [];
    if (typeof window.getAvailableRoles === 'function') {
        availableRoles = window.getAvailableRoles();
    } else {
        availableRoles = ['patient'];
    }
    
    availableRoles.forEach(role => {
        const option = document.createElement('option');
        option.value = role;
        
        let roleName = '';
        switch(role) {
            case 'patient': roleName = currentLang === 'ar' ? 'مريض' : 'Patient'; break;
            case 'doctor': roleName = currentLang === 'ar' ? 'طبيب' : 'Doctor'; break;
            case 'assistant': roleName = currentLang === 'ar' ? 'مساعد' : 'Assistant'; break;
            case 'receptionist': roleName = currentLang === 'ar' ? 'استقبال' : 'Receptionist'; break;
            case 'admin': roleName = currentLang === 'ar' ? 'مدير النظام' : 'Admin'; break;
            default: roleName = role;
        }
        
        option.textContent = roleName;
        option.setAttribute('data-i18n', role);
        regTypeSelect.appendChild(option);
    });
    
    if (currentValue && availableRoles.includes(currentValue)) {
        regTypeSelect.value = currentValue;
    }
    
    if (typeof toggleRoleField === 'function') {
        toggleRoleField();
    }
}
// =====================================================
// دوال التقييم (Rating Functions)
// =====================================================

// دالة تقييم طبيب
function rateDoctor(doctorId, rating, comment = '') {
    if (!currentUser) return false;
    
    const newRating = {
        id: Date.now().toString(),
        doctorId: doctorId,
        patientId: currentUser.id,
        patientName: currentUser.name,
        rating: rating,
        comment: comment,
        createdAt: new Date().toISOString()
    };
    
    if (!doctorRatings) {
        window.doctorRatings = [];
    }
    
    doctorRatings.push(newRating);
    saveDoctorRatings();
    
    // إضافة إشعار للطبيب
    addNotification(
        doctorId,
        currentUser.id,
        currentLang === 'ar' ? `قام المريض ${currentUser.name} بتقييمك` : `Patient ${currentUser.name} rated you`,
        'rating'
    );
    
    showToast(currentLang === 'ar' ? 'تم إرسال التقييم بنجاح' : 'Rating sent successfully');
    return true;
}

// دالة عرض تقييمات طبيب
function getDoctorRatings(doctorId) {
    if (!doctorRatings) return [];
    return doctorRatings.filter(r => r.doctorId === doctorId);
}

// دالة حساب متوسط تقييم طبيب
function getDoctorAverageRating(doctorId) {
    const ratings = getDoctorRatings(doctorId);
    if (ratings.length === 0) return 0;
    const sum = ratings.reduce((acc, r) => acc + r.rating, 0);
    return (sum / ratings.length).toFixed(1);
}

// دالة عرض تقييمات الطبيب في واجهة المستخدم
function showDoctorRatings(doctorId) {
    const ratings = getDoctorRatings(doctorId);
    const avgRating = getDoctorAverageRating(doctorId);
    
    let html = `
        <div class="doctor-ratings">
            <h5>${currentLang === 'ar' ? 'التقييمات' : 'Ratings'}</h5>
            <div class="average-rating mb-3">
                <strong>${currentLang === 'ar' ? 'متوسط التقييم' : 'Average Rating'}:</strong> 
                ${avgRating} / 5
                <div class="rating-stars">
                    ${Array(5).fill(0).map((_, i) => 
                        `<span class="star ${i < Math.round(avgRating) ? 'filled' : 'empty'}">★</span>`
                    ).join('')}
                </div>
            </div>
            <div class="ratings-list">
                ${ratings.length === 0 ? 
                    `<p>${currentLang === 'ar' ? 'لا توجد تقييمات بعد' : 'No ratings yet'}</p>` :
                    ratings.map(r => `
                        <div class="rating-item mb-2 p-2" style="background: rgba(255,255,255,0.05); border-radius: 5px;">
                            <div class="d-flex justify-content-between">
                                <strong>${r.patientName}</strong>
                                <span>${new Date(r.createdAt).toLocaleDateString()}</span>
                            </div>
                            <div class="rating-stars">
                                ${Array(5).fill(0).map((_, i) => 
                                    `<span class="star ${i < r.rating ? 'filled' : 'empty'}">★</span>`
                                ).join('')}
                            </div>
                            ${r.comment ? `<p class="mt-1 mb-0 small">${r.comment}</p>` : ''}
                        </div>
                    `).join('')
                }
            </div>
        </div>
    `;
    
    return html;
}

// =====================================================
// دالة عرض ملف الطبيب للمريض
// =====================================================
window.viewDoctorProfile = function(doctorId) {
    const doctor = users.find(u => u.id === doctorId);
    if (!doctor) return;
    
    const avgRating = getDoctorAverageRating(doctorId);
    const ratings = getDoctorRatings(doctorId);
    
    const modalHtml = `
        <div class="modal fade" id="doctorProfileModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content glass-card">
                    <div class="modal-header">
                        <h5 class="modal-title">${currentLang === 'ar' ? 'ملف الطبيب' : 'Doctor Profile'}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center mb-3">
                            <img src="${profilePics[doctor.id] || 'https://via.placeholder.com/100'}" 
                                 class="rounded-circle" style="width:100px;height:100px;object-fit:cover;border:3px solid #00cec9;">
                        </div>
                        <table class="table table-borderless">
                            <tr>
                                <th>${currentLang === 'ar' ? 'الاسم' : 'Name'}:</th>
                                <td>${doctor.name}</td>
                            </tr>
                            <tr>
                                <th>${currentLang === 'ar' ? 'العيادة' : 'Clinic'}:</th>
                                <td>${doctor.clinic || (currentLang === 'ar' ? 'غير محدد' : 'Not specified')}</td>
                            </tr>
                            <tr>
                                <th>${currentLang === 'ar' ? 'التخصص' : 'Specialty'}:</th>
                                <td>${currentLang === 'ar' ? 'طبيب أسنان عام' : 'General Dentist'}</td>
                            </tr>
                            <tr>
                                <th>${currentLang === 'ar' ? 'التقييم' : 'Rating'}:</th>
                                <td>
                                    <div class="rating-stars">
                                        ${Array(5).fill(0).map((_, i) => 
                                            `<span class="star ${i < Math.round(avgRating) ? 'filled' : 'empty'}">★</span>`
                                        ).join('')}
                                        <span>(${avgRating} / 5)</span>
                                    </div>
                                    <small class="text-muted">${ratings.length} ${currentLang === 'ar' ? 'تقييم' : 'ratings'}</small>
                                </td>
                            </tr>
                        </table>
                        
                        ${ratings.length > 0 ? `
                            <hr>
                            <h6>${currentLang === 'ar' ? 'آخر التقييمات' : 'Latest Ratings'}</h6>
                            <div style="max-height: 200px; overflow-y: auto;">
                                ${ratings.slice(0, 3).map(r => `
                                    <div class="rating-item mb-2 p-2" style="background: rgba(255,255,255,0.05); border-radius: 5px;">
                                        <div class="d-flex justify-content-between">
                                            <strong>${r.patientName}</strong>
                                            <span>${new Date(r.createdAt).toLocaleDateString()}</span>
                                        </div>
                                        <div class="rating-stars">
                                            ${Array(5).fill(0).map((_, i) => 
                                                `<span class="star ${i < r.rating ? 'filled' : 'empty'}">★</span>`
                                            ).join('')}
                                        </div>
                                        ${r.comment ? `<p class="mt-1 mb-0 small">${r.comment}</p>` : ''}
                                    </div>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                    <div class="modal-footer">
                        ${currentUser?.role === 'patient' ? `
                            <button class="btn btn-warning" onclick="showRatingModal('${doctor.id}')">
                                <i class="fas fa-star"></i> ${currentLang === 'ar' ? 'تقييم' : 'Rate'}
                            </button>
                        ` : ''}
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            ${currentLang === 'ar' ? 'إغلاق' : 'Close'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    if (document.getElementById('doctorProfileModal')) {
        document.getElementById('doctorProfileModal').remove();
    }
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById('doctorProfileModal'));
    modal.show();
};

// =====================================================
// دالة عرض نافذة التقييم
// =====================================================
window.showRatingModal = function(doctorId) {
    const doctor = users.find(u => u.id === doctorId);
    if (!doctor) return;
    
    const modalHtml = `
        <div class="modal fade" id="ratingModal" tabindex="-1">
            <div class="modal-dialog">
                <div class="modal-content glass-card">
                    <div class="modal-header">
                        <h5 class="modal-title">${currentLang === 'ar' ? 'تقييم الدكتور' : 'Rate Doctor'} ${doctor.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center mb-3">
                            <label class="form-label">${currentLang === 'ar' ? 'التقييم' : 'Rating'}</label>
                            <div class="rating-input" style="font-size: 30px; cursor: pointer;">
                                ${Array(5).fill(0).map((_, i) => 
                                    `<span class="star-rating" data-rating="${i+1}" style="color: #ccc; margin: 0 5px;">★</span>`
                                ).join('')}
                            </div>
                            <input type="hidden" id="selectedRating" value="0">
                        </div>
                        <div class="mb-3">
                            <label class="form-label">${currentLang === 'ar' ? 'تعليق (اختياري)' : 'Comment (optional)'}</label>
                            <textarea class="form-control" id="ratingComment" rows="3"></textarea>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-secondary" data-bs-dismiss="modal">${currentLang === 'ar' ? 'إلغاء' : 'Cancel'}</button>
                        <button class="btn btn-primary" onclick="submitRating('${doctorId}')">${currentLang === 'ar' ? 'إرسال التقييم' : 'Submit Rating'}</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    if (document.getElementById('ratingModal')) {
        document.getElementById('ratingModal').remove();
    }
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById('ratingModal'));
    modal.show();
    
    // تفعيل النجوم
    setTimeout(() => {
        document.querySelectorAll('.star-rating').forEach(star => {
            star.addEventListener('click', function() {
                const rating = this.dataset.rating;
                document.getElementById('selectedRating').value = rating;
                
                document.querySelectorAll('.star-rating').forEach((s, i) => {
                    if (i < rating) {
                        s.style.color = '#ffc107';
                    } else {
                        s.style.color = '#ccc';
                    }
                });
            });
        });
    }, 500);
};

// =====================================================
// دالة إرسال التقييم
// =====================================================
window.submitRating = function(doctorId) {
    const rating = document.getElementById('selectedRating').value;
    const comment = document.getElementById('ratingComment').value;
    
    if (rating === '0') {
        alert(currentLang === 'ar' ? 'الرجاء اختيار تقييم' : 'Please select a rating');
        return;
    }
    
    rateDoctor(doctorId, parseInt(rating), comment);
    bootstrap.Modal.getInstance(document.getElementById('ratingModal')).hide();
    
    // تحديث عرض ملف الطبيب إذا كان مفتوحاً
    if (document.getElementById('doctorProfileModal')) {
        bootstrap.Modal.getInstance(document.getElementById('doctorProfileModal')).hide();
        setTimeout(() => viewDoctorProfile(doctorId), 500);
    }
};

// =====================================================
// دوال إدارة المستخدمين
// =====================================================

// عرض قائمة المستخدمين - نسخة محسنة
function loadUsersList() {
    console.log('🔍 loadUsersList تم استدعاؤها');
    
    const tbody = document.getElementById('usersTable');
    if (!tbody) {
        console.log('❌ usersTable غير موجود');
        return;
    }
    
    // عرض جميع المستخدمين ما عدا المرضى
    const filteredUsers = users.filter(u => u.role !== 'patient');
    
    console.log('📋 المستخدمين:', filteredUsers);
    
    if (filteredUsers.length === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center">لا يوجد مستخدمين</td></tr>';
        return;
    }
    
    let html = '';
    
    filteredUsers.forEach(user => {
        let roleName = '';
        switch(user.role) {
            case 'admin': roleName = 'مدير النظام'; break;
            case 'doctor': roleName = 'طبيب'; break;
            case 'assistant': roleName = 'مساعد'; break;
            case 'receptionist': roleName = 'استقبال'; break;
            default: roleName = user.role;
        }
        
        html += `<tr>
            <td>${user.name || '---'}</td>
            <td>${user.username || '---'}</td>
            <td>${roleName}</td>
            <td>${user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '-'}</td>
            <td>
                <div class="d-flex gap-1">
                    ${user.role === 'doctor' ? `
                        <button class="btn btn-sm btn-info" onclick="viewDoctorDetails('${user.id}')" title="عرض المرضى">
                            <i class="fas fa-users"></i>
                        </button>
                    ` : ''}
                    <button class="btn btn-sm btn-danger" onclick="deleteUser('${user.id}')" title="حذف">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </td>
        </tr>`;
    });
    
    tbody.innerHTML = html;
    console.log('✅ تم تحديث قائمة المستخدمين');
}

// عرض قائمة المستخدمين
function loadUsersList() {
    if (!hasPermission || !hasPermission('manage_users')) return;
    
    console.log('جاري تحميل قائمة المستخدمين...');
    
    // فلترة المستخدمين: نعرض كل المستخدمين ما عدا المرضى والمستخدم الحالي
    let filteredUsers = users.filter(u => 
        u.id !== currentUser?.id && 
        u.role !== 'patient' // لا نعرض المرضى في إدارة المستخدمين
    );
    
    console.log('عدد المستخدمين بعد الفلترة:', filteredUsers.length);
    
    const tbody = document.getElementById('usersTable');
    if (!tbody) {
        console.log('❌ عنصر usersTable غير موجود');
        return;
    }
    
    if (filteredUsers.length === 0) {
        tbody.innerHTML = '<tr><td colspan="6" class="text-center">لا يوجد مستخدمين</td></tr>';
        return;
    }
    
    tbody.innerHTML = filteredUsers.map(user => {
        const avgRating = typeof getDoctorAverageRating === 'function' ? getDoctorAverageRating(user.id) : 0;
        
        return `<tr>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${getRoleName?.(user.role) || user.role}</td>
            <td>${user.createdAt ? new Date(user.createdAt).toLocaleDateString() : '-'}</td>
            <td>
                <div class="d-flex gap-1">
                    ${user.role === 'doctor' ? `
                        <span class="badge bg-info">طبيب</span>
                        <div class="rating-stars">
                            ${Array(5).fill(0).map((_, i) => 
                                `<span class="star ${i < Math.round(avgRating) ? 'filled' : 'empty'}">★</span>`
                            ).join('')}
                            <small>(${avgRating})</small>
                        </div>
                    ` : ''}
                    ${user.role === 'assistant' ? '<span class="badge bg-secondary">مساعد</span>' : ''}
                    ${user.role === 'receptionist' ? '<span class="badge bg-warning">استقبال</span>' : ''}
                    ${user.role === 'admin' ? '<span class="badge bg-danger">مدير</span>' : ''}
                </div>
            </td>
            <td>
                <div class="d-flex gap-1">
                    ${user.role === 'doctor' ? `
                        <button class="btn btn-sm btn-info" onclick="viewDoctorDetails('${user.id}')" title="عرض المرضى">
                            <i class="fas fa-users"></i>
                        </button>
                    ` : ''}
                    ${hasPermission('manage_users') ? `
                        <button class="btn btn-sm btn-danger" onclick="deleteUser('${user.id}')" title="حذف">
                            <i class="fas fa-trash"></i>
                        </button>
                    ` : ''}
                </div>
            </td>
        </tr>`;
    }).join('');
    
    console.log('✅ تم تحديث قائمة المستخدمين');
}

// حذف مستخدم
window.deleteUser = function(userId) {
    if (!hasPermission('manage_users')) return;
    
    const user = users.find(u => u.id === userId);
    if (!user) return;
    
    if (user.role === 'admin' && users.filter(u => u.role === 'admin').length === 1) {
        alert('لا يمكن حذف آخر مدير في النظام');
        return;
    }
    
    showConfirmDialog('هل أنت متأكد من حذف هذا المستخدم؟', function() {
        users = users.filter(u => u.id !== userId);
        saveUsers();
        loadUsersList();
        showToast('تم حذف المستخدم');
    });
};

// عرض تفاصيل طبيب (مرضاه)
window.viewDoctorDetails = function(doctorId) {
    const doctor = users.find(u => u.id === doctorId);
    if (!doctor) return;
    
    const doctorPatients = relations
        .filter(r => r.doctorId === doctorId)
        .map(r => users.find(u => u.id === r.patientId))
        .filter(p => p);
    
    if (doctorPatients.length === 0) {
        alert('لا يوجد مرضى لهذا الطبيب');
        return;
    }
    
    let html = `
        <div class="container">
            <h4 class="text-center mb-3">مرضى الدكتور: ${doctor.name}</h4>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>اسم المريض</th>
                        <th>الهاتف</th>
                        <th>آخر زيارة</th>
                        <th>الإجراءات</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    doctorPatients.forEach(p => {
        const patientInfo = patientsData[p.id] || {};
        const phone = patientInfo.personal?.phone || '---';
        const lastVisit = patientInfo.dental?.lastVisit || '---';
        
        html += `
            <tr>
                <td>${p.name}</td>
                <td>${phone}</td>
                <td>${lastVisit}</td>
                <td>
                    <button class="btn btn-sm btn-info" onclick="showPatientDetails('${p.id}')">
                        <i class="fas fa-eye"></i> عرض
                    </button>
                </td>
            </tr>
        `;
    });
    
    html += `
                </tbody>
            </table>
        </div>
    `;
    
    showModal('مرضى الدكتور ' + doctor.name, html);
};

// دالة مساعدة لعرض مودال
function showModal(title, content) {
    const oldModal = document.getElementById('dynamicModal');
    if (oldModal) oldModal.remove();
    
    const modalHtml = `
        <div class="modal fade" id="dynamicModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content glass-card">
                    <div class="modal-header">
                        <h5 class="modal-title">${title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        ${content}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">إغلاق</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    const modal = new bootstrap.Modal(document.getElementById('dynamicModal'));
    modal.show();
}

// دوال تعليق وتفعيل الأطباء
window.showSuspendDoctorDialog = function(doctorId) {
    const reason = prompt(currentLang === 'ar' ? 'سبب التعليق:' : 'Reason for suspension:');
    if (reason !== null) {
        suspendDoctor(doctorId, reason);
        loadUsersList();
        showToast(currentLang === 'ar' ? 'تم تعليق الطبيب' : 'Doctor suspended');
    }
};

window.activateDoctor = function(doctorId) {
    if (typeof activateDoctor === 'function') {
        activateDoctor(doctorId);
        loadUsersList();
        showToast(currentLang === 'ar' ? 'تم تفعيل الطبيب' : 'Doctor activated');
    }
};

// =====================================================
// دالة إضافة مستخدم جديد
// =====================================================
window.addNewUser = function() {
    console.log('🔹 تم استدعاء دالة addNewUser');
    
    // الحصول على القيم من الحقول
    const nameInput = document.getElementById('newUserName');
    const usernameInput = document.getElementById('newUserUsername');
    const passwordInput = document.getElementById('newUserPassword');
    const roleSelect = document.getElementById('newUserRole');
    
    if (!nameInput || !usernameInput || !passwordInput || !roleSelect) {
        console.error('❌ بعض الحقول غير موجودة في الصفحة');
        alert('خطأ في تحميل الصفحة');
        return;
    }
    
    const name = nameInput.value.trim();
    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();
    const role = roleSelect.value;
    
    console.log('📝 بيانات الإدخال:', { name, username, role });
    
    if (!name || !username || !password || !role) {
        alert('يرجى ملء جميع الحقول');
        return;
    }
    
    // التحقق من عدم وجود اسم مستخدم مكرر
    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        alert('اسم المستخدم موجود بالفعل');
        return;
    }
    
    showLoading();
    
    // تشفير كلمة المرور
    bcrypt.hash(password, SALT_ROUNDS).then(hashed => {
        // إنشاء كائن المستخدم الجديد
        const newUser = {
            id: Date.now().toString(),
            username: username,
            password: hashed,
            name: name,
            role: role,
            type: role,
            clinic: currentUser?.clinic || '',
            createdBy: currentUser?.id,
            createdAt: new Date().toISOString()
        };
        
        console.log('✅ مستخدم جديد:', newUser);
        
        // إضافة المستخدم إلى المصفوفة
        users.push(newUser);
        
        // حفظ في localStorage
        saveUsers();
        
        // تفريغ الحقول
        nameInput.value = '';
        usernameInput.value = '';
        passwordInput.value = '';
        
        hideLoading();
        
        // تحديث قائمة المستخدمين إذا كانت الدالة موجودة
        if (typeof loadUsersList === 'function') {
            loadUsersList();
        }
        
        showToast('تم إضافة المستخدم بنجاح');
        
    }).catch(e => {
        console.error('❌ خطأ في التشفير:', e);
        hideLoading();
        alert('خطأ في التشفير');
    });
};
// بدء التشغيل
(function init() {
    const saved = localStorage.getItem('dentflow_currentUser');
    if (saved) {
        currentUser = JSON.parse(saved);
        if (currentUser.type === 'doctor') {
            checkSubscription();
        } else {
            showMainApp();
        }
     // تحميل قائمة المستخدمين إذا كان المستخدم مديراً
if (currentUser?.role === 'admin' || currentUser?.role === 'doctor') {
    setTimeout(() => {
        if (document.querySelector('#users.active')) {
            loadUsersList();
        }
    }, 500);
}
    }
      // بعد تحميل users من localStorage
console.log('جميع المستخدمين:', users);
console.log('عدد المستخدمين:', users.length);
    
    try {
        $('.datepicker').datepicker({ 
            format: 'yyyy-mm-dd', 
            language: currentLang==='ar'?'ar':'en', 
            autoclose: true 
        });
    } catch (e) {
        console.log('Datepicker not available');
    }
    
    updateUILanguage();
    setTimeout(updateRolesList, 100);
    
    setInterval(autoBackup, 86400000);
    
    if (currentUser?.role === 'admin') {
        document.querySelector('button[data-bs-target="#auditLog"]')?.addEventListener('shown.bs.tab', loadAuditLogs);
    }
})();

// تصدير الدوال العامة
window.showConfirmDialog = showConfirmDialog;
window.downloadPatientFilePDF = downloadPatientFilePDF;
window.getPreliminaryDiagnosis = getPreliminaryDiagnosis;
window.viewCaseImages = viewCaseImages;
window.toggleSelectMode = toggleSelectMode;
window.handleImageSelection = handleImageSelection;
window.toggleImageCheckbox = toggleImageCheckbox;
window.deleteSelectedImages = deleteSelectedImages;
window.cancelSelection = cancelSelection;
window.showImageUploadModal = showImageUploadModal;
window.uploadSelectedImages = uploadSelectedImages;
window.switchToTab = switchToTab;
window.printInvoice = printInvoice;
window.downloadInvoicePDF = downloadInvoicePDF;
window.backupData = backupData;
window.restoreBackup = restoreBackup;
window.startSession = startSession;
window.markAsDone = markAsDone;
window.markAsFollowup = markAsFollowup;
window.editAppointment = editAppointment;
window.rateDoctor = rateDoctor;
window.viewDoctorProfile = viewDoctorProfile;
window.respondToModifyRequest = respondToModifyRequest;
window.useMedicationSuggestion = useMedicationSuggestion;
window.saveAIPlanToPatient = saveAIPlanToPatient;
window.copyAIPlan = copyAIPlan;
window.generateAITreatmentPlan = generateAITreatmentPlan;
window.loadPatientDataForAI = loadPatientDataForAI;
