import React, { useEffect } from 'react'
import { Flex, Heading , Button, useToast, Avatar, Text} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";


import Sidebar from './Sidebar';
import { FiMenu } from "react-icons/fi";



export default function Home() {

  const toast = useToast();

  const navigate = useNavigate();
  useEffect(()=>{
    let email= localStorage.getItem('email');
    if(email==='' || email===null){
      navigate('/login');
    }
  },[]);

  
 const signOut = ()=>{
      localStorage.removeItem('email');
      toast({
        title: 'Log out Successful.',
        position:'top',
        status: 'success',
        duration: 5000,
        isClosable: true,
    })
      navigate('/login');
 }

  return (
    <>
    <Flex>
      <Sidebar/>
    </Flex>
    
    </>
  )
}
