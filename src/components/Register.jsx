import React,{useState} from "react";

import { useNavigate } from "react-router-dom";
import axios from 'axios';


import {Box, Container, Flex, FormControl, FormLabel, Input, Button, Heading, useToast} from "@chakra-ui/react";


export default function Register() {

    const navigate = useNavigate();

    const [password,setPassword]=useState("")
    const [email,setEmail]=useState("")

    const toast = useToast();

    const IsValidate=()=>{
        let isProceed= true;
        let errormessage="Please enter the ";
        if((email===null || email==='') && (password===null || password===''))
        {
            isProceed=false;
            errormessage+='email address and current password' ;
        } else if(email===null || email===''){
            isProceed=false;
            errormessage+='email address';
        } else if(password===null || password===''){
            isProceed=false;
            errormessage+=' current password';
        }
        if(!isProceed){
            alert(errormessage);
        }
        else{
            
            if (! /^[a-z0-9]+@[a-z0-9]+\.[a-z]+$/.test(email)) {  
                isProceed = false;
                alert("Please enter valid email id");
            } 
        }
        return isProceed;
    }


const PostData = async (event) => {
    event.preventDefault();
    if(IsValidate()){

        try {
            const response = await axios.post('http://localhost:3000/superadmin/signup', { email ,password });


            if (response.status === 201) {
                toast({
                    title: 'Registration Successful.',
                    description: "Kindly login to your account to access all our features",
                    position:'top-right',
                    status: 'success',
                    duration: 5000,
                    isClosable: true,
                })
                navigate('/login');
            }
        } catch (error) {
            if (error.response && error.response.status === 403) {
                toast({
                    description: "The email already exists.",
                    position:'top',
                    status: 'info',
                    duration: 5000,
                    isClosable: true,
                })
            } else {
                
                if(password.length<5){
                    toast({
                        title:'Invalid Password',
                        description: "Password must contain atleast 5 characters.",
                        position:'top',
                        status: 'warning',
                        duration: 5000,
                        isClosable: true,
                    })
                }
                else{
                    toast({
                        title:'Error',
                        description: "An error occured during registration",
                        position:'top',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    })
                }
            }
        }
    }
  };

                

                   
    


    return (
        <>
            <Container>
                <Flex justifyContent="center" marginTop="50%" flexDirection="column" >
                    <Heading lineHeight="0.1 rem" align="center">Sign Up</Heading>
                    <Box border="5px solid blueviolet" borderRadius="15px" p="5px" backgroundColor="lavender">
                        <form method="POST">
                        <FormControl>
                            <FormLabel>Email address</FormLabel>
                            <Input required type="email" borderColor="purple" value={email} onChange={(e)=>setEmail(e.target.value)}></Input>
                        </FormControl>

                        <FormControl>
                            <FormLabel>Password</FormLabel>
                            <Input required type="current-password" borderColor="purple" value={password} onChange={(e)=>setPassword(e.target.value)}></Input>
                        </FormControl>
                        <Button mt={4} colorScheme="purple" type="submit" onClick={PostData}> Register</Button>
                        </form>
                    </Box>
                </Flex>

            </Container>
        </>

    );
}

