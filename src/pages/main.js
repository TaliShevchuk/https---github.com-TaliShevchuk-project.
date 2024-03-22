import { Box, Button, Center, Heading, SimpleGrid } from '@chakra-ui/react'
import React, { useState } from 'react'
import axios from 'axios'
import {useQuestionStore, useScoreStore} from '../Controlls/ZustandStore.js'
const Main = ({Next}) => {
    const [load, isLoading] = useState(false)
    const {setQuestions,clearQuestions} = useQuestionStore()
    const {resetPoint} = useScoreStore()
    const Load = async() =>{
        isLoading(true)
        await axios.get('https://opentdb.com/api.php?amount=20&category=18').then(Response => {
            setQuestions(Response.data.results)
            isLoading(false)
            resetPoint()
            Next()
        })
        .catch(er=>{
            console.log(er)
            isLoading(false)
        })
    }


  return (
    
    <Box padding='4' bg='withe' width= '900px' minHeight='500' borderRadius={20}>
        <SimpleGrid column={1} spacingX={20} spacingY={10}>
            <Box padding={2} textAlign='center'  borderRadius={50} bg="grey" height="400px">
                <Heading>press start to start the starting of the start of the game start</Heading>
            </Box>
            <Center>
            <Button onClick={e=>{Load()}} borderRadius={20} minHeight={20} maxWidth={200} minWidth={200} isLoading={load} loadingText="Loading" colorScheme='teal' variant='solid'>
                Start
            </Button>
            </Center>
        </SimpleGrid>
    </Box>

  )
}

export default Main