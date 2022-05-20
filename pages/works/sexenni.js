import { Container, Badge, List, ListItem, Link } from '@chakra-ui/react'
import { Title, Meta, WorkImage } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'


const Work = () => {
    return (
        <Layout title="Sexenni">
            <Container>
                <Title>
                    Sexenni <Badge> 2023 </Badge>
                </Title>
                <P>
                This minimalist website is about the musical band formed by a group young Catalans from Lleida. It is the first iteration of the web. It is still in development.
                </P>
                <List ml={4} my={4}>
					<ListItem>
						<Meta>Website</Meta>
						<Link href="https://sexenni.lol/" target="_blank">https://sexenni.lol/
							<ExternalLinkIcon mx="2px" />
						</Link>
					</ListItem>
					<ListItem>
						<Meta>Tools</Meta>
						<span>React, NextJS, ChakraUI</span>
					</ListItem>
					<ListItem>
						<Meta>Instagram</Meta>
						<Link href="https://www.instagram.com/sexenni/" target="_blank">Instagram<ExternalLinkIcon mx="2px" /></Link>
					</ListItem>
					<ListItem>
						<Meta>Facebook</Meta>
						<Link href="https://www.twitter.com/sexenni1/" target="_blank">Twitter<ExternalLinkIcon mx="2px" /></Link>
					</ListItem>
				</List>

                <WorkImage src="/images/works/sexenni_website.jfif" alt='sexenni-website' />
            </Container>
        </Layout>
    )
}

export default Work