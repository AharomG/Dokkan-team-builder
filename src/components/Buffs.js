import { useContext, useEffect, useReducer } from 'react';
import addToTeamContext from '../context/addToTeamContext';
import linksFile from '../helpers/links.json';

const Buffs = () => {
    const { team } = useContext(addToTeamContext);

    const reducer = (state,action) => {
        state = [];
        if(action.team.length > 1){
            for(let i = 0; i < action.team.length; i++){
                action.team[i].links.forEach( (elem) => { 
                    let exist = state.filter((link) => link.skill === elem); 
                    if(!exist.length){ 
                        state.push({skill: elem, onPositions:[i+1], description: linksFile[`${elem}`]});
                    }else{
                        //setLinkSkill({type: 'update', position: i+1, exist: exist[0]});
                        let index = state.findIndex((el) => el.skill === elem);
                        state = state.map((el,ind)=>{
                            return ind === index ? {skill: el.skill, onPositions: [...el.onPositions, i+1], description: el.description} : el
                        });
                    }
                })
            }
        }
        return state;
        /*switch(action.type){
            case 'add':{
                return [...state, { skill: action.link.skill, onPositions: action.link.onPositions, description: action.link.description}];
            }
            case 'update': {
                let index = state.findIndex((el) => el.skill === action.exist.skill);
                state = state.map((el,i)=>{
                    return i === index ? {skill: el.skill, onPositions: [...el.onPositions, action.position], description: el.description} : el
                });
                return state;
            }
            case 'reset': {
                return [];
            }
            default: return state;
        }*/
    }
    const [ linkSkill, setLinkSkill ] = useReducer(reducer,[]);


    /*const linksBuffs = (team,callBack) => {
        if(team.length > 0){ //if there's someone on the team
            team[team.length-1].links.forEach((elem)=>{ // for every link skill in the most recently added member of the team
                let exist = linkSkill.filter((link) => link.skill === elem); //see if it exist
                if(!exist.length){ 
                    setLinkSkill({type: 'add', link: {skill: elem, onPositions:[team.length], description: linksFile[`${elem}`]}});
                }else{
                    setLinkSkill({type: 'update', position: team.length, exist: exist[0]});
                }
            })
        }else{
            setLinkSkill({type: 'reset'})
        }
        if(team.length > 1){
            for(let i = 0; i < team.length; i++){
                team[i].links.forEach( (elem) => { 
                    let exist = linkSkill.filter((link) => link.skill === elem); 
                    if(!exist.length){ 
                        callBack({type: 'add', link: {skill: elem, onPositions:[i+1], description: linksFile[`${elem}`]}});
                    }else{
                        callBack({type: 'update', position: i+1, exist: exist[0]});
                    }
                })
            }
        }
    };*/

    useEffect(()=>{
        setLinkSkill({team});  
    },[team.length]);

    useEffect(()=>{
        linkSkill.sort((a,b)=>b.onPositions.length-a.onPositions.length);
    },[linkSkill]);

    /*const numberOfLinks = (number)=>{
        switch(number){
            case 1: return 'text-red-600'
            case 2: return 'text-orange-600'
            case 3: return 'text-yellow-600'
            case 4: return 'text-amber-500'
            case 5: return 'text-yellow-800'
            case 6: return 'text-lime-400'
            case 7: return 'text-lime-200'
        }
    }*/

    /*return(
        <>
            <div className={`mr-auto ml-auto mt-[3vh] mb-[5vh] w-[75vw] text-center max-w-[75vw] border-[0.2rem] pt-[1vh] pb-[1vh] bg-lime-600 shadow-[inset_0_0_20px_rgba(0,0,0,.7)] ${team.length ? 'block' : 'hidden'}`}>
                {linkSkill.length ? 
                    linkSkill.map((el,index)=>{
                        return el.onPositions.length > 1 ? //this was added later before I added all links
                                <div key={index}>
                                    <span className={`text-sm lg:text-lg`}><b>{el.skill} ({el.onPositions.join(',')})</b>: {el.description}</span>
                                    <br/>
                                </div>
                        : null
                }) : null}
            </div>
        </>
    ) */

    return(
        <div className='mt-[1vh] mb-[1vh]'>
            {linkSkill.length ? 
            linkSkill.map((el,index)=>{
                return el.onPositions.length > 1 ? 
                        <div key={index} className='mt-[0.5vh] bg-black text-white mr-auto ml-auto md:w-[75vw] text-center border-[0.2rem] pt-[1vh] pb-[1vh] border-white'>
                            <span className={`sm:pr-[1vw] sm:pl-[1vw] text-sm lg:text-lg`}><b>{el.skill} ({el.onPositions.join(',')})</b>: {el.description}</span>
                            <br/>
                        </div>
                : null
        }) : null}
        </div>
    )
}

export default Buffs;