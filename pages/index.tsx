
import type { NextPage } from 'next'
import { Layout } from "../components/templates/layout"
import { Heading, Avatar, Box, Center, Text, Stack, Link, Badge } from '@chakra-ui/react';

const Index: NextPage = () => {
  return (
    <Layout>
      <Heading>Profile</Heading>
      <Center pt={6}>
        <Box w={'full'} boxShadow={'2xl'} rounded={'lg'} p={6} textAlign={'center'}>
          <Avatar size={'2xl'} m={4} pos={'relative'}
          src={"https://avatars.githubusercontent.com/u/116582524?s=400&u=94e11c02de7e7875cc2a23f00b39537150977e01&v=4"}
          />
          <Heading fontSize={'4xl'} fontFamily={'body'}>
            Hi 👋, I&#39;m Ryosei
          </Heading>
          <Text fontWeight={600} color={'gray.500'} mb={4}>
            Github: @rainy6
          </Text>
          <Text
          textAlign={'center'}
          px={3} pb={5}>
            東京でバックエンドエンジニアとして働いています。<br/>たまにフロントもやります。{' '}
          <Link href={'https://github.com/rainy6'} color={'blue.400'}>
          @rainy6
          </Link>{' '}
          </Text>
          <Stack direction='row' alignItems={"center"} justifyContent={'center'} mb={6}>
            <Text color={'cyan.500'}>得意な技術：</Text>
            <Badge>Java</Badge>
            <Badge colorScheme='green'>Spring Boot</Badge>
            <Badge colorScheme='blue'>TypeScript</Badge>
            <Badge colorScheme='purple'>Go</Badge>
          </Stack>
        </Box>
      </Center>
      <Box boxShadow={'2xl'} rounded={'lg'} p={20} m={10}>
        <Text textAlign={'left'} fontSize={'xl'} fontWeight={'bold'}>資格：</Text>
        <Text textAlign={'right'}>情報セキュリティマネジメント試験 合格</Text>
        <Text textAlign={'right'}>応用情報技術者試験 合格</Text>
        <Text textAlign={'left'} fontSize={'xl'} fontWeight={'bold'} pt={5}>最終学歴:</Text>
        <Text textAlign={'right'}>東京電子高度情報システム科(4年制) 卒業</Text>
      </Box>
    </Layout>
  )
}
export default Index;