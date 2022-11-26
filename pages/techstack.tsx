import { NextPage } from 'next';
import { Box, chakra, Progress, SimpleGrid, Text } from '@chakra-ui/react';
import { Layout } from '../components/templates/layout';

function SubTitle(props: any) {
  const { children } = props;
  return (
    <chakra.h2 textAlign={'left'} fontSize={'2xl'} pt={10} pb={5} fontWeight={'bold'}>
      {children}
    </chakra.h2>
  );
}

function SkillBox(props: any) {
  const { children } = props;
  return (
    <Box w={'full'} boxShadow={'2xl'} rounded={'lg'} p={6} textAlign={'left'}>
      {children}
    </Box>
  );
}

function StatusBar(props: any) {
  const { title, value, exp } = props;
  let color = ""
  if (exp) {
    color = "red.500"
  }
  return (
    <Box>
      <chakra.h3 fontWeight={'medium'} fontSize={'md'} color={color}>{title}</chakra.h3>
      <Progress size='xs' value={value}/>
    </Box>
  );
}

const TechStack: NextPage = () => {
  return (
    <Layout>
      <chakra.h1 textAlign={'center'} fontSize={'4xl'} py={5} fontWeight={'bold'}>
        Skill & Technologies
      </chakra.h1>
      <Text textAlign={'center'} fontWeight={600} color={'gray.500'} mb={4}>
        個人・プロジェクトで使用経験のある技術一覧です。実務で使用したものは赤字になっています。
      </Text>
      <SubTitle>Frontend</SubTitle>
      <SkillBox>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
          <StatusBar title={'HTML'} value={90} exp={true}/>
          <StatusBar title={'CSS'} value={80} exp={true}/>
          <StatusBar title={'JavaScript'} value={60} exp={true}/>
          <StatusBar title={'TypeScript'} value={25} exp={false}/>
          <StatusBar title={'React'} value={40} exp={false}/>
          <StatusBar title={'Next.js'} value={25} exp={false}/>
          <StatusBar title={'Hexo'} value={10} exp={false}/>
          <StatusBar title={'JSP'} value={60} exp={true}/>
        </SimpleGrid>
      </SkillBox>
      <SubTitle>Backend</SubTitle>
      <SkillBox>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
          <StatusBar title={'C'} value={30} exp={false}/>
          <StatusBar title={'Java'} value={90} exp={true}/>
          <StatusBar title={'PHP'} value={60} exp={false}/>
          <StatusBar title={'Python'} value={40} exp={false}/>
          <StatusBar title={'Kotlin'} value={40} exp={false}/>
          <StatusBar title={'Struts'} value={60} exp={true}/>
          <StatusBar title={'Spring Boot'} value={60} exp={true}/>
          <StatusBar title={'Django'} value={30} exp={false}/>
          <StatusBar title={'Node.js'} value={20} exp={false}/>
          <StatusBar title={'Express'} value={10} exp={false}/>
          <StatusBar title={'Shell'} value={40} exp={true}/>
          <StatusBar title={'PEGA'} value={20} exp={true}/>
        </SimpleGrid>
      </SkillBox>
      <SubTitle>Database</SubTitle>
      <SkillBox>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
          <StatusBar title={'Oracle Database'} value={80} exp={true}/>
          <StatusBar title={'MySQL'} value={60} exp={false}/>
          <StatusBar title={'Sqlite3'} value={30} exp={false}/>
          <StatusBar title={'redis'} value={20} exp={false}/>
          <StatusBar title={'Microsoft SQL Server'} value={60} exp={true}/>
          <StatusBar title={'MyBatis3'} value={30} exp={false}/>
        </SimpleGrid>
      </SkillBox>
      <SubTitle>DevOps</SubTitle>
      <SkillBox>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
          <StatusBar title={'AWS WorkSpace'} value={60} exp={true}/>
          <StatusBar title={'Docker'} value={30} exp={false}/>
          <StatusBar title={'Vagrant'} value={30} exp={true}/>
          <StatusBar title={'Linux'} value={70} exp={true}/>
        </SimpleGrid>
      </SkillBox>
      <SubTitle>Version Management Tools</SubTitle>
      <SkillBox>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
          <StatusBar title={'Git / Github'} value={80} exp={true}/>
          <StatusBar title={'SVN'} value={40} exp={true}/>
          <StatusBar title={'AWS CodeCommit'} value={60} exp={true}/>
          <StatusBar title={'SourceTree'} value={70} exp={true}/>
          <StatusBar title={'Backlog'} value={70} exp={true}/>
        </SimpleGrid>
      </SkillBox>
      <SubTitle>Communication Tools</SubTitle>
      <SkillBox>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
          <StatusBar title={'Slack'} value={80} exp={true}/>
          <StatusBar title={'Microsoft Teams'} value={80} exp={true}/>
          <StatusBar title={'Discord'} value={50} exp={true}/>
          <StatusBar title={'Matter Most'} value={40} exp={true}/>
          <StatusBar title={'Zoom'} value={50} exp={true}/>
        </SimpleGrid>
      </SkillBox>
      <SubTitle>Software & Other</SubTitle>
      <SkillBox>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
          <StatusBar title={'AWS S3'} value={60} exp={true}/>
          <StatusBar title={'AWS Cloud9'} value={30} exp={true}/>
          <StatusBar title={'Eclipse / STS'} value={90} exp={true}/>
          <StatusBar title={'Visual Studio Code'} value={90} exp={true}/>
          <StatusBar title={'CodeSandbox'} value={90} exp={false}/>
          <StatusBar title={'Swagger'} value={90} exp={true}/>
          <StatusBar title={'JBoss'} value={70} exp={true}/>
          <StatusBar title={'TeraTerm'} value={70} exp={true}/>
          <StatusBar title={'WinSCP'} value={70} exp={true}/>
          <StatusBar title={'JUnit'} value={50} exp={true}/>
          <StatusBar title={'Tomcat'} value={60} exp={true}/>
          <StatusBar title={'SQL Developer'} value={70} exp={true}/>
          <StatusBar title={'A5M2'} value={80} exp={true}/>
          <StatusBar title={'npm'} value={70} exp={true}/>
          <StatusBar title={'node'} value={40} exp={true}/>
          <StatusBar title={'Postman'} value={40} exp={true}/>
        </SimpleGrid>
      </SkillBox>
    </Layout>
  );
}
export default TechStack;