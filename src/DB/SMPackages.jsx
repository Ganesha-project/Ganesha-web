const defaultSourcePage = "social-media-management";

const smmKeywords = [
    "Paket BotLane",
    "Paket Midlane",
    "Paket Jungler",
    "Social Media Management paket",
    "Paket SMM BotLane",
    "Paket SMM Midlane",
    "Paket SMM Jungler",
    "Social Media Design Feed",
    "Template Post Gratis",
    "Design Feed Social Media",
    "Design Story Social Media",
    "Content Carousel Social Media",
    "Copywriting gratis",
    "Admin Post dan Scheduling",
    "Optimasi Hashtag Brand",
    "Optimasi Hashtag Viral",
    "Desain 100% Original",
    "Unlimited Revision Social Media",
    "Reels Content Social Media",
    "Create Homepage Facebook",
    "Free Ads Consulting",
    "1 Week Ads Free",
    "Free Ads Content",
    "Monthly Reporting Social Media",
    "Raw File Editable",
    "Paket Social Media Management Jakarta",
    "Harga paket SMM BotLane",
    "Harga paket SMM Midlane",
    "Harga paket SMM Jungler",
    "Discount 30% SMM",
    "Paket SMM murah",
    "Konsultasi Social Media Management"
];

const SMPackagesRaw = [
    {
        type: "Paket BotLane",
        price: 2000000,
        priceOriginal: 2850000,
        discount: 30,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Social%20Media%20Management%20nih!%20",
        features: [
            { feature: "Free Template Post", status: true },
            { feature: "Design Feed 14", status: true },
            { feature: "Design Story 4", status: true },
            { feature: "Including 4 Content Carousel", status: true },
            { feature: "Free 14 Copy Writing", status: true },
            { feature: "Free Admin Post (with Meta & Scheduling)", status: true },
            { feature: "Free Optimasi Hastag Tertarget Brand & Viral", status: true },
            { feature: "100% Original Design", status: true },
            { feature: "Unlimited Revision", status: true },
            { feature: "1 Reels Content", status: false },
            { feature: "Free Create Homepage Facebook", status: false },
            { feature: "Free Ads Consulting", status: false },
            { feature: "Free 1 Week Ads", status: false },
            { feature: "Free Ads Content", status: false },
            { feature: "Monthly Reporting", status: false },
            { feature: "Raw File Editable", status: false }
        ]
    },
    {
        type: "Paket Midlane",
        price: 5000000,
        priceOriginal: 7150000,
        discount: 30,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Social%20Media%20Management%20nih!%20",
        features: [
            { feature: "Free Template Post", status: true },
            { feature: "Design Feed 24", status: true },
            { feature: "Design Story 7", status: true },
            { feature: "Including 6 Content Carousel", status: true },
            { feature: "Free 25 Copy Writing", status: true },
            { feature: "Free Admin Post (with Meta & Scheduling)", status: true },
            { feature: "Free Optimasi Hastag Tertarget Brand & Viral", status: true },
            { feature: "100% Original Design", status: true },
            { feature: "Unlimited Revision", status: true },
            { feature: "1 REEL Content", status: true },
            { feature: "Free Create Homepage Facebook", status: true },
            { feature: "Free Ads Consulting", status: true },
            { feature: "Free 1 Week Ads", status: false },
            { feature: "Free Ads Content", status: false },
            { feature: "Monthly Reporting", status: false },
            { feature: "Raw File Editable", status: false }
        ]
    },
    {
        type: "Paket Jungler",
        price: 10000000,
        priceOriginal: 14300000,
        discount: 30,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Social%20Media%20Management%20nih!%20",
        features: [
            { feature: "Free Template Post", status: true },
            { feature: "Design Feed 30", status: true },
            { feature: "Design Story 10", status: true },
            { feature: "Including 8 Content Carousel", status: true },
            { feature: "Free 33 Copy Writing", status: true },
            { feature: "Free Admin Post (with Meta & Scheduling)", status: true },
            { feature: "Free Optimasi Hastag Tertarget Brand & Viral", status: true },
            { feature: "100% Original Design", status: true },
            { feature: "Unlimited Revision", status: true },
            { feature: "3 REEL's Content", status: true },
            { feature: "Free Create Homepage Facebook", status: true },
            { feature: "Free Ads Consulting", status: true },
            { feature: "Free 1 Week Ads", status: true },
            { feature: "Free Ads Content", status: true },
            { feature: "Monthly Reporting", status: true },
            { feature: "Raw File Editable", status: true }
        ]
    }
];

export const DesignPackages = [
    {
        type: "Paket Minion",
        price: 500000,
        priceOriginal: 950000,
        discount: 47,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Paket%20Design%20Social%20Media%nih!%20",
        features: [
            {
                feature: "Free Template Post",
                status: true
            },
            {
                feature: "Design Feed 14",
                status: true
            },
            {
                feature: "Design Story 4",
                status: true
            },
            {
                feature: "Including 4 Content Carousel",
                status: true
            },
            {
                feature: "Free 3 Revision",
                status: true
            },
            {
                feature: "1 REEL Content",
                status: false
            },
            {
                feature: "Raw File Editable",
                status: false
            }
        ]
    },
    {
        type: "Paket Turtle",
        price: 1100000,
        priceOriginal: 2090000,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Paket%20Design%20Social%20Media%nih!%20",
        discount: 47,
        features: [
            {
                feature: "Free Template Post",
                status: true
            },
            {
                feature: "Design Feed 14",
                status: true
            },
            {
                feature: "Design Story 7",
                status: true
            },
            {
                feature: "Including 6 Content Carousel",
                status: true
            },
            {
                feature: "Unlimited Revision",
                status: true
            },
            {
                feature: "1 REEL Content",
                status: true
            },
            {
                feature: "Raw File Editable",
                status: false
            }
        ]
    },
    {
        type: "Paket Lord",
        price: 1900000,
        priceOriginal: 3610000,
        link: "https://api.whatsapp.com/send?phone=628887127000&text=Halo%20MinGans!%20Aku%20mau%20konsultasi%20terkait%20Paket%20Design%20Social%20Media%nih!%20",
        discount: 47,
        features: [
            {
                feature: "Free Template Post",
                status: true
            },
            {
                feature: "Design Feed 30",
                status: true
            },
            {
                feature: "Design Story 10",
                status: true
            },
            {
                feature: "Including 8 Content Carousel",
                status: true
            },
            {
                feature: "Unlimited Revision",
                status: true
            },
            {
                feature: "3 REEL's Content",
                status: true
            },
            {
                feature: "Raw File Editable",
                status: true
            }
        ]
    }
];

export const SMPackages = SMPackagesRaw.map((pkg) => ({
    ...pkg,
    sourcePage: pkg.sourcePage || defaultSourcePage,
    keywords: pkg.keywords?.length ? pkg.keywords : smmKeywords,
}));

