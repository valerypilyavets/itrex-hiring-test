import React, { useState, useEffect } from 'react';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import {enableChat, addMessage, chatStatusSelector, messagesSelector, syncMessages, changeName, userNameSelector} from './Chat.reducer';

import {ChatStatus} from "./Chat.interfaces";

import {MessageForm} from "./components/MessageForm";
import {MessageList} from "./components/MessageList";

import {ChatMessage, MessageFormSubmitCallback, NameFormSubmitCallback} from "./Chat.interfaces";

import {Container, Grid} from "@mui/material";
import {NameForm} from "./components/NameForm";

export function Chat() {
    const messages = useAppSelector(messagesSelector);
    const userName = useAppSelector(userNameSelector);
    const chatStatus = useAppSelector(chatStatusSelector);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (userName !== '') {
            dispatch(enableChat());
            dispatch(syncMessages());
        }
    }, [userName, dispatch]);

    const onNameChange: NameFormSubmitCallback = (name) => {
        dispatch(changeName(name));
    }

    const onMessageSend: MessageFormSubmitCallback = (message) => {
        const time = new Date().toISOString();
        dispatch(addMessage({
            author: userName,
            text: message,
            time: time
        }));
    }

    return (
        <div>
            <Container maxWidth={'sm'} fixed>
                <Grid
                    container
                    direction="column"
                    alignItems="stretch"
                    sx={{height: '100vh'}}
                >
                    <Grid sx={{height: '100px'}} item>
                        <NameForm onSubmit={onNameChange} />
                    </Grid>
                    <Grid sx={{
                        flex: '1',
                        overflow: 'scroll'
                    }} item>
                        <MessageList messages={messages} />
                    </Grid>
                    <Grid sx={{height: '200px'}} item>
                        <MessageForm
                            userName={userName}
                            disabled={chatStatus === ChatStatus.DISABLED}
                            onSubmit={onMessageSend}
                        />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
