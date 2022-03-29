import Head from "next/head";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { DataCharacters } from "../types/Types";
import { getCharactersData, getCharacterData } from "../graphql/query";
import { Layout } from "antd";
import CharacterProvider from "../context/CharacterProvider";
import DetailsCharacter from "../components/DetailsCharacter";
import ListCharacters from "../components/ListCharacters";

const { Header, Footer, Content } = Layout;
export const getServerSideProps: GetServerSideProps = async (context) => {
  const GetCharacterData = getCharacterData(context.query.character);
  const GetCharactersData = getCharactersData();
  return {
    props: {
      personajes: (await GetCharactersData).data,
      personaje: (await GetCharacterData).data,
    },
  };
};

const Home = ({ personajes, personaje }: DataCharacters) => {
  let router = useRouter();

  return (
    <CharacterProvider>
      <Head>
        <title>Characters Star Wars</title>
        <meta
          name="description"
          content="Characters Star Wars and descriptions"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header className="header">
          <h1 className="header-title">
            Characters
            {"  "}
            <a
              href="https://www.starwars.com/"
              target="_blank"
              rel="noreferrer"
            >
              Star Wars
            </a>
          </h1>
        </Header>
        <Content>
          <ListCharacters personajes={personajes} />
          {router.query.character && <DetailsCharacter personaje={personaje} />}
        </Content>
        <Footer>
          <a
            href="https://github.com/miltondw"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by MiltonWd
          </a>
        </Footer>
      </Layout>
    </CharacterProvider>
  );
};

export default Home;
