import { NextPage } from 'next';
import { chakra, Text } from '@chakra-ui/react';
import { Layout } from '../components/templates/layout';

const Portfolio: NextPage = () => {
  return (
    <Layout>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={5} fontWeight={'bold'}>
        Portfolio
      </chakra.h1>
      <Text textAlign={'center'} fontWeight={600} color={'gray.500'} mb={4}>
        現在準備中です
      </Text>
    </Layout>
  );
}
export default Portfolio;