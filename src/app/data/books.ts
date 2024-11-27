export const books = [
    {
        _id: "673476ef1611b07b42e5d0d4",
        title: "Think and Grow Rich",
        description: 'A Book on Money',
        coverImage: "https://m.media-amazon.com/images/I/41BooQjbMZL._SY445_SX342_.jpg",
        file: 'https://www.scribd.com/document/715592134/How-to-Win-Friends-and-Influence-People-by-Dale-Carnegie',
        author: "Napoleon Hill",
        creatorName: 'fardeen mansuri',
        creatorImage: 'https://lh3.googleusercontent.com/a/ACg8ocL3umt3jx8RHAD792N3SdmJeHPCW8AocWhRQ8yy-xcj5YfhCVI=s96-c'
    },
    {
        _id: "673477e61611b07b42e5d0e2",
        title: "STEVE JOBS",
        description: 'A book about Steve Jobs',
        coverImage: "https://m.media-amazon.com/images/I/41QOuocnO4L._SY445_SX342_.jpg",
        file: 'https://github.com/SergeiMikhailovskii/Books/blob/master/Walter%20Isaacson%20-%20Steve%20Jobs%20-%202011.pdf',
        author: "Walter Isaacson",
        creatorName: 'fardeen mansuri',
        creatorImage: 'https://lh3.googleusercontent.com/a/ACg8ocL3umt3jx8RHAD792N3SdmJeHPCW8AocWhRQ8yy-xcj5YfhCVI=s96-c'
    },
    {
        _id: "673478081611b07b42e5d0e5",
        title: "Start With Why",
        description: 'A book about leaders',
        coverImage: "https://m.media-amazon.com/images/I/41oKiltofGL._SY445_SX342_.jpg",
        file: 'https://www.earthgifts.com.au/ebook/simon-sinek-start-with-why.pdf',
        author: "Sinek Simon",
        creatorName: 'fardeen mansuri',
        creatorImage: 'https://lh3.googleusercontent.com/a/ACg8ocL3umt3jx8RHAD792N3SdmJeHPCW8AocWhRQ8yy-xcj5YfhCVI=s96-c'
    },
    {
        _id: "673476a81611b07b42e5d0d1",
        title: "The 48 Laws of Power",
        description: 'A Book on Manipulation',
        coverImage: "https://m.media-amazon.com/images/I/31RW8HQ31WL._SY445_SX342_.jpg",
        file: 'https://www.slideshare.net/slideshow/the-48-laws-of-power-pdfdrive-pdf/265585690',
        author: "Robert Greene",
        creatorName: 'fardeen mansuri',
        creatorImage: 'https://lh3.googleusercontent.com/a/ACg8ocL3umt3jx8RHAD792N3SdmJeHPCW8AocWhRQ8yy-xcj5YfhCVI=s96-c'
    },
]


export type Book = {
    _id: string;
    title: string;
    description: string;
    coverImage: string;
    file: string;
    author: string;
    creatorName: string;
    creatorImage: string
};
