import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
		return (
				<Layout title="Keke">
						<Container>
								<Title>
										Keke <Badge>2021</Badge>
								</Title>
								<P>
										KEKE is a jewelery ecommerce website.
								</P>
								<List ml={4} my={4}>
								<ListItem>
										<Meta>Website</Meta>
										<Link href="https://kekebisuteria.com/" target="_blank">https://kekebisuteria.com/
												<ExternalLinkIcon mx="2px" />
										</Link>
								</ListItem>
								<ListItem>
										<Meta/>
								</ListItem>
										</List>
						</Container>
				</Layout>
		)
}

export default Work
