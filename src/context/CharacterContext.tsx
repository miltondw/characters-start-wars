import { createContext } from "react";
import { Drawer } from "../types/Types";
export type CharacterContextProps = {
  characterState: Drawer;
  onClose: () => void;
  showDrawer: () => void;
  showDrawerUrl: () => void;
};
export const CharacterContext = createContext<CharacterContextProps>(
  {} as CharacterContextProps
);
