import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
		return (
				<Layout title="Abea">
						<Container>
								<Title>
										Abea <Badge>2020</Badge>
								</Title>
								<P>
										A jewelery Ecommerce
								</P>
								<List ml={4} my={4}>
								<ListItem>
										<Meta>Website</Meta>
										<Link href="http://andradebalear.es/" target="_blank">http://andradebalear.es/
												<ExternalLinkIcon mx="2px" />
										</Link>
								</ListItem>
										</List>
						</Container>
			</Layout>
		)
}

export default Work	
