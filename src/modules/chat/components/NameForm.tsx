import React, {useState} from 'react';
import {NameFormSubmitCallback} from "../Chat.interfaces";
import {Box, Button, TextField} from "@mui/material";

type NameFormPropTypes = {
    onSubmit: NameFormSubmitCallback
};

export function NameForm({onSubmit}: NameFormPropTypes) {
    const [userName, setUserName] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const handleSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        onSubmit(userName);
        setUserName('');
    }

    return (
        <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            autoComplete="off"
            sx={{
                textAlign: 'right',
                marginTop: '20px'
            }}
        >
            <TextField
                required
                id="outlined-input"
                label="Your name"
                placeholder="Enter name"
                value={userName}
                onChange={handleChange}
                size="small"
                sx={{
                    width: '400px',
                    marginRight: '10px'
                }}
            />
            <Button
                type="submit"
                disabled={userName === ''}
                variant="contained"
                style={{justifyContent: 'end'}}>Change name</Button>
        </Box>
    );
}
