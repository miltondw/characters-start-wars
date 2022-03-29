import { useRouter } from "next/router";
import { useReducer } from "react";
import { CharacterContext } from "./CharacterContext";
import { characterReducer } from "./CharacterReducer";
const INITIAL_STATE = {
  drawer: false,
};

type CharacterProviderProps = {
  children: JSX.Element | JSX.Element[];
};

export default function CharacterProvider({
  children,
}: CharacterProviderProps) {
  const [characterState, dispatch] = useReducer(
    characterReducer,
    INITIAL_STATE
  );
  const router = useRouter();
  const onClose = () => {
    dispatch({ type: "Drawer", payload: { drawer: false } });
    router.push("/")
  };

  const showDrawer = () => {
    dispatch({ type: "Drawer", payload: { drawer: true } });
  };
  const showDrawerUrl = () => {
    dispatch({ type: "Drawer", payload: { drawer: true } });
  };
  return (
    <CharacterContext.Provider
      value={{ characterState, onClose, showDrawer, showDrawerUrl }}
    >
      {children}
    </CharacterContext.Provider>
  );
}
