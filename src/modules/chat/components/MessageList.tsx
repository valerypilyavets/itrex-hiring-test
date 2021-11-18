import React from 'react';
import {ChatMessage} from "../Chat.interfaces";
import {Typography, Box} from "@mui/material";

type MessageListPropTypes = {
    messages: ChatMessage[];
};

export function MessageList({messages}: MessageListPropTypes) {
    const getTime = (message: ChatMessage) => {
        return new Date(message.time).toLocaleTimeString();
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column-reverse'
        }}>
            {messages.map((message, index) => (
                <Box key={index} sx={{
                    textAlign: 'right',
                    marginBottom: '10px'
                }}>
                    <Typography variant="subtitle2" display="block">
                        <Typography display="inline" sx={{color: 'red'}}><b>{message.author}</b></Typography>
                        <Typography display="inline"> at {getTime(message)}</Typography>
                    </Typography>
                    <Typography sx={{
                        whiteSpace: 'pre-wrap'
                    }} variant="body2" display="block">{message.text}</Typography>
                </Box>
            ))}
        </Box>
    );
}
