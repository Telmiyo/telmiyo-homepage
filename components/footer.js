import { Box, Link } from '@chakra-ui/react'

const Footer = () => {
	return (
		<Box align="center" opacity={0.4} fontSize="sm">
			&copy; {new Date().getFullYear()} Telmo Beroiz. All rights Reserved.<Link href="https://www.youtube.com/watch?v=bSMZgXzC9AA&t=190s" target="_blank"> Design By Takuya Matsuyama.</Link>
		</Box>
	)
}

export default Footer
