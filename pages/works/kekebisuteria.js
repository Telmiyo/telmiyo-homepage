import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta, WorkImage } from '../../components/work'
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
										KEKE is a jewelery ecommerce website prepared to sell products with a admin panel to manage sells & analytics.
								</P>
								<List ml={4} my={4}>
								<ListItem>
										<Meta>Website</Meta>
										<Link href="https://kekebisuteria.com/" target="_blank">https://kekebisuteria.com/
												<ExternalLinkIcon mx="2px" />
										</Link>
								</ListItem>
								<ListItem>
										<Meta>Tools</Meta>
										<span>Wordpress, Elementor Pro</span>
								</ListItem>
										<ListItem>
										<Meta>Instagram</Meta>
												<Link href="https://www.instagram.com/kekebisuteria/">Instagram<ExternalLinkIcon mx="2px"/></Link>
										</ListItem>
										<ListItem>
												<Meta>Facebook</Meta>
												<Link href="https://www.facebook.com/KEKEBISU/">Facebook<ExternalLinkIcon  mx="2px"/></Link>
												</ListItem>
										</List>
								
								<WorkImage src="/images/works/keke_eyecatch.jpeg" alt='Keke Bisuteria' />
								
								
						</Container>
				</Layout>
		)
}

export default Work
