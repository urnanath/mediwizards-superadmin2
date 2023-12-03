import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import {Box, Container, Flex, FormControl, FormLabel, Input, Button, Heading, useToast} from "@chakra-ui/react";

export default function Login() {
    const navigate = useNavigate();

    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const toast = useToast()


    const ValidateData = () => {
        let isProceed = true;
        let errormessage = "Please enter the ";
        if ((email === null || email === "") &&(password === null || password === "")) 
        {
            isProceed = false;
            errormessage += "email address and current password";
        } else if (email === null || email === "") {
            isProceed = false;
            errormessage += "email address";
        } else if (password === null || password === "") {
            isProceed = false;
            errormessage += " current password";
        }
        if (!isProceed) {
            alert(errormessage);
        }      
        return isProceed;
    }


    const PostData = async(e) => {
        e.preventDefault();

        if (ValidateData()) {
            try {
                const response = await axios.post("http://localhost:3000/superadmin/login",{ email, password });
                if (response.status === 200) {
                    localStorage.setItem('email',email);
                    toast({
                        title: 'Login Successful.',
                        description: "You have successfully logged into your account",
                        position:'top-right',
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    })
                    navigate("/");
                }
            } catch (error) {
                if ( (error.response && error.response.status === 401) || (error.response && error.response.status === 404)) 
                {
                    toast({
                        title:'Incorrect email or password',
                        description: "You have entered incorrect email or password",
                        position:'top',
                        status: 'warning',
                        duration: 5000,
                        isClosable: true,
                    })
                } 
                else {
                    toast({
                        title:'Error',
                        description: "An error occured during login",
                        position:'top',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    })
                }
            }
        }
    };
   



    return (
        <>
            <Container>
                <Flex justifyContent="center" flexDirection="column" marginTop="50%">
                    <Heading lineHeight="0.1 rem" align="center">Log In</Heading>
                    <Box border="5px solid blueviolet" borderRadius="15px" p="5px" backgroundColor="lavender">
                        <form>
                            <FormControl>
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" borderColor="purple" onChange={(e) => setEmail(e.target.value)} ></Input>
                            </FormControl>

                            <FormControl>
                                <FormLabel>Password</FormLabel>
                                <Input type="current-password" borderColor="purple" onChange={(e) => setPassword(e.target.value)} ></Input>
                            </FormControl>
                            
                            <Button mt={4} colorScheme="purple" type="submit" onClick={PostData}> Sign in</Button>
                            
                            <p> Don't have an account?<Link to="/register"><u> Register</u></Link></p>
                        </form>
                    </Box>
                </Flex>
            </Container>
        </>
        
            
    );
}
