import React, {useState} from 'react';
import {MessageFormSubmitCallback} from "../Chat.interfaces";
import {TextField, Box, Button, Typography} from "@mui/material";

type MessageFormPropTypes = {
    onSubmit: MessageFormSubmitCallback;
    disabled: boolean;
    userName: string;
}

export function MessageForm({onSubmit, disabled, userName}: MessageFormPropTypes) {
    const [messageText, setMessageText] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessageText(event.target.value);
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        onSubmit(messageText);
        setMessageText('');
    }

    return (
        <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            autoComplete="off"
            sx={{
                textAlign: 'right'
            }}
        >
            {userName !== '' && <Typography variant="overline">Ready for messaging as <b>{userName}</b></Typography>}
            {userName === '' && <Typography variant="overline">Type your name to start</Typography>}
            <TextField
                fullWidth
                id="outlined-textarea"
                label="Your message"
                placeholder="Enter text"
                margin="dense"
                multiline
                value={messageText}
                disabled={disabled}
                onChange={handleChange}
                rows={3}
            />
            <Button
                type="submit"
                disabled={disabled || messageText === ''}
                variant="contained"
                style={{justifyContent: 'end'}}>Send message</Button>
        </Box>
    );
}
