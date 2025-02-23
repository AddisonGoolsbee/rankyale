export type EntryData = {
    name: string;
    image?: string;
}

export type Entry = {
    name: string;
    image?: string;
    score: number;
    popularity: number;
};

export type CategoryDocument = {
    data: Entry[];
};
