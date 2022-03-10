import { Box, Input, InputGroup, InputLeftAddon, Wrap, Stack } from '@chakra-ui/react'
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
        height='fit-content' 
        backgroundColor='blue.400'>
            <InputGroup>
                <InputLeftAddon width='25%' children='Username'></InputLeftAddon>
                <Input></Input>
            </InputGroup>
            <InputGroup>
                <InputLeftAddon width='25%' children='Password'></InputLeftAddon>
                <Input></Input>
            </InputGroup>
        </Stack>
        </Box>
    )
}
