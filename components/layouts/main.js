import Head from "next/head";
import Navbar from '../navbar'
import NoSsr from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import House from '../house'
const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
                <title>Telmo Beroiz - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
						{children}	
            </Container>
        </Box>
		)
}
export default Main
