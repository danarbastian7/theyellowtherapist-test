import {
  Box,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react"

const PaymentMethod = () => {
  return (
    <Box
      //   borderBlockEnd={"2px solid gray"}
      borderBlockStart={"2px solid gray"}
      p={5}
    >
      <Grid gridTemplateColumns={{ md: "200px 1fr", base: "2fr" }}>
        <GridItem textAlign={{ base: "center", md: "start" }}>
          <Text fontSize={"20px"} fontFamily="sans-serif" fontStyle={"italic"}>
            Payment method :
          </Text>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdXzrx-5EcrYKXtgKyQFnzRmYFCEle6Z0mypCZWltwnN4t_uG6"
            w={{ base: "90px", md: "95px" }}
          />
        </GridItem>
        <GridItem grid-gridAutoRows={"1fr"}>
          <HStack marginLeft={"5px"}>
            <Image
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRWJf2mfYaQEkW4I8rZtySMJYW_nOkIEJugGYLeMfUYw66ZzNb2"
              w={{ base: "50px", md: "60px" }}
            />
            <Image
              src="https://img.icons8.com/external-flat-icons-inmotus-design/256/external-bank-payment-methods-flat-icons-inmotus-design.png"
              w={{ base: "50px", md: "60px" }}
            />
            <Image
              src="https://img.icons8.com/color/256/mastercard-logo.png"
              w={{ base: "50px", md: "60px" }}
            />
            <Image
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ_WX_-Je1uImLTRubJh6z2DFrQjS_gKBJPX324Qd43PR4xa6B8"
              w={{ base: "50px", md: "60px" }}
            />
            <Image
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ2z7I7-Q3qu3lk_U-8jsvEA7W-LspqcyIuvEW-rnkv68jGTvz6"
              w={{ base: "50px", md: "75px" }}
            />
            <Image
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSl5avBCdc-SYE4jH6T4K7zsT4UA1OIWRIjhyzZLwk2ATpHU1oO"
              w={{ base: "50px", md: "75px" }}
            />
            <Image
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRO2Qs8yON90z8dm_ReEyeCVrTB119XUxBAiv0QsrKim_YarVxd"
              w={{ base: "50px", md: "75px" }}
            />
            <Image
              src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQPaIAyDB88F-O4WAqbBqDTtwqeQ7ufOVbq6ywRpWc4_CkDD4Ik"
              w={{ base: "50px", md: "75px" }}
            />
            <Image
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTjvuAnDNVbxjH3iWXO91R4TV6COrot66DRa9pMObpxBwPlIMiF"
              w={{ base: "50px", md: "75px" }}
            />
          </HStack>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default PaymentMethod
