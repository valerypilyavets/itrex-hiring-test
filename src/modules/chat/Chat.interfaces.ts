export enum ChatStatus {
    DISABLED = 0,
    ACTIVE = 1
}

export type ChatMessage = {
    author: string;
    text: string;
    time: string;
}

export type ChatState = {
    messages: ChatMessage[];
    status: ChatStatus;
    userName: string;
}

export type MessageFormSubmitCallback = (message: string) => void;
export type NameFormSubmitCallback = (name: string) => void;