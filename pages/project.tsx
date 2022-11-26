
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
        私が携わったプロジェクトの一覧です。並びは最新順↑
      </Text>
      <Center pt={6}>
        <Box w={'full'} boxShadow={'2xl'} rounded={'lg'} p={6}>
          <Heading fontSize={'2xl'} fontFamily={'body'} textAlign={'center'}>
            予算管理システムの開発・保守
          </Heading>
          <Text fontWeight={600} color={'gray.500'} textAlign={'center'} pt={3} mb={4}>
            2022/4 ~
          </Text>
          <UnorderedList pl={100}>
            <ListItem fontWeight={'bold'}>案件内容</ListItem>
            <Text pb={3}>・社内で使用する予算管理システムの加機能開発・保守</Text>

            <ListItem fontWeight={'bold'}>担当業務</ListItem>
            <Text>・アジャイル開発によるプロジェクト遂行</Text>
            <Text>・担当箇所の追加機能(API)をバックエンドで実装する</Text>
            <Text>・テストコードの記述、JUnitによる自動テストを実施</Text>
            <Text>・結合テスト仕様書の新規作成</Text>
            <Text>・バグ修正依頼の調査と修正</Text>
            <Text pb={3}>・DB操作、レコード追加、DDLの新規作成</Text>

            <ListItem fontWeight={'bold'}>使用言語</ListItem>
            <Text pb={3}>・Java ver.8</Text>

            <ListItem fontWeight={'bold'}>フレームワーク</ListItem>
            <Text pb={3}>・Spring Boot</Text>

            <ListItem fontWeight={'bold'}>データベース</ListItem>
            <Text pb={3}>・Microsoft SQL Server</Text>

            <ListItem fontWeight={'bold'}>ソフトウェア・ツールなど</ListItem>
            <Text>・AWS S3</Text>
            <Text>・AWS Lamdba</Text>
            <Text>・AWS Code Commit</Text>
            <Text>・Git</Text>
            <Text>・SourceTree</Text>
            <Text>・Backlog</Text>
            <Text>・Slack</Text>
            <Text>・Visual Studio Code</Text>
            <Text>・JUnit4</Text>
            <Text pb={3}>・API Tester</Text>
          </UnorderedList>
          <Stack direction='row' alignItems={"center"} justifyContent={'center'} mb={6} pt={50}>
            <Text color={'cyan.500'}>技術タグ：</Text>
            <Badge>Java</Badge>
            <Badge colorScheme='green'>Spring Boot</Badge>
            <Badge colorScheme='red'>JavaScript</Badge>
            <Badge colorScheme='purple'>Python</Badge>
          </Stack>
        </Box>
      </Center>

      <Center pt={10}>
        <Box w={'full'} boxShadow={'2xl'} rounded={'lg'} p={6}>
          <Heading fontSize={'2xl'} fontFamily={'body'} textAlign={'center'}>
            官庁電子決済システム開発
          </Heading>
          <Text fontWeight={600} color={'gray.500'} textAlign={'center'} pt={3} mb={4}>
            2022/3
          </Text>
          <UnorderedList pl={100}>
            <ListItem fontWeight={'bold'}>案件内容</ListItem>
            <Text pb={3}>・総合のテスト実施(スポット案件)</Text>

            <ListItem fontWeight={'bold'}>担当業務</ListItem>
            <Text>・結合テスト仕様書の改善</Text>
            <Text pb={3}>・ノーコードフレームワークを用いた総合テスト実施</Text>

            <ListItem fontWeight={'bold'}>使用言語 / フレームワーク / データベース</ListItem>
            <Text pb={3}>・PEGA</Text>

            <ListItem fontWeight={'bold'}>ソフトウェア・ツールなど</ListItem>
            <Text>・Windows</Text>
            <Text pb={3}>・Postman</Text>
          </UnorderedList>
          <Stack direction='row' alignItems={"center"} justifyContent={'center'} mb={6} pt={50}>
            <Text color={'cyan.500'}>技術タグ：</Text>
            <Badge>Java</Badge>
            <Badge colorScheme='green'>Spring Boot</Badge>
            <Badge colorScheme='red'>JavaScript</Badge>
            <Badge colorScheme='purple'>Python</Badge>
          </Stack>
        </Box>
      </Center>

      <Center pt={10}>
        <Box w={'full'} boxShadow={'2xl'} rounded={'lg'} p={6}>
          <Heading fontSize={'2xl'} fontFamily={'body'} textAlign={'center'}>
            社内システム（予算・営業）の開発・保守
          </Heading>
          <Text fontWeight={600} color={'gray.500'} textAlign={'center'} pt={3} mb={4}>
            2021/6 ~ 2022/2
          </Text>
          <UnorderedList pl={100}>
            <ListItem fontWeight={'bold'}>案件内容</ListItem>
            <Text pb={3}>・既存システムの新規機能開発・保守</Text>

            <ListItem fontWeight={'bold'}>担当業務</ListItem>
            <Text>・担当フェーズ（要件定義〜結合テスト）</Text>
            <Text>・追加機能実装をバックエンド・フロントエンド共に担当</Text>
            <Text>・お客様への新機能の検討、実装後の説明</Text>
            <Text>・設計書の新規作成</Text>
            <Text>・テスト仕様書（単体、結合、総合）の新規作成</Text>
            <Text>・バグ修正依頼の調査と修正</Text>
            <Text pb={3}>・DB操作、レコード追加、DDLの新規作成</Text>

            <ListItem fontWeight={'bold'}>使用言語</ListItem>
            <Text pb={3}>・Java</Text>
            <Text pb={3}>・JavaScript</Text>
            <Text pb={3}>・HTML5</Text>
            <Text pb={3}>・CSS3</Text>
            <Text pb={3}>・JSP</Text>

            <ListItem fontWeight={'bold'}>フレームワーク</ListItem>
            <Text pb={3}>・Struts</Text>
            <Text pb={3}>・Spring Core</Text>

            <ListItem fontWeight={'bold'}>データベース</ListItem>
            <Text pb={3}>・Oracle Database</Text>

            <ListItem fontWeight={'bold'}>ソフトウェア・ツールなど</ListItem>
            <Text>・SVN</Text>
            <Text>・JBoss</Text>
            <Text>・Microsoft Teams</Text>
            <Text>・Eclipse</Text>
            <Text>・A5M2</Text>
            <Text>・TeraTerm</Text>
            <Text pb={3}>・WinSCP</Text>
          </UnorderedList>
          <Stack direction='row' alignItems={"center"} justifyContent={'center'} mb={6} pt={50}>
            <Text color={'cyan.500'}>技術タグ：</Text>
            <Badge>Java</Badge>
            <Badge colorScheme='green'>Spring Boot</Badge>
            <Badge colorScheme='red'>JavaScript</Badge>
            <Badge colorScheme='purple'>Python</Badge>
          </Stack>
        </Box>
      </Center>

      <Center pt={10}>
        <Box w={'full'} boxShadow={'2xl'} rounded={'lg'} p={6}>
          <Heading fontSize={'2xl'} fontFamily={'body'} textAlign={'center'}>
            会員制Webシステムの保守
          </Heading>
          <Text fontWeight={600} color={'gray.500'} textAlign={'center'} pt={3} mb={4}>
            2020/7 ~ 2021/05
          </Text>
          <UnorderedList pl={100}>
            <ListItem fontWeight={'bold'}>案件内容</ListItem>
            <Text pb={3}>・サブスク型Webシステムの開発・保守</Text>

            <ListItem fontWeight={'bold'}>担当業務</ListItem>
            <Text>・担当フェーズ（基本設計〜結合テスト）</Text>
            <Text>・既存機能の保守(セキュリティ対策など)</Text>
            <Text>・設計書の新規作成</Text>
            <Text>・テスト仕様書（単体、結合、総合）の新規作成</Text>
            <Text>・バグ修正依頼の調査と修正</Text>
            <Text pb={3}>・DB操作、レコード追加など</Text>

            <ListItem fontWeight={'bold'}>使用言語</ListItem>
            <Text>・Java</Text>
            <Text>・JavaScript</Text>
            <Text>・Shell</Text>
            <Text pb={3}>・XSL</Text>

            <ListItem fontWeight={'bold'}>フレームワーク</ListItem>
            <Text pb={3}>・Struts</Text>

            <ListItem fontWeight={'bold'}>データベース</ListItem>
            <Text pb={3}>・Oracle Database</Text>

            <ListItem fontWeight={'bold'}>ソフトウェア・ツールなど</ListItem>
            <Text>・Linux</Text>
            <Text>・AWS WorkSpace</Text>
            <Text>・Github</Text>
            <Text>・Backlog</Text>
            <Text>・Slack</Text>
            <Text>・Eclipse</Text>
            <Text>・TeraTerm</Text>
            <Text pb={3}>・WinSCP</Text>
          </UnorderedList>
          <Stack direction='row' alignItems={"center"} justifyContent={'center'} mb={6} pt={50}>
            <Text color={'cyan.500'}>技術タグ：</Text>
            <Badge>Java</Badge>
            <Badge colorScheme='green'>Spring Boot</Badge>
            <Badge colorScheme='red'>JavaScript</Badge>
            <Badge colorScheme='purple'>Python</Badge>
          </Stack>
        </Box>
      </Center>

      <Center pt={10}>
        <Box w={'full'} boxShadow={'2xl'} rounded={'lg'} p={6}>
          <Heading fontSize={'2xl'} fontFamily={'body'} textAlign={'center'}>
            新人研修
          </Heading>
          <Text fontWeight={600} color={'gray.500'} textAlign={'center'} pt={3} mb={4}>
            2020/4 ~ 2020/06
          </Text>
          <UnorderedList pl={100}>
            <ListItem fontWeight={'bold'}>研修内容</ListItem>
            <Text>・ビジネスマナー</Text>
            <Text>・CS基礎(ネットワーク、データベース、ソフトウェアなど)</Text>
            <Text>・プログラミング基礎(設計・オブジェクト指向)</Text>
            <Text pb={3}>・プログラミング実習(アプリケーション作成)</Text>

            <ListItem fontWeight={'bold'}>作成成果物</ListItem>
            <Text>・3人でのチーム開発</Text>
            <Text pb={3}>・社内備品レンタルシステムの開発（フロント・バックエンド）</Text>

            <ListItem fontWeight={'bold'}>使用言語</ListItem>
            <Text>・Java</Text>
            <Text>・JavaScript</Text>
            <Text>・HTML5</Text>
            <Text>・CSS3</Text>
            <Text>・Java Servlet</Text>
            <Text pb={3}>・JSP</Text>

            <ListItem fontWeight={'bold'}>データベース</ListItem>
            <Text pb={3}>・Oracle Database</Text>

            <ListItem fontWeight={'bold'}>ソフトウェア・ツールなど</ListItem>
            <Text>・Eclipse</Text>
            <Text>・Tomcat</Text>
            <Text>・Zoom</Text>
            <Text pb={3}>・SQL Developer</Text>
          </UnorderedList>
          <Stack direction='row' alignItems={"center"} justifyContent={'center'} mb={6} pt={50}>
            <Text color={'cyan.500'}>技術タグ：</Text>
            <Badge>Java</Badge>
            <Badge colorScheme='green'>Spring Boot</Badge>
            <Badge colorScheme='red'>JavaScript</Badge>
            <Badge colorScheme='purple'>Python</Badge>
          </Stack>
        </Box>
      </Center>
    </Layout>
  )
}
export default Project;