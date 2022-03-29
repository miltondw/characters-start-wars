import client from "./client";
import { gql } from "@apollo/client";

export const getCharacterData = async (character: any) => {
  const characterData = await client.query({
    query: gql`
      query Character {
        allPeople(name: "${character}") {
          edges {
            node {
              name
              birthYear
              eyeColor
              gender
              hairColor
              height
              mass
              
              films {
                edges {
                  node {
                    title
                    planets {
                      edges {
                        node {
                          name
                          id
                        }
                      }
                    }
                    director {
                      name
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });
  return characterData
}
export const getCharactersData = async () => {
  const charactersData = await client.query({
    query: gql`
      query Characters {
        allPeople {
          edges {
            node {
              name
              id
            }
          }
        }
      }
    `,
  });
  return charactersData
};

