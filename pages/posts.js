import { Container, Box, Heading, Link,  } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Posts = () => {

		return(
				<Layout title="Posts">
						<Container>
								<Heading as="h3">Posts</Heading>
								<Box align="center" mt={10} mb={10}>
										Currently working on it, it will take a while, check
								<Link href="https://medium.com/@telmiyodev" ml={2}>Medium
										<ExternalLinkIcon  mx={2}/></Link>
										instead.
										</Box>
								</Container>
						</Layout>
		)
}
export default Posts
