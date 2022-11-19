import { createContext, useReducer, useState } from "react";
import { useFetchQL } from "../hooks/getFetchQL.ts";

const addToTeamContext = createContext();

export const AddToTeamProvider = ({children}) => {

    const reducer = (state,action) => {
        switch(action.type){
            case 'add': {
                let exist = state.filter((el) => el.imageURL === action.char.imageURL);
                if(!exist.length && state.length < 7){
                    return [...state, {...action.char}];
                }
                return state;
            }
            case 'elim': {
                state = state.map((el,index) => {
                    return index === action.index ? null : el;
                })
                state = state.filter(el => el !== null);
                return state;
            }
            case 'reset': {
                return [];
            }
            default: return state;
        }
    }

    const [team, setTeam] = useReducer(reducer,[]);
    const [cards, setRenderCards] = useState({});
    const [cardRarity, setCardRarity] = useState(false);
    const [searchName, setSearchName] = useState('');
    const [cardCategory, setCardCategory] = useState('');
    const [cardColor, setCardColor] = useState('');
    const [categories, setCategories] = useState({categorie: 'default'})

    let result = null;
    const GiveCards = async (url, queryParams, charType = null) => {
        result = await useFetchQL(url, queryParams, charType);
        setRenderCards(result);
    }
    const data = {team, setTeam, GiveCards, cards, cardRarity, setCardRarity, setRenderCards, setSearchName, searchName, cardCategory, setCardCategory, cardColor, setCardColor, categories, setCategories};

    return(
        <addToTeamContext.Provider value={data}>{children}</addToTeamContext.Provider>
    );
}

export default addToTeamContext;