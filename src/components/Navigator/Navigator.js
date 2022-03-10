import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { routes } from '../../routes'

export default function Navigator() {
    return (
        <>
            <Box
                width='100%'
                display='flex'
                flexDirection='row'
                height='60px'
                backgroundColor='blue.400'
                justifyContent='flex-start'>
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-around'
                    backgroundColor='blue.400'
                    alignItems='center'
                    width='50%'
                    borderRadius='5px'
                >
                    <Button><Link to={routes.home}>Home</Link></Button>
                    <Button><Link to={routes.login}>Log In</Link></Button>
                    <Button><Link to={routes.signup}>Sign Up</Link></Button>
                </Box>
            </Box>
        </>
    )
}
