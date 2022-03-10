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
                    <Link to={routes.home}><Button>Home</Button></Link>
                    <Link to={routes.login}><Button>Log In</Button></Link>
                    <Link to={routes.signup}><Button>Sign Up</Button></Link>
                </Box>
            </Box>
        </>
    )
}
