import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react"

const Faq = () => {
  const question = [
    {
      ques: "Yellow therapist reminds me of yellow journalists, why yellow? ",
      answ: "As you could guess, we get that a lot. But we chose yellow because yellow is famously the happiest color, yellow is the symbol of happiness. So the therapists work here are yellow therapists in the best possible way, far from yellow journalists. So, no worries. Let's spread happiness.  ",
    },
    {
      ques: "This web design makes me sad, why is it so dull? Or, I don't like the design. Or, did you not pay your web designer?",
      answ: "We are really sorry that you felt that way. But to assure you, this is not our final design. We tend to bring the platform to the public as fast as possible, so we had no choice but to find perfection in the imperfect, just for now. And we are working relentlessly to make the platform better and better. Thanks for being with us.",
    },
  ]
  return (
    <Box paddingTop={"15px"} p={5}>
      <Text align={"center"}>Frequently Ask Question:</Text>
      {question.map((val) => (
        <Accordion allowToggle border="white">
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#ffcb02" }}>
                <Box as="span" flex="1" textAlign="left">
                  {val.ques}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>{val.answ}</AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}
    </Box>
  )
}

export default Faq
