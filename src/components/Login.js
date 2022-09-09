import { Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const Login = () => {
    const URL = process.env.REACT_APP_API;

    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleChange = async (e) => {
        const { value, name } = e.target;
        setLoginData((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        try {
            const response = await axios.post(`${URL}/users/login`, loginData);
            console.log(response.data);
        } catch (err) {
            console.log(err);
            alert(err.response.data.msg);
        }
    }

    return (
        <div className="col-4 mx-auto my-5 d-flex flex-column gap-4">
        <TextField
            label="Email"
            name="email"
            variant="outlined"
            value={loginData.email}
            onChange={handleChange}
            placeholder="Email"
        />
        <TextField
            label="Password"
            name="password"
            type="password"
            variant="outlined"
            value={loginData.password}
            onChange={handleChange}
            placeholder="Password"
        />
        <Button
            className="col-4 mx-auto"
            variant="contained"
            size="large"
            onClick={handleSubmit}
        >
            Submit
        </Button>
        </div>
    );
};

export default Login;
