import { Box } from '@chakra-ui/react'

const Footer = () => {
		return(
				<Box align="center" opacity={0.4} fontSize="sm">
				&copy; {new Date().getFullYear()} Telmo Beroiz. All rights Reserved. Design By Takuya Matsuyama.
				</Box>
		)
}

export default Footer
