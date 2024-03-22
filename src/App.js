import React, { useState } from 'react'
import { ChakraProvider, Container } from '@chakra-ui/react'
import Main from '../src/pages/main'
import theme from './Controlls/theme'
import Game from './pages/Game.js'
import Finish from './pages/Finish.js'
export default function App() {
  const [pagenum,setPageNum] = useState(0)
  
  const Next = () =>{
    if(pagenum === 0){
      setPageNum(1)
    }
    else if( pagenum === 1){
      setPageNum(2)
    }
    else{
      setPageNum(0)
    }
  }

  return (
    <ChakraProvider theme={theme}>
      
      <Container  marginTop='100' centerContent >
          {pagenum===0 ? <Main Next={Next}></Main> : <>{pagenum===1? <Game Next={Next}></Game> : <>{pagenum===2 ? <Finish Next={Next}></Finish> : <Main Next={Next}></Main>}</>}</>}
      </Container>
    
    </ChakraProvider>
  )
}

