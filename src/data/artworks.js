const items4x5 = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    title: `Artwork ${i + 1}`,
    image: `/artworks/4_5-artwork-${i + 1}.png`,
    ratio: "4:5",
    aspect: "4/5",
}));

const items16x9 = Array.from({ length: 3 }, (_, i) => ({
    id: i + 9,
    title: `Artwork ${i + 9}`,
    image: `/artworks/16_9-artwork-${i + 1}.png`,
    ratio: "16:9",
    aspect: "16/9",
}));

const items3x4 = Array.from({ length: 2 }, (_, i) => ({
    id: i + 12,
    title: `Artwork ${i + 12}`,
    image: `/artworks/3_4-artwork-${i + 1}.png`,
    ratio: "3:4",
    aspect: "3/4",
}));

const items1x1 = Array.from({ length: 2 }, (_, i) => ({
    id: i + 14,
    title: `Artwork ${i + 14}`,
    image: `/artworks/1_1-artwork-${i + 1}.png`,
    ratio: "1:1",
    aspect: "1/1",
}));

export const artworks = [
    ...items4x5,
    ...items16x9,
    ...items3x4,
    ...items1x1,
];