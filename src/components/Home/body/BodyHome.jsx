import React from "react"
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Image,
} from "@chakra-ui/react"
import ContentFeatures from "../features/ContentFeatures"
import ContentPrice from "../price/ContentPrice"
import PaymentMethod from "../payment/PaymentMethod"
import Faq from "../faq/Faq"

const BodyHomepage = () => {
  return (
    <>
      <Stack direction={{ base: "column", md: "row" }} paddingTop="105px">
        <Flex padding={5} align={"center"} justify={"center"}>
          <Stack spacing={8} w={"full"} maxW={"container.xl"}>
            <Heading
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
              lineHeight={"110%"}
              textAlign={{ sm: "center", md: "start" }}
            >
              The {""}
              <Text as={"span"} color="#ffcb02">
                yellowtherapist
              </Text>
            </Heading>
            <Text color={"gray.500"} maxW={"3xl"}>
              The Yellow Therapist is an integrated platform that aspires to
              uplift the existing state of mental health services of Bangladesh.
              Removing as many obstacles as possible between the one who needs
              help and the one who can provide- is what we are striving for.
            </Text>
            <Text
              fontFamily={"sans-serif"}
              fontSize={{ md: "30px", sm: "25px" }}
              textAlign={{ sm: "center", md: "start" }}
            >
              What are you looking for ?{" "}
            </Text>
            <Stack
              spacing={6}
              direction={"row"}
              justifyContent={{ sm: "center", md: "start" }}
            >
              <Button
                rounded={"full"}
                px={6}
                colorScheme={"yellow"}
                bg="#ffcb02"
                _hover={{ bg: "#ffc001" }}
              >
                I need a therapist
              </Button>
              <Button rounded={"full"} px={6}>
                I am a therapist
              </Button>
            </Stack>
          </Stack>
        </Flex>

        <Flex flex={1}>
          <Image
            alt={"Login Image"}
            objectFit={"cover"}
            src={
              "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            }
          />
        </Flex>
      </Stack>
      <ContentFeatures />
      <ContentPrice />
      <Faq />
      <PaymentMethod />
    </>
  )
}

export default BodyHomepage
