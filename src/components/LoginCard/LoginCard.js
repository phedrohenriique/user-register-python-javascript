import {
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftAddon,
    Text
} from '@chakra-ui/react'
import {
    AtSignIcon,
    CheckIcon,
    EditIcon,
} from '@chakra-ui/icons'
import {
    AtSymbolIcon,
    AnnotationIcon
} from '@heroicons/react/outline'
import React from 'react'
import { Link } from 'react-router-dom'

export default function LoginCard() {

    const inputProps = {
        width: '',
        height: '',
    }

    const textProps = {
        color: '',
        fontSize: '',
    }

    function resetInput(){
    }

    const changeBgColour = (event) => {
        if (event.key == 'Enter') {
            console.log('the event is running')
        }
    }



    return (
        // alignItems put all direct children align self value, box can work as body with as='body prop' or just being declared the main div returning the items
        <Box display='flex' flexDirection='column' alignItems='center' bg='blue.400' textColor='white'>
            <Text colorScheme='blackAlpha' fontSize='4xl'>Welcome and Join !</Text>
            <Box

                width='sm'
                height='fit-content'
                border='1px solid'
                borderRadius='10px'
                display='flex' flexDirection='column' alignItems='center'
                _hover={{ bg: 'blue.700' }}
                gap='10px'
            >
                <Text fontSize='2xl'>Create Account</Text>
                <Box display='flex' flexDirection='column' alignItems='flex-start'>
                    <Text fontSize='xl'>User</Text>
                    <InputGroup width='xs'>
                        <InputLeftAddon width='25%' alignContent='center' justifyContent='center' children={<EditIcon color='GrayText'></EditIcon>}></InputLeftAddon>
                        <Input placeholder='user' />
                    </InputGroup>
                    <Text fontSize='xl'>Password</Text>
                    <InputGroup width='xs'>
                        <InputLeftAddon width='25%' alignContent='center' justifyContent='center' children={<EditIcon color='GrayText'></EditIcon>}></InputLeftAddon>
                        <Input placeholder='paassword' />
                    </InputGroup>
                    <Text fontSize='xl' v>CPF</Text>
                    <InputGroup width='xs'>
                        <InputLeftAddon width='25%' alignContent='center' justifyContent='center' children={<EditIcon color='GrayText'></EditIcon>}></InputLeftAddon>
                        <Input placeholder='cpf' />
                    </InputGroup>
                    <Text fontSize='xl'>e-mail</Text>
                    <InputGroup width='xs'>
                        <InputLeftAddon width='25%' alignContent='center' justifyContent='center' children={<AtSignIcon color='GrayText'></AtSignIcon>}></InputLeftAddon>
                        <Input placeholder='e-mail' />
                    </InputGroup>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' gap='10px'>
                    <Button colorScheme='blue' onClick={resetInput()}>Register</Button>
                    <Link to='/'>Read Terms of Use</Link>
                </Box>
            </Box>
            <Text fontSize='2xl'> or </Text>
            <Box
                width='sm'
                height='sm'
                border='1px solid'
                borderRadius='10px'
                _hover={{ bg: 'blue.700' }}
                display='flex' flexDirection='column' alignItems='center'
                gap='10px'>
                <Text fontSize='2xl'>Sign In with an existing Account</Text>
                <Box display='flex' flexDirection='column' alignItems='flex-start'>
                    <Text fontSize='xl'>User</Text>
                    <InputGroup width='xs'>
                        <InputLeftAddon width='25%' alignContent='center' justifyContent='center' children={<CheckIcon color='GrayText'></CheckIcon>}></InputLeftAddon>
                        <Input placeholder='user' />
                    </InputGroup>
                    <Text fontSize='xl'>Password</Text>
                    <InputGroup width='xs'>
                        <InputLeftAddon width='25%' alignContent='center' justifyContent='center' children={<CheckIcon color='GrayText'></CheckIcon>}></InputLeftAddon>
                        <Input placeholder='password' />
                    </InputGroup>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' justifyContent='space-around' gap='10px'>
                    <Button colorScheme='blue'>Sign in</Button>
                    <Link to='/'>Forgot your Password ?</Link>
                </Box>
            </Box>
        </Box>
    )
}
