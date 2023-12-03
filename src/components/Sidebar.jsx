import React, { useState } from 'react';
import { Flex, Divider, Avatar, Text, Heading, IconButton } from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { FaHospitalSymbol , FaClinicMedical} from "react-icons/fa";
import { FaUserDoctor , FaBedPulse , FaGaugeHigh} from "react-icons/fa6";

import Navitem from './Navitem';
export default function Sidebar() {
  const [navSize, changeNavSize] = useState('large')
  return (
    <>


      <Flex
        pos="sticky"
        left="5"
        h="95vh"
        marginTop="2.5vh"
        w={navSize == "small" ? "75px" : "200px"}
        flexDir="column"
        boxShadow="0 4px 12px 0 rgba(0,0,0,0.05)"
        borderRadius={navSize == "small" ? "15px" : "30px"}
        justifyContent="space-between"
      >
        
        <Flex
          p="5%"
          flexDir="column"
          alignItems={navSize == "small" ? "center" : "flex-start"}
          as="nav"

        >
          <IconButton
            background="none"
            mt={5}
            _hover={{ background: 'none' }}
            icon={<FiMenu />}
            onClick={() => {
              if (navSize == "small")
                changeNavSize("large");
              else
                changeNavSize("small");
            }}
          />
          <Navitem navSize={navSize} icon={<FaGaugeHigh/>} title="DashBoard" />
          <Navitem navSize={navSize} icon={<FaHospitalSymbol/>} title="Hospitals"  active/>
          <Navitem navSize={navSize} icon={<FaClinicMedical/>} title="Clinics" />
          <Navitem navSize={navSize} icon={<FaUserDoctor/>} title="Doctors" />
          <Navitem navSize={navSize} icon={<FaBedPulse/>} title="patients" />

        </Flex>

        <Flex
          p="5%"
          flexDir="column"
          w="100%"
          alignItems={navSize == "small" ? "center" : "flex-start"}
          mb={4}
        >
          <Divider display={navSize == "small" ? "none" : "flex"} />
          <Flex mt={4} align="center">
            <Avatar size="sm" src="/" />
            <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
              <Heading as="h3" size="sm">Urna Nath</Heading>
              <Text>Admin</Text>
            </Flex>
          </Flex>

        </Flex>
      </Flex>
    </>
  )
}


