import { ReactElement } from "react"
import {
  Box,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  Flex,
  Center,
  Grid,
} from "@chakra-ui/react"
import { FcAssistant, FcLike, FcCustomerSupport } from "react-icons/fc"

const ContentFeatures = () => {
  const Feature = ({ title, text, icon }) => {
    return (
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Flex
          w={20}
          h={20}
          color={"white"}
          rounded={"full"}
          bg={"gray.100"}
          mb={1}
          alignItems={"center"}
          justifyContent={"center"}
          m="auto"
        >
          {icon}
        </Flex>
        <Flex flexDirection={"column"} justifyContent="center">
          <Text fontWeight={600} textAlign="center">
            {title}
          </Text>
          <Text color={"gray.600"}>{text}</Text>
        </Flex>
      </Stack>
    )
  }
  return (
    <Box p={5} marginTop="15px" bg="#ffcb02">
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcCustomerSupport} w={10} h={10} />}
          title={"A bridge between"}
          text={
            "A platform serving both of who seeks professional help for their mental well being and the professional therapists who are always ready to help. We're providing a smooth bridge between these two."
          }
        />
        <Feature
          icon={<Icon as={FcLike} w={10} h={10} />}
          title={"Those who need help"}
          text={
            "Something ails? Hey, seeking help is the most humane thing we can do. It's not always easy on our own. This is the place where you get the proper help you need."
          }
        />
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={"Those who can provide"}
          text={
            "Are you a professional therapist? We're providing a structured platform to reach out to those who need your help. An independant platform to work on your own schedule and demand."
          }
        />
      </SimpleGrid>
    </Box>
  )
}

export default ContentFeatures
