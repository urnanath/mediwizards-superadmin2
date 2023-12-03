import { Flex, Menu, MenuButton, IconButton, Icon, Heading ,Text, textDecoration, background} from "@chakra-ui/react";
import { color } from "framer-motion";
import React from "react";
import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";
// import { FiHome } from "react-icons/fi";

export default function Navitem({navSize,title,icon,active} ) {
    return (
        <Flex
            mt={30}
            flexDir="column"
            w="100%"
            alignItems={navSize == "small" ? "center" : "flex-start"}
        >
            <Flex>
                <Menu placement="right">
                    <Link
                     backgroundcolor={active && "#AEC8CA"}
                     p={3}
                     borderradius={8}
                     _hover={{textDecor:'none',backgroundColor:"#AEC8CA" }}
                     w={navSize=="large" && '100%'}
                    >
                     <MenuButton w="100%">
                      <Flex>
                        <Icon fontSize={"x-large"}>{icon}</Icon>
                        <Text ml={5} display={navSize=="small" ? "none" : "flex"}>{title}</Text>
                      </Flex>
                      </MenuButton>
                    </Link>
                </Menu>
            </Flex>
            
        </Flex>
        
    );
}
