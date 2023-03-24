import {
  Box,
  Container,
  Stack,
  Text,
  chakra,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react"
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa"

const Footer = () => {
  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    )
  }

  return (
    <Box
      borderTopWidth={1}
      borderStyle={"solid"}
      borderColor={useColorModeValue("gray.200", "gray.700")}
      direction={{ base: "column", md: "row" }}
      spacing={4}
      justify={{ md: "space-between" }}
      py={4}
      p={5}
      as={Stack}
    >
      <Text>© The Yellow Therapist. All rights reserved</Text>
      <Stack direction={"row"} spacing={6}>
        <SocialButton label={"Twitter"} href={"#"}>
          <FaTwitter />
        </SocialButton>
        <SocialButton label={"YouTube"} href={"#"}>
          <FaYoutube />
        </SocialButton>
        <SocialButton label={"Instagram"} href={"#"}>
          <FaInstagram />
        </SocialButton>
      </Stack>
    </Box>
  )
}

export default Footer
