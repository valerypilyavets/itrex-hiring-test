import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import {ChatState, ChatStatus, ChatMessage} from "./Chat.interfaces";

const initialState: ChatState = {
    messages: [],
    status: ChatStatus.DISABLED,
    userName: ''
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        enableChat: (state) => {
            state.status = ChatStatus.ACTIVE;
        },
        addMessage: (state, action: PayloadAction<ChatMessage>) => {
            state.messages.unshift(action.payload);
        },
        changeName: (state, action: PayloadAction<string>) => {
            state.userName = action.payload;
        },
        syncMessages: (state) => {
            state.messages = state.messages.map((message) => {
                return {
                    ...message,
                    author: state.userName,
                }
            })
        },
    },
});

export const { enableChat, addMessage, changeName, syncMessages } = chatSlice.actions;

export const messagesSelector = (state: RootState) => state.chat.messages;
export const userNameSelector = (state: RootState) => state.chat.userName;
export const chatStatusSelector = (state: RootState) => state.chat.status;

export default chatSlice.reducer;
