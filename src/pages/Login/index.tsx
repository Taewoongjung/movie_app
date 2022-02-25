import React, {useCallback} from 'react';
import { CenteredDiv, Box, UserIdPw, Button, ForGet } from './style';
import axios from "axios";

const index = () => {

    const submit = useCallback((e) => {
        e.preventDefault();
        axios
            .post(
                'http://localhost:3000/auth/login',
            )
            .then()
            .catch()
    }, []);

    return (
        <CenteredDiv>
            <form onSubmit={submit}>
                <Box>
                    <h1>Login Form</h1>
                    <UserIdPw name="username" type="text" placeholder="User Name"/>
                    <UserIdPw name="username" type="password" placeholder="Password"/>
                    <a href="/main">
                        <Button>Sign In</Button>
                    </a>
                </Box>
            </form>
            <p>please be my man <ForGet href="#">Click Here!</ForGet></p>
        </CenteredDiv>
    )
}
export default index;