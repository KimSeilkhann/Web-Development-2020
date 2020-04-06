export interface Comment {
    text: string;
}

export interface Actor{
    id: number;
    firstName: string;
    lastName: string;
    comments: Comment[];
}
