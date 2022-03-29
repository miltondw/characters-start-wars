export type DataCharacters = {
    personajes: {
        allPeople: {
            edges: [
                {
                    node: {
                        name: string;
                        id: string;
                    };
                }
            ];
        };
    };
    personaje: {
        allPeople: {
            edges: [
                {
                    node: {
                        name: string;
                        birthYear: string;
                        eyeColor: string;
                        gender: string;
                        hairColor: string;
                        height: string;
                        mass: string;
                        films: {
                            edges: [
                                {
                                    node: {
                                        title: string;
                                        planets: {
                                            edges: [
                                                {
                                                    node: {
                                                        name: string;
                                                        id: string;
                                                    };
                                                }
                                            ];
                                        };
                                        director: {
                                            name: string;
                                        };
                                    };
                                }
                            ];
                        };
                    };
                }
            ];
        };
    };
};
export type DataCharacter = {
    personaje: {
        allPeople: {
            edges: [
                {
                    node: {
                        name: string;
                        birthYear: string;
                        eyeColor: string;
                        gender: string;
                        hairColor: string;
                        height: string;
                        mass: string;
                        films: {
                            edges: [
                                {
                                    node: {
                                        title: string;
                                        planets: {
                                            edges: [
                                                {
                                                    node: {
                                                        name: string;
                                                        id: string;
                                                    };
                                                }
                                            ];
                                        };
                                        director: {
                                            name: string;
                                        };
                                    };
                                }
                            ];
                        };
                    };
                }
            ];
        };
    };
}
export type Params = {
    params: {
        personaje: string;
    };
}
export type DataListCharacter = {
    personajes: {
        allPeople: {
            edges: [
                {
                    node: {
                        name: string;
                        id: string;
                    };
                }
            ];
        };
    };
}
export type Drawer = {
    drawer: boolean
}
export type DrawerAction =
    | { type: 'Drawer', payload: Drawer }
