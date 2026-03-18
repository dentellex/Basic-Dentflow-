// =====================================================
// المكتبة العلمية الشاملة لأدوية وحالات الأسنان
// المصادر: Mayo Clinic, MSD Manuals, ADA, Webteb, Colgate, Arty Smile
// آخر تحديث: 2023-2025
// =====================================================

const medicationsDB = {
    // ==================== 1. تسوس الأسنان (Dental Caries) ====================
    'تسوس': {
        name: 'تسوس الأسنان',
        description: 'تآكل في طبقات السن بسبب الأحماض التي تنتجها البكتيريا',
        source: 'Mayo Clinic, ADA 2023-2024',
        
        analgesics: [
            { 
                name: 'ايبوبروفين', 
                dose: '200-400 مجم كل 4-6 ساعات', 
                type: 'مسكن', 
                maxDuration: 'لا يتجاوز 10 أيام',
                warning: 'مع الطعام لتجنب اضطراب المعدة',
                source: 'ADA Clinical Practice Guideline 2024'
            },
            { 
                name: 'باراسيتامول', 
                dose: '500-650 مجم كل 6 ساعات', 
                type: 'مسكن', 
                maxDaily: 'لا يتجاوز 3000 مجم/يوم',
                warning: 'آمن للحوامل والمرضعات',
                source: 'ADA 2024'
            },
            { 
                name: 'بنزوكايين جل', 
                dose: 'يوضع موضعياً على السن المصاب', 
                type: 'مخدر موضعي', 
                maxDuration: '3 أيام كحد أقصى',
                warning: 'لا يستخدم للأطفال أقل من سنتين',
                source: 'Colgate Professional'
            }
        ],
        
        topical: [
            { 
                name: 'فلورايد ورنيش', 
                dose: 'يطبق في العيادة كل 3-6 أشهر', 
                type: 'وقائي', 
                indication: 'لتقوية المينا ومنع التسوس',
                source: 'Mayo Clinic'
            },
            { 
                name: 'فلورايد جل', 
                dose: 'يوضع في قوالب الأسنان 5 دقائق', 
                type: 'وقائي', 
                frequency: 'أسبوعياً',
                source: 'ADA'
            }
        ],
        
        definitiveTreatment: [
            { 
                name: 'حشوات أسنان', 
                procedure: 'إزالة التسوس وترميم السن', 
                materials: ['كومبوزيت (تجميلي)', 'أملغام (لأسنان خلفية)'],
                source: 'Mayo Clinic'
            },
            { 
                name: 'تيجان (Crowns)', 
                procedure: 'تغطية السن بالكامل', 
                indication: 'تسوس واسع النطاق',
                source: 'Mayo Clinic'
            },
            { 
                name: 'علاج عصب (Root Canal)', 
                procedure: 'إزالة لب السن', 
                indication: 'تسوس وصل للعصب',
                source: 'Mayo Clinic'
            },
            { 
                name: 'خلع السن (Extraction)', 
                procedure: 'إزالة السن بالكامل', 
                indication: 'تسوس لا يمكن إنقاذه',
                source: 'Mayo Clinic'
            }
        ],
        
        recommendations: [
            'استخدم معجون أسنان بالفلورايد مرتين يومياً',
            'قلل من تناول السكريات والنشويات',
            'قم بزيارة طبيب الأسنان دورياً للفحص والتنظيف'
        ],
        
        antibioticIndication: 'لا توصف المضادات الحيوية لتسوس الأسنان غير المصحوب بأعراض جهازية',
        sourceAntibiotic: 'ADA 2019: Antibiotics not recommended unless systemic involvement'
    },

    // ==================== 2. التهاب لب السن (Pulpitis) ====================
    'التهاب لب': {
        name: 'التهاب لب السن',
        description: 'التهاب في لب السن (العصب والأوعية الدموية)',
        source: 'MSD Manuals, ADA, Journal of Endodontics',
        
        reversible: {
            name: 'التهاب لب عكوس',
            description: 'ألم خفيف مع منبهات (بارد/ساخن/حلو)',
            treatment: 'إزالة التسوس ووضع حشوة',
            analgesics: [
                { 
                    name: 'ايبوبروفين', 
                    dose: '400 مجم كل 6 ساعات', 
                    duration: '2-3 أيام',
                    source: 'ADA'
                }
            ],
            prognosis: 'يشفي بعد إزالة المسبب'
        },
        
        irreversible: {
            name: 'التهاب لب غير عكوس',
            description: 'ألم عفوي شديد، يوقظ المريض من النوم',
            treatment: [
                { name: 'علاج عصب (Root Canal)', indication: 'لإنقاذ السن' },
                { name: 'خلع السن (Extraction)', indication: 'إذا لا يمكن إنقاذه' }
            ],
            analgesics: [
                { 
                    name: 'ايبوبروفين 600 مجم + باراسيتامول 500 مجم', 
                    dose: 'معاً كل 6 ساعات', 
                    maxDuration: '3-5 أيام',
                    note: 'حتى موعد العلاج النهائي',
                    source: 'ADA Clinical Practice Guideline 2024'
                }
            ],
            source: 'Journal of Endodontics, Vol. 46, Issue 2'
        },
        
        antibiotics: {
            indication: 'فقط مع وجود أعراض جهازية (حمى، تورم في الوجه، تضخم عقد لمفاوية)',
            medications: [
                { 
                    name: 'أموكسيسيلين', 
                    dose: '500 مجم كل 8 ساعات', 
                    duration: '5-7 أيام',
                    source: 'MSD Manuals'
                },
                { 
                    name: 'كليندامايسين', 
                    dose: '300 مجم كل 6 ساعات', 
                    duration: '5-7 أيام',
                    indication: 'حساسية البنسلين',
                    source: 'MSD Manuals'
                }
            ],
            warning: 'المضاد الحيوي لا يغني عن علاج العصب أو الخلع'
        }
    },

    // ==================== 3. خراج الأسنان (Dental Abscess) ====================
    'خراج': {
        name: 'خراج الأسنان',
        description: 'تجمع صديدي بسبب عدوى بكتيرية',
        source: 'MSD Manuals, Webteb, Dr. Kareem Shliwa, ADA',
        
        surgicalTreatment: [
            { 
                name: 'تصريف الخراج (Incision & Drainage)', 
                procedure: 'فتح الخراج لتصريف الصديد', 
                priority: 'فوري',
                source: 'MSD Manuals'
            },
            { 
                name: 'علاج عصب (Root Canal)', 
                procedure: 'إزالة اللب المصاب', 
                indication: 'لإنقاذ السن',
                source: 'MSD Manuals'
            },
            { 
                name: 'خلع السن (Extraction)', 
                procedure: 'إزالة السن', 
                indication: 'إذا لا يمكن إنقاذه',
                source: 'MSD Manuals'
            }
        ],
        
        antibiotics: {
            firstLine: [
                { 
                    name: 'أموكسيسيلين', 
                    dose: '500 مجم كل 8 ساعات', 
                    duration: '5-7 أيام',
                    source: 'Webteb, MSD Manuals'
                },
                { 
                    name: 'بنسلين V', 
                    dose: '500 مجم كل 6 ساعات', 
                    duration: '5-7 أيام',
                    source: 'Webteb'
                }
            ],
            
            penicillinAllergy: {
                mild: [
                    { 
                        name: 'سيفالكسين', 
                        dose: '500 مجم كل 6 ساعات', 
                        duration: '5-7 أيام',
                        warning: 'تجنب في الحساسية الشديدة',
                        source: 'MSD Manuals'
                    }
                ],
                severe: [
                    { 
                        name: 'كليندامايسين', 
                        dose: '300 مجم كل 6 ساعات', 
                        duration: '5-7 أيام',
                        source: 'Webteb, MSD Manuals'
                    },
                    { 
                        name: 'أزيثروميسين', 
                        dose: '500 مجم يوم 1، ثم 250 مجم يومياً', 
                        duration: '5 أيام',
                        source: 'Webteb'
                    },
                    { 
                        name: 'كلاريثروميسين', 
                        dose: '500 مجم كل 12 ساعة', 
                        duration: '7 أيام',
                        source: 'MSD Manuals'
                    }
                ]
            },
            
            severeInfections: [
                { 
                    name: 'أموكسيسيلين + كلافولانات', 
                    dose: '875/125 مجم كل 12 ساعة', 
                    duration: '7-10 أيام',
                    indication: 'عدوى شديدة أو مقاومة',
                    source: 'Dr. Kareem Shliwa'
                }
            ],
            
            anaerobicCoverage: [
                { 
                    name: 'ميترونيدازول', 
                    dose: '500 مجم كل 8 ساعات', 
                    duration: '5-7 أيام',
                    indication: 'يضاف للخراج ذو الرائحة الكريهة',
                    source: 'MSD Manuals'
                }
            ],
            
            pediatric: [
                { 
                    name: 'أموكسيسيلين شراب', 
                    dose: '20-40 مجم/كجم/يوم مقسمة كل 8 ساعات', 
                    maxDuration: '7 أيام',
                    note: 'حسب وزن الطفل',
                    source: 'MSD Manuals'
                }
            ]
        },
        
        warning: '⚠️ المضاد الحيوي لا يغني عن التصريف الجراحي. يجب إجراء تصريف الخراج في أقرب وقت.',
        sourceWarning: 'MSD Manuals, ADA'
    },

    // ==================== 4. التهاب اللثة (Gingivitis) ====================
    'التهاب اللثة': {
        name: 'التهاب اللثة',
        description: 'التهاب اللثة بسبب تراكم البلاك الجرثومي',
        source: 'Mayo Clinic, Arty Smile, ADA',
        
        professionalTreatment: [
            { 
                name: 'تنظيف الأسنان (Scaling)', 
                procedure: 'إزالة الجير والبلاك', 
                frequency: 'كل 6 أشهر',
                source: 'Mayo Clinic'
            },
            { 
                name: 'تلميع الأسنان (Polishing)', 
                procedure: 'إزالة البقع', 
                source: 'ADA'
            }
        ],
        
        homeCare: [
            { 
                name: 'تنظيف الأسنان بالفرشاة', 
                instruction: 'مرتين يومياً لمدة دقيقتين', 
                source: 'Mayo Clinic'
            },
            { 
                name: 'خيط الأسنان', 
                instruction: 'مرة يومياً', 
                source: 'Mayo Clinic'
            },
            { 
                name: 'غسول ماء وملح دافئ', 
                instruction: 'مضمضة مرتين يومياً', 
                source: 'Arty Smile'
            }
        ],
        
        mouthwashes: [
            { 
                name: 'كلورهيكسيدين', 
                dose: 'مضمضة 10-15 مل مرتين يومياً', 
                maxDuration: 'أسبوعين',
                warning: 'لا يبلع، قد يغير لون الأسنان',
                source: 'Arty Smile'
            },
            { 
                name: 'غسول بالفلورايد', 
                dose: 'مضمضة يومياً', 
                source: 'ADA'
            }
        ],
        
        analgesics: [
            { 
                name: 'ايبوبروفين', 
                dose: '400 مجم عند اللزوم', 
                indication: 'لألم اللثة',
                source: 'ADA'
            }
        ],
        
        antibiotics: {
            indication: 'في الحالات الشديدة مع أعراض جهازية',
            medications: [
                { 
                    name: 'ميترونيدازول', 
                    dose: '250-500 مجم كل 8 ساعات', 
                    duration: '7 أيام',
                    source: 'Arty Smile'
                },
                { 
                    name: 'دوكسيسايكلين', 
                    dose: '100 مجم يومياً', 
                    duration: '14-21 يوم',
                    warning: 'لا يعطى للحوامل والأطفال تحت 8 سنوات',
                    source: 'MSD Manuals'
                }
            ]
        }
    },

    // ==================== 5. التهاب دواعم السن (Periodontitis) ====================
    'التهاب دواعم السن': {
        name: 'التهاب دواعم السن (Periodontitis)',
        description: 'التهاب متقدم يصيب الأنسجة الداعمة للسن (العظم واللثة)',
        source: 'Mayo Clinic, MSD Manuals',
        
        nonSurgical: [
            { 
                name: 'تقشير وكشط الجذر (Scaling & Root Planing)', 
                procedure: 'إزالة الجير تحت اللثة', 
                source: 'Mayo Clinic'
            },
            { 
                name: 'مضاد حيوي موضعي', 
                examples: ['جل دوكسيسايكلين', 'أقراص كلورهيكسيدين'], 
                application: 'يوضع في جيوب اللثة',
                source: 'MSD Manuals'
            }
        ],
        
        surgical: [
            { 
                name: 'جراحة السديلة (Flap Surgery)', 
                procedure: 'رفع اللثة لتنظيف جذور الأسنان', 
                indication: 'جيوب عميقة',
                source: 'Mayo Clinic'
            },
            { 
                name: 'تطعيم العظام (Bone Graft)', 
                procedure: 'تعويض العظام المفقودة', 
                source: 'Mayo Clinic'
            },
            { 
                name: 'تطعيم اللثة (Soft Tissue Graft)', 
                procedure: 'تغطية الجذور المكشوفة', 
                source: 'Mayo Clinic'
            },
            { 
                name: 'تجديد الأنسجة الموجه', 
                procedure: 'تحفيز نمو عظم جديد', 
                source: 'Mayo Clinic'
            }
        ],
        
        systemicAntibiotics: [
            { 
                name: 'دوكسيسايكلين', 
                dose: '100 مجم مرتين يومياً اليوم الأول، ثم 100 مجم يومياً', 
                duration: '14-21 يوم',
                source: 'MSD Manuals'
            },
            { 
                name: 'ميترونيدازول', 
                dose: '250 مجم كل 8 ساعات', 
                duration: '7-10 أيام',
                source: 'MSD Manuals'
            },
            { 
                name: 'أموكسيسيلين', 
                dose: '500 مجم كل 8 ساعات', 
                duration: '7-10 أيام',
                source: 'MSD Manuals'
            },
            { 
                name: 'ميترونيدازول + أموكسيسيلين', 
                dose: 'معاً', 
                duration: '7 أيام',
                indication: 'للحالات العدوانية',
                source: 'MSD Manuals'
            }
        ],
        
        mouthwashes: [
            { 
                name: 'كلورهيكسيدين', 
                dose: 'مضمضة مرتين يومياً', 
                maxDuration: 'أسبوعين',
                source: 'MSD Manuals'
            }
        ]
    },

    // ==================== 6. ألم ما بعد الخلع (Post-Extraction Pain) ====================
    'ألم خلع': {
        name: 'ألم ما بعد خلع السن',
        source: 'ADA Clinical Practice Guideline 2024',
        
        mildPain: [
            { 
                name: 'ايبوبروفين', 
                dose: '200-400 مجم كل 4-6 ساعة', 
                duration: '24-48 ساعة',
                source: 'ADA 2024'
            }
        ],
        
        moderatePain: [
            { 
                name: 'ايبوبروفين', 
                dose: '400-600 مجم كل 6 ساعات', 
                duration: '24-48 ساعة',
                source: 'ADA 2024'
            }
        ],
        
        moderateSeverePain: [
            { 
                name: 'ايبوبروفين 400-600 مجم + باراسيتامول 500 مجم', 
                dose: 'معاً كل 6 ساعات', 
                duration: '24-48 ساعة',
                note: 'تآزر بين المسكنين',
                source: 'ADA 2024'
            }
        ],
        
        severePain: [
            { 
                name: 'ايبوبروفين 400-600 مجم + باراسيتامول 650 مجم + هيدروكودون 10 مجم', 
                dose: 'حسب وصفة الطبيب', 
                duration: '24-48 ساعة فقط',
                warning: 'يسبب إمساك ودوخة',
                source: 'ADA 2024'
            }
        ],
        
        postExtractionCare: [
            'ضع كمادات ثلج على الخد لمدة 15 دقيقة كل ساعة',
            'تجنب المضمضة والبصق في أول 24 ساعة',
            'لا تدخن أو تستخدم ماصة الشرب',
            'تناول الأطعمة اللينة والباردة',
            'اتصل بالطبيب إذا زاد الألم بعد 3 أيام'
        ]
    },

    // ==================== 7. حساسية الأسنان (Tooth Sensitivity) ====================
    'حساسية أسنان': {
        name: 'حساسية الأسنان (Dentin Hypersensitivity)',
        description: 'ألم قصير حاد نتيجة تعرض العاج للمنبهات',
        source: 'Mayo Clinic, Colgate',
        
        toothpaste: [
            { 
                name: 'معجون للأسنان الحساسة', 
                activeIngredient: ['نترات البوتاسيوم', 'كلوريد السترونتيوم'], 
                usage: 'مرتين يومياً لمدة أسبوعين حتى يظهر التأثير',
                source: 'Colgate'
            },
            { 
                name: 'معجون بالفلورايد', 
                usage: 'مرتين يومياً', 
                source: 'Mayo Clinic'
            }
        ],
        
        professionalTreatment: [
            { 
                name: 'فلورايد جل أو ورنيش', 
                application: 'يطبق في العيادة', 
                source: 'Mayo Clinic'
            },
            { 
                name: 'حشوات أو تيجان', 
                indication: 'لحماية الجذور المكشوفة', 
                source: 'Mayo Clinic'
            },
            { 
                name: 'تطعيم اللثة', 
                indication: 'لتغطية الجذور المكشوفة', 
                source: 'Mayo Clinic'
            },
            { 
                name: 'علاج عصب', 
                indication: 'للحالات الشديدة', 
                source: 'Mayo Clinic'
            }
        ],
        
        homeCare: [
            'استخدم فرشاة أسنان ناعمة',
            'لا تفرك الأسنان بقوة',
            'تجنب الأطعمة والمشروبات الحمضية',
            'استخدم معجون للأسنان الحساسة'
        ]
    },

    // ==================== 8. التهابات فطرية (داء المبيضات الفموي) ====================
    'التهاب فطري': {
        name: 'داء المبيضات الفموي (Oral Candidiasis)',
        description: 'عدوى فطرية تسبب بقع بيضاء في الفم',
        source: 'MSD Manuals',
        
        topical: [
            { 
                name: 'نيستاتين', 
                dose: 'معلق فموي 4-6 مل 4 مرات يومياً', 
                duration: '7-14 يوم',
                instruction: 'يتمضمض ثم يبلع',
                source: 'MSD Manuals'
            },
            { 
                name: 'ميكونازول جل', 
                dose: 'يوضع على المنطقة المصابة 4 مرات يومياً', 
                duration: '7-14 يوم',
                source: 'MSD Manuals'
            },
            { 
                name: 'كلوتريمازول', 
                dose: 'أقراص للمص 5 مرات يومياً', 
                duration: '7-14 يوم',
                source: 'MSD Manuals'
            }
        ],
        
        systemic: [
            { 
                name: 'فلوكونازول', 
                dose: '100-200 مجم يومياً', 
                duration: '7-14 يوم',
                indication: 'للحالات الشديدة أو المقاومة',
                source: 'MSD Manuals'
            },
            { 
                name: 'إيتراكونازول', 
                dose: '100-200 مجم يومياً', 
                duration: '7-14 يوم',
                source: 'MSD Manuals'
            }
        ],
        
        riskFactors: [
            'استخدام المضادات الحيوية',
            'استخدام الكورتيكوستيرويدات المستنشقة',
            'مرض السكري غير المنضبط',
            'نقص المناعة',
            'أطقم الأسنان'
        ],
        
        prevention: [
            'مضمضة الفم بعد استخدام بخاخات الكورتيزون',
            'تنظيف أطقم الأسنان يومياً',
            'السيطرة على مرض السكري'
        ]
    },

    // ==================== 9. جفاف الفم (Xerostomia) ====================
    'جفاف فم': {
        name: 'جفاف الفم (Xerostomia)',
        description: 'نقص إفراز اللعاب',
        source: 'Mayo Clinic, MSD Manuals',
        
        stimulants: [
            { 
                name: 'علكة خالية من السكر', 
                usage: 'لتحفيز إفراز اللعاب', 
                source: 'Mayo Clinic'
            },
            { 
                name: 'حلوى صلبة خالية من السكر', 
                usage: 'لتحفيز إفراز اللعاب', 
                source: 'Mayo Clinic'
            },
            { 
                name: 'بيلوكاربين', 
                dose: '5 مجم 3 مرات يومياً', 
                type: 'دواء موصوف',
                source: 'MSD Manuals'
            },
            { 
                name: 'سيفيميلين', 
                dose: '30 مجم 3 مرات يومياً', 
                type: 'دواء موصوف',
                source: 'MSD Manuals'
            }
        ],
        
        substitutes: [
            { 
                name: 'بدائل لعاب', 
                examples: ['بيوتين', 'أوكس'], 
                usage: 'رذاذ أو جل عند الحاجة',
                source: 'MSD Manuals'
            }
        ],
        
        recommendations: [
            'اشرب الماء بكثرة',
            'تجنب الكافيين والكحول',
            'استخدم مرطب هواء في غرفة النوم',
            'تجنب غسولات الفم التي تحتوي كحول',
            'نظف أسنانك بمعجون بالفلورايد'
        ]
    },

    // ==================== 10. رائحة الفم الكريهة (Halitosis) ====================
    'رائحة كريهة': {
        name: 'رائحة الفم الكريهة (Halitosis)',
        source: 'Mayo Clinic, MSD Manuals',
        
        mouthwashes: [
            { 
                name: 'غسول بالكلورهيكسيدين', 
                usage: 'مرتين يومياً لمدة أسبوع', 
                source: 'MSD Manuals'
            },
            { 
                name: 'غسول بالكلوريد الزنك', 
                usage: 'مرتين يومياً', 
                source: 'MSD Manuals'
            },
            { 
                name: 'غسول بزيت شجرة الشاي', 
                usage: 'مرتين يومياً', 
                source: 'MSD Manuals'
            }
        ],
        
        hygiene: [
            'نظف أسنانك بالفرشاة والخيط يومياً',
            'نظف لسانك باستخدام كاشط اللسان',
            'نظف أطقم الأسنان يومياً',
            'اشرب الماء بكثرة'
        ],
        
        underlyingCauses: [
            'تسوس الأسنان',
            'أمراض اللثة',
            'جفاف الفم',
            'التهابات الجهاز التنفسي',
            'ارتجاع المريء',
            'مرض السكري'
        ]
    }
};

