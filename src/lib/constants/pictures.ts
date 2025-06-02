export const pictures: PictureInfo[] = [
    {
        src: "/thlt-lcx-bA3sCn4b0Kg.webp",
        title: "Snow-capped mountain peaks glow at sunrise",
        author: "THLT LCX",
        username: "thlt_lcx",
        size: [1154, 768]
    },
    {
        src: "/zhenyu-luo-Mw4enjbCcFA.webp",
        title: "Nighttime skyline illuminated over the water",
        author: "ZHENYU LUO",
        username: "mrnuclear",
        size: [1152, 768]
    },
    {
        src: "/andrey-k-1zGfONzOqyM.webp",
        title: "Blue building with orange window frames",
        author: "Andrey K",
        username: "anamnesis33",
        size: [768, 1152]
    },
    {
        src: "/colin-meg-fg2_fE99bCo.webp",
        title: "A sunset paints the sky over the beach",
        author: "Colin + Meg",
        username: "colinandmeg",
        size: [768, 1152]
    },
    {
        src: "/andrew-haimerl-76BAL0mYAvE.webp",
        title: "Neon lights illuminate a dark alley at night",
        author: "Andrew Haimerl",
        username: "andrewnef",
        size: [768, 1150]
    },
    {
        src: "/danny-greenberg-Kcll3JDOAwE.webp",
        title: "Empty icee cups are scattered on a barrier",
        author: "Danny Greenberg",
        username: "by_danny_g",
        size: [768, 1152]
    },
    {
        src: "/kelly-sikkema-Oc3eKVTSnho.webp",
        title: "Book, notebook, pen, and coffee on a blanket",
        author: "Kelly Sikkema",
        username: "kellysikkema",
        size: [1152, 768]
    },
    {
        src: "/josh-hild-O3egE606tcw.webp",
        title: "Post alley and its distinctive architecture are seen",
        author: "Josh Hild",
        username: "joshhild",
        size: [768, 1150]
    },
    {
        src: "/zhenyu-luo-iDKBSqYL_lc.webp",
        title: "A city skyline stands against a cloudy sky",
        author: "ZHENYU LUO",
        username: "mrnuclear",
        size: [1152, 768]
    },
    {
        src: "/shawn-6TDN4xvkmnQ.webp",
        title: "A car parked on a snowy street at night photo",
        author: "Shawn",
        username: "directedbyshawn",
        size: [768, 1152]
    },
]

export function getShuffledPictures() {
    const shuffled = structuredClone(pictures)
    return shuffled.sort(() => Math.random() - 0.5)
}