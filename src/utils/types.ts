export type EntryData = {
    name: string;
    image?: string;
}

export type Entry = {
    id: string;
    name: string;
    email?: string;
    year?: number;
    image?: string;
    score: number;
    popularity: number;
    class_year: number;
};

export type CategoryDocument = {
    data: Entry[];
};
