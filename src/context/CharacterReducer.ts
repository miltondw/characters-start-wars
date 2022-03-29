import { Drawer, DrawerAction } from "../types/Types"
export const characterReducer = (state: Drawer, action: DrawerAction) => {
    switch (action.type) {
        case "Drawer":
            return {
                ...state,
                drawer: !state.drawer
            }
            break;

        default:
            return state;
    }
}