import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import {Container, Heading, Link} from '@chakra-ui/react'

const Posts = () => (
	<Layout title="Posts">
		<Heading as='h3' fontSize={20} mb={4}>Posts</Heading>
		</Layout>
)

export default Posts