// =====================================================
// دوال مساعدة للاستعلام عن الأدوية حسب التشخيص
// =====================================================

function getMedicationsByDiagnosis(diagnosis) {
    const keywords = {
        'تسوس': 'تسوس',
        'خراج': 'خراج',
        'التهاب لب': 'التهاب لب',
        'التهاب العصب': 'التهاب لب',
        'التهاب اللثة': 'التهاب اللثة',
        'التهاب دواعم': 'التهاب دواعم السن',
        'خلع': 'ألم خلع',
        'حساسية': 'حساسية أسنان',
        'فطريات': 'التهاب فطري',
        'جفاف': 'جفاف فم',
        'رائحة': 'رائحة كريهة'
    };
    
    for (let key in keywords) {
        if (diagnosis.includes(key)) {
            return medicationsDB[keywords[key]] || null;
        }
    }
    return null;
}

// دالة اقتراح الأدوية الذكية
function suggestMedications(patientId, diagnosis) {
    if (!diagnosis) return [];
    
    const patient = users.find(u => u.id === patientId);
    const info = patientsData[patientId] || {};
    const medical = info.medical || {};
    
    let suggestions = [];
    let diagnosisKey = '';
    
    if (diagnosis.includes('تسوس')) diagnosisKey = 'تسوس';
    else if (diagnosis.includes('خراج')) diagnosisKey = 'خراج';
    else if (diagnosis.includes('التهاب لب') || diagnosis.includes('عصب')) diagnosisKey = 'التهاب لب';
    else if (diagnosis.includes('التهاب اللثة')) diagnosisKey = 'التهاب اللثة';
    else if (diagnosis.includes('التهاب دواعم')) diagnosisKey = 'التهاب دواعم السن';
    else if (diagnosis.includes('خلع')) diagnosisKey = 'ألم خلع';
    else if (diagnosis.includes('حساسية')) diagnosisKey = 'حساسية أسنان';
    else if (diagnosis.includes('فطريات')) diagnosisKey = 'التهاب فطري';
    else if (diagnosis.includes('جفاف')) diagnosisKey = 'جفاف فم';
    else if (diagnosis.includes('رائحة')) diagnosisKey = 'رائحة كريهة';
    
    if (!diagnosisKey || !medicationsDB[diagnosisKey]) return [];
    
    const medData = medicationsDB[diagnosisKey];
    
    if (medData.analgesics) suggestions.push(...medData.analgesics);
    if (medData.antibiotics) {
        if (medData.antibiotics.firstLine) suggestions.push(...medData.antibiotics.firstLine);
        if (medData.antibiotics.medications) suggestions.push(...medData.antibiotics.medications);
    }
    if (medData.systemicAntibiotics) suggestions.push(...medData.systemicAntibiotics);
    if (medData.topical) suggestions.push(...medData.topical);
    if (medData.mouthwashes) suggestions.push(...medData.mouthwashes);
    if (medData.toothpaste) suggestions.push(...medData.toothpaste);
    if (medData.professionalTreatment) suggestions.push(...medData.professionalTreatment);
    if (medData.stimulants) suggestions.push(...medData.stimulants);
    if (medData.substitutes) suggestions.push(...medData.substitutes);
    
    const unique = [];
    const names = new Set();
    suggestions.forEach(med => {
        if (med.name && !names.has(med.name)) {
            names.add(med.name);
            unique.push(med);
        }
    });
    
    return unique.slice(0, 8);
}

// =====================================================
// تصدير المكتبة للاستخدام
// =====================================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { medicationsDB, getMedicationsByDiagnosis, suggestMedications };
}