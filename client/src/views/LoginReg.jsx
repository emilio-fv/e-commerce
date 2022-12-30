import Container from "@mui/system/Container";
import React from "react";
import Footer from "../components/Footer";
import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";
import RegisterForm from "../components/RegisterForm";

const LoginReg = () => {
    return (
        <>
            <Navbar />
            <Container maxWidth="lg">
                <RegisterForm />
                <LoginForm />
            </Container>
            <Footer />
        </>
    )
}

export default LoginReg;