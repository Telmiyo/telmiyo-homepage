import NextLink from 'next/link'
import {
	Container,
	Box,
	Heading,
	Avatar,
	useColorModeValue,
	Button,
  SimpleGrid,
		Grid,
  Badge,
  List,
  Link,
  ListItem,
  UnorderedList,
  Icon
} from "@chakra-ui/react"
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import GridItem from '../components/grid-item'
import  { 
		IoLogoTwitter,
		IoLogoGithub,
		IoLogoLinkedin

}from 'react-icons/io5'

const Page = () => {
	return (<Layout>
		<Container>
			<Box
				borderRadius="lg"
				bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
				p={3}
				mb={6}
				align="center"
			>
				Hello, I&apos;m a video game student from the Basque Country
			</Box>
			<Box display={{ md: 'flex' }}>
				<Box flexGrow={1}>
					<Heading as="h2" variant="page-title">
						Telmo Beroiz
					</Heading>
					<p>Videogame Developer ( Student / Developer / Designer )</p>
				</Box>
				<Box
					flexShrink={0}
					mt={{ base: 4, md: 0 }}
					ml={{ md: 6 }}
					align="center"
				>
					<Avatar
						name='Telmo Beroiz'
						src="/images/telmo.jpg"
						size='xl'
						showBorder="true"
						borderStyle="solid"
						borderColor="whiteAlpha.800"
						align="center"
						borderWidth={3}
						display="inline-block"
					/>
				</Box>
			</Box>
			<Section delay={0.1}>
				<Heading as="h3" variant="section-title">
					➵	Work
				</Heading>
				<Paragraph>Telmo is a 21-year-old motivated to build digital things based on his own creativity. He likes to learn on his own, to look for new ways to get that creativity out but he also likes to share his ideas with other people and work with them in a way of learning and sharing. On this website you will find his professional career. It will show you a bit about his knowledge, interests and his current projects.</Paragraph>
				<Box align="center" my={4}>
					<NextLink href="/works">
						<Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
							My Portfolio
						</Button>
					</NextLink>
				</Box>
			</Section>

			<Section delay={0.2}>
				<Heading as="h3" variant="section-title">
					➵ Bio
				</Heading>
				<BioSection>
					<BioYear>2001</BioYear>
					Born in Zarautz, Basque Country.
				</BioSection>
				<BioSection>
					<BioYear>2018</BioYear>
					Video Game Programming Level 1: 2D | DigiPen Institute of Technology Europe - Bilbao						</BioSection>
				<BioSection>
					<BioYear>2018</BioYear>
					2D Video game Programming Level 2: 2D | DigiPen Institute of Technology Europe - Bilbao
				</BioSection>
				<BioSection>
					<BioYear>2019 to present</BioYear>
					Started a Bachelor Degree in Video Game Design and Developement in Barcelona
				</BioSection>
			</Section>
		<Section>
				<Heading as="h3" variant="section-title">
				 Coding Languages
				</Heading>
				<span>Languages:</span>
		<UnorderedList mb={3}>
		 <ListItem>c++</ListItem>
		<ListItem>c#</ListItem>
		<ListItem>dart</ListItem>
		<ListItem>Java</ListItem>
		<ListItem>JavaScript</ListItem>
		</UnorderedList>
				<span>Idle&apos;s:</span>
		<UnorderedList>
						<ListItem>Visual Studio / Vs Code</ListItem>
						<ListItem>IntelliJ</ListItem>
						<ListItem>Eclipse</ListItem>
						<ListItem>Unity</ListItem>
						<ListItem>Vim / Nvim</ListItem>
			</UnorderedList>
							
				</Section>

		<Section delay={0.3}>
				<Heading as="h3" variant="section-title">
				Social Media		
				</Heading>
				<List>
						<ListItem>
								<Link href="https://github.com/telmiyo" target="_blank">
										<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>
												@Telmiyo
										</Button>
								</Link>
						</ListItem>
						<ListItem> 
								<Link href="https://twitter.com/BeroizTelmo" target="_blank">
								<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoTwitter}/>}>
										@t3lmo
										</Button>
								</Link>
						</ListItem>
						<ListItem>
								<Link href="https://www.linkedin.com/in/telmo-beroiz-321716231/" target="_blank">
										<Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin}/>}>
										Telmo Beroiz
												</Button>
								</Link>
						</ListItem>
				</List>
		</Section>
		</Container>
	</Layout>
	)
}

export default Page
