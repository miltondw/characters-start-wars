import Link from "next/link";
import { List, Avatar, Button } from "antd";
import { DataListCharacter } from "../types/Types";
import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";
const ListCharacters = ({ personajes }: DataListCharacter) => {
  const names = personajes.allPeople.edges.map(
    (personaje) => personaje.node.name
  );
  const Personajes = personajes.allPeople.edges.filter(
    ({ node }, index) => !names.includes(node.name, index + 1)
  );

  const { showDrawer } = useContext(CharacterContext);

  return (
    <div className="content-list">
      <List
        grid={{ gutter: 0, column: 3, xs: 1 }}
        dataSource={Personajes}
        renderItem={(personaje) => (
          <List.Item key={personaje.node.id}>
            <List.Item.Meta
              avatar={<Avatar src="/Star-Wars.png" />}
              title={
                <Button type="primary" onClick={showDrawer}>
                  <Link
                    href={`/?character=${encodeURIComponent(
                      personaje.node.name
                    )}`}
                  >
                    {personaje.node.name}
                  </Link>
                </Button>
              }
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListCharacters;
