import { Container, Badge} from '@chakra-ui/react'
import { Title} from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'


const Work = () => {
		return (
				<Layout title="OnlyHeroes">
						<Container>
								<Title>
										OnlyHeroes <Badge> 2021 </Badge>
								</Title>
								<P>
										OnlyHeroes is a java made Minecraft Minigame Plugin.
								</P>
						</Container>
				</Layout>
		)
}

export default Work
