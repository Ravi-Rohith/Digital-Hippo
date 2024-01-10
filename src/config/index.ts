export const PRODUCT_CATEGORIES = [
    {
        label: "UI KITS",
        value: "ui_kits" as const,
        featured: [
            {
                name: 'Editor Picks',
                href: "#",
                imageSrc: "/nav/ui-kits/mixed.jpg"
            },
            {
                name: 'New Arrivals',
                href: "#",
                imageSrc: "/nav/ui-kits/blue.jpg"
            },
            {
                name: 'Bestseller',
                href: "#",
                imageSrc: "/nav/ui-kits/purple.jpg"
            }
        ]
    },
    {
        label: "Icons",
        value: "icons" as const,
        featured: [
            {
                name: 'Favourite Icon Pics',
                href: "#",
                imageSrc: "/nav/icons/picks.jpg"
            },
            {
                name: 'New Arrivals',
                href: "#",
                imageSrc: "/nav/icons/new.jpg"
            },
            {
                name: 'Bestselling Icon',
                href: "#",
                imageSrc: "/nav/icons/bestseller.jpg"
            }
        ]
    }
]