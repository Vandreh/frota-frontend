import React, { useState } from 'react';
import { Box, Flex, Link, Heading, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex maxW="1200px" mx="auto" justify="space-between" align="center">
        <Flex align="center">
          <Link as={NavLink} to="/" px={2} color="white" _hover={{backgroundColor: '#2C7A7B', borderRadius: '5px',textDecoration: 'none' }}>
            <Heading as="h1" size="lg" color="white">Gerenciamento de Frota</Heading>
          </Link>
        </Flex>

        {/* Botão de Menu para telas menores que 900px */}
        <Box display={{ base: 'block', md: 'none' }}>
          <Menu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Menu"
              size="md"
              color="white"
              _hover={{ backgroundColor: '#2C7A7B', borderRadius: '5px' }}
              onClick={toggleMenu}
            />
            <MenuList>
              <MenuItem as={NavLink} to="/caminhoes" onClick={() => setIsOpen(false)} color="teal.500">Caminhões</MenuItem>
              <MenuItem as={NavLink} to="/entregas" onClick={() => setIsOpen(false)} color="teal.500">Entregas</MenuItem>
              <MenuItem as={NavLink} to="/motoristas" onClick={() => setIsOpen(false)} color="teal.500">Motoristas</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        {/* Links da Navbar para telas maiores que 900px */}
        <Flex display={{ base: 'none', md: 'flex' }}>
          <Link as={NavLink} to="/caminhoes" px={2} color="white" _hover={{backgroundColor: '#2C7A7B', borderRadius: '5px', textDecoration: 'none' }}>Caminhões</Link>
          <Link as={NavLink} to="/entregas" px={2} color="white" _hover={{backgroundColor: '#2C7A7B', borderRadius: '5px', textDecoration: 'none' }}>Entregas</Link>
          <Link as={NavLink} to="/motoristas" px={2} color="white" _hover={{backgroundColor: '#2C7A7B', borderRadius: '5px', textDecoration: 'none' }}>Motoristas</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
