import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'
import thumbKeke from '../public/images/works/keke_eyecatch.jpeg'
import thumbAbea from '../public/images/works/abea_logo.png'

const Works = () => {
return (
		<Layout>
		<Container>
				<Heading as="h3" fontSize={20} mb={4}>
						Works
				</Heading>
				<SimpleGrid columns={[1, 1, 2]} gap={6}>
						<Section>
								<WorkGridItem id="kekebisuteria" title="KEKE" thumbnail={thumbKeke}>
										KEKE is a jewelery ecommerce website prepared to sell products with a admin panel to manage sells & analytics.
								</WorkGridItem>
						</Section>
						<Section>
								<WorkGridItem id="abea" title="ABEA" thumbnail={thumbAbea}>
										Abea is an informative website about Andrade&apos;s illness from Mallorca, Spain.
								</WorkGridItem>
						</Section>
				</SimpleGrid>
		</Container>
				</Layout>
				)
}

export default Works
