import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { GridItem, WorkGridItem } from '../components/grid-item'
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
								KEKE is orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
								</WorkGridItem>
						</Section>
						<Section>
								<WorkGridItem id="abea" title="ABEA" thumbnail={thumbAbea}>
										Abea is orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
								</WorkGridItem>
						</Section>
				</SimpleGrid>
		</Container>
				</Layout>
				)
}

export default Works
