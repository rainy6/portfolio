import { Box, Center, ChakraProvider, Container, Flex, Stack, Wrap } from "@chakra-ui/react"
import { theme } from "../../theme/theme"
import Header from "../layout/header"

export const Layout = (props: any) => {
    const { children } = props;
    return (
        <ChakraProvider theme={theme}>
            <Header/>
            <Box w={800} pt={20} pb={20} m={'auto'}>
                {children}
            </Box>
        </ChakraProvider>
    )
}