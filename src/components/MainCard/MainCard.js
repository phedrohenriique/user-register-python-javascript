import React from 'react';
import {
  Box,
  Text,
  Button,
  useControllableState,
} from '@chakra-ui/react';
import react from 'react';

export default function MainCard() {

  let [number, setValue] = react.useState(0)
  let [internalValue, setInternalValue] = useControllableState({ number, onChange: setValue })
  //let number = 0;

  function numberIncrease() {
    setInternalValue(number + 1);
    console.log(number)
  }

  function numberReset() {
    setInternalValue(0);
    console.log('number reseted')
  }

  return (
    <Box backgroundColor='blue.200' display='flex' flexDirection='column' alignItems='center' width='100%' heigth='auto'>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        width={200}
        height={300}
        justifyContent='space-around'
        borderRadius='5px'
        backgroundColor='blue.400'>
        <Button onClick={numberIncrease}>Click +</Button>
        <Button backgroundColor='red.400' onClick={numberReset}>Reset</Button>
        <Text>First Web Application</Text>
        <Text fontSize='2xl'>{number}</Text>
        <Button>Next Route!</Button>
      </Box>
    </Box>

  )
}