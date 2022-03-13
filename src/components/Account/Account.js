import { 
    Box, 
    Input, 
    InputGroup, 
    InputLeftAddon, 
    Wrap, 
    Stack,
    Text,
    Button
 } from '@chakra-ui/react'
import React from 'react'

export default function Account() {
    return (
        <Box 
        width='100%'
        display='flex'
        flexDirection='column'
        alignItems='center'>
        <Stack 
        spacing={4} 
        width='md' 
        height='md'
        backgroundColor='blue.400'
        justifyContent='flex-start'
        display='flex'>
            <Text>e-mail</Text>
            <InputGroup width='-webkit-fit-content'>
                <Input></Input>
            </InputGroup>
            <Text>password</Text>
            <InputGroup width='-webkit-fit-content'>
                <Input></Input>
            </InputGroup>
            <Button width='-webkit-fit-content'>Log In</Button>
        </Stack>
        </Box>
    )
}
