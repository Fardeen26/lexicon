export const books = [
    {
        _id: "67653e93cf67c47057da70f8",
        title: "Think and Grow Rich",
        description: 'A Book on Money',
        coverImage: "https://m.media-amazon.com/images/I/41BooQjbMZL._SY445_SX342_.jpg",
        file: 'https://www.scribd.com/document/715592134/How-to-Win-Friends-and-Influence-People-by-Dale-Carnegie',
        author: "Napoleon Hill",
    },
    {
        _id: "67654029cf67c47057da711f",
        title: "STEVE JOBS",
        description: 'A book about Steve Jobs',
        coverImage: "https://m.media-amazon.com/images/I/41QOuocnO4L._SY445_SX342_.jpg",
        file: 'https://github.com/SergeiMikhailovskii/Books/blob/master/Walter%20Isaacson%20-%20Steve%20Jobs%20-%202011.pdf',
        author: "Walter Isaacson",
    },
    {
        _id: "67653fb3cf67c47057da7117",
        title: "Start With Why",
        description: 'A book about leaders',
        coverImage: "https://m.media-amazon.com/images/I/41oKiltofGL._SY445_SX342_.jpg",
        file: 'https://www.earthgifts.com.au/ebook/simon-sinek-start-with-why.pdf',
        author: "Sinek Simon",
    },
    {
        _id: "67653934b6cdc17ae0fc939b",
        title: "The 48 Laws of Power",
        description: 'A Book on Manipulation',
        coverImage: "https://m.media-amazon.com/images/I/31RW8HQ31WL._SY445_SX342_.jpg",
        file: 'https://www.slideshare.net/slideshow/the-48-laws-of-power-pdfdrive-pdf/265585690',
        author: "Robert Greene",
    },
]


export type Book = {
    _id: string;
    title: string;
    description: string;
    coverImage: string;
    file: string;
    author: string;
    creator?: string;
};
