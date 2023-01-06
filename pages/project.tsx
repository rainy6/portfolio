
import type { NextPage } from 'next'
import { Layout } from "../components/templates/layout"
import { Heading, Avatar, Box, Center, Text, Stack, Link, Badge, chakra, UnorderedList, ListItem } from '@chakra-ui/react';

const Project: NextPage = () => {
  return (
    <Layout>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={5} fontWeight={'bold'}>
        Project
      </chakra.h1>
      <Text textAlign={'center'} fontWeight={600} color={'gray.500'} mb={4}>
        現在準備中です
      </Text>
    </Layout>
  )
}
export default Project;