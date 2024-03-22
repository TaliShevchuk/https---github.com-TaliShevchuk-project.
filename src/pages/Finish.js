import { Box, Button, Heading } from '@chakra-ui/react'
import React from 'react'
import { useQuestionStore, useScoreStore } from "../Controlls/ZustandStore.js";

const Finish = ({Next}) => {

  const { score } = useScoreStore();
  return (
    <Box>
      <Heading>Your Score Is :</Heading>
      <Heading textAlign="center" >{score}</Heading>
      <Button onClick={Next} borderRadius={10} minHeight={10} maxWidth={200} minWidth={200} colorScheme='teal' variant='solid'>Reset Game</Button>

    </Box>
  )
}

export default Finish