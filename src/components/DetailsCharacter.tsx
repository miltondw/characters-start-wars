import { Tag, Card, Row, Drawer, Button, Col } from "antd";
import { useRouter } from "next/router";
import { useContext } from "react";
import { CharacterContext } from "../context/CharacterContext";
import { DataCharacter } from "../types/Types";

export default function DetailsCharacter({ personaje }: DataCharacter) {
  let character = personaje.allPeople.edges[0].node;
  let films = character.films.edges.map((f) => f.node);
  const detailsCharacter = [
    ["Year of birth", character.birthYear],
    ["Eye color", character.eyeColor],
    ["Gender", character.gender],
    ["Hair color", character.hairColor],
    ["Height", `${character.height}cm`],
    ["Weight", `${character.mass}Kg`],
  ];
  const { characterState, showDrawer, onClose } = useContext(CharacterContext);
  const router = useRouter();
  let visible: boolean = false;
  if (router.query.character) {
    visible = true;
  } else {
    visible = false;
  }

  return (
    <Row className="site-card-border-less-wrapper">
      <Drawer
        title={character.name}
        className="drawer"
        closable={false}
        onClose={onClose}
        visible={characterState.drawer || visible}
      >
        <button className="drawer-closed" onClick={() => router.push("/")}>X</button>
        <Row gutter={[16, 16]} style={{ marginBottom: "4em" }}>
          {detailsCharacter.map((p) =>
            p[1] == "none" ||
            p[1] == "n/a" ||
            p[1] == "unknown" ||
            p[1] == "unknownKg" ? (
              ""
            ) : (
              <Col span={12} key={p[1]}>
                <h3>{p[0]}</h3>
                <Tag color={"gold"}>{p[1]}</Tag>
              </Col>
            )
          )}
        </Row>
        <h2>Films</h2>
        {films.map((f) => {
          return (
            <Card
              key={f.title}
              title={f.title}
              bordered={true}
              className="films-Card"
            >
              <h3>Director</h3>
              <Tag color="blue">{f.director.name}</Tag>
              <h3>Planets</h3>
              <div className="content-planets__tag">
                {f.planets.edges.map((p) => (
                  <Tag key={p.node.id} color="green">
                    {p.node.name}
                  </Tag>
                ))}
              </div>
            </Card>
          );
        })}
      </Drawer>
    </Row>
  );
}
