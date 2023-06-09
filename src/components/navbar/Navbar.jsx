// import { ReactNode } from "react"
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
} from "@chakra-ui/react"
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons"
import TheYellow from "../../assets/TheYellowTherapist.png"
import { Link } from "react-router-dom"

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        bg={"white"}
        px={4}
        // py={3}
        shadow={"md"}
        zIndex={1}
        position="fixed"
        width={"100%"}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"lg"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Image src={TheYellow} width="230px" />
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Link to={"/"}>Home</Link>
              <Link>Therapist</Link>
              <Link>TYTFS</Link>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <Avatar
                  size={"md"}
                  src={
                    "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                  }
                />
              </MenuButton>
              <MenuList border={"none"}>
                <MenuItem>My Profile</MenuItem>
                <Link to={"/login"}>
                  <MenuItem>Sign In</MenuItem>
                </Link>
                <MenuItem>Sign Out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link>Dashboard</Link>
              <Link>Projects</Link>
              <Link>Team</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

export default Navbar
