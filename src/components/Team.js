import LeaderSkill from "./LeaderSkill";
import Buffs from "./Buffs";
import addToTeamContext from '../context/addToTeamContext';
import { useContext, useState } from 'react';
import Description from "./Description";

const Team = () => {
    const { team, setTeam } = useContext(addToTeamContext);
    const [passive, setPassive] = useState('');
    const [superAttack, setSuperAttack] = useState('');
    const [activeSkill, setActiveSkill] = useState('');
    const [activeSkillCondition, setActiveSkillCondition] = useState('');
    const [opacity,setOpacity] = useState(0);

    const takesLeaderSkill = (categories) => {
        let color = null;
        let lead = false, friend = false;
        if(team[0]){
            let reg = /"(((\w*)'?s?\s?)*)"/gi;
            let leadSkill = team[0].leaderSkill.match(reg);
            if(leadSkill && leadSkill.length){
                for(let i = 0; i < categories.length; i++){
                    if(`"${categories[i]}"` === leadSkill[0] || `"${categories[i]}"` === leadSkill[1]){
                        lead= true;
                        break;
                    }
                }
            }
        }
        if(team[6]){
            let reg = /"(((\w*)\s?)*)"/gi;
            let leadSkillFriend = team[6].leaderSkill.match(reg);
            if(leadSkillFriend && leadSkillFriend.length){
                for(let i = 0; i < categories.length; i++){
                    if(`"${categories[i]}"` === leadSkillFriend[0] || `"${categories[i]}"` === leadSkillFriend[1]){
                        friend = true;
                        break;
                    }
                }
            }
        }
        if(lead && friend) color = 'bg-lime-500';
        if(lead && !friend) color = 'bg-gradient-to-r from-lime-500 to-transparent';
        if(friend && !lead) color = 'bg-gradient-to-l from-lime-500 to-transparent';
        return color;
    }

    return( //maybe use hook useMemo since description component renders this component
        <div className={`mt-[2vh] ${team.length ? 'block' : 'hidden'}`}>
            <LeaderSkill skill={team[0] ? team[0].leaderSkill : null} friendSkill={ team[6] ? team[6].leaderSkill : null}/>
            <table className="border-collapse border-spacing-0 mr-auto ml-auto lg:w-[75vw] w-[100vw] table-fixed text-white">
                <thead>
                <tr>
                    <td className="border-amber-400 border-solid border-[0.1rem] bg-black">Leader</td>
                    <td rowSpan="2"className={`border-amber-400 border-solid border-[0.1rem] overflow-hidden relative bg-black ${team[1] ? takesLeaderSkill(team[1].categories) : null}`}> { team.length > 1 ? 
                        <><img src={team[1].imageURL} title={`${team[1].name} ${team[1].title}`} alt={`${team[1].name} ${team[1].title}`} className='' onMouseEnter={()=>{setPassive(team[1].passive); setSuperAttack(team[1].superAttack); setActiveSkill(team[1].activeSkill); setActiveSkillCondition(team[1].activeSkillCondition); setOpacity(1)}} onMouseLeave={()=>setOpacity(0)}/></>
                        : null}</td>
                    <td rowSpan="2"className={`border-amber-400 border-solid border-[0.1rem] overflow-hidden relative bg-black ${team[2] ? takesLeaderSkill(team[2].categories) : null}`}> { team.length > 2 ? 
                        <><img src={team[2].imageURL} title={`${team[2].name} ${team[2].title}`} alt={`${team[2].name} ${team[2].title}`} className='' onMouseEnter={()=>{setPassive(team[2].passive); setSuperAttack(team[2].superAttack); setActiveSkill(team[2].activeSkill); setActiveSkillCondition(team[2].activeSkillCondition); setOpacity(1)}} onMouseLeave={()=>setOpacity(0)}/></>
                        : null}</td>
                    <td rowSpan="2"className={`border-amber-400 border-solid border-[0.1rem] overflow-hidden relative bg-black ${team[3] ? takesLeaderSkill(team[3].categories) : null}`}> { team.length > 3 ? 
                        <><img src={team[3].imageURL} title={`${team[3].name} ${team[3].title}`} alt={`${team[3].name} ${team[3].title}`} className='' onMouseEnter={()=>{setPassive(team[3].passive); setSuperAttack(team[3].superAttack); setActiveSkill(team[3].activeSkill); setActiveSkillCondition(team[3].activeSkillCondition); setOpacity(1)}} onMouseLeave={()=>setOpacity(0)}/></>
                        : null}</td>
                    <td rowSpan="2"className={`border-amber-400 border-solid border-[0.1rem] overflow-hidden relative bg-black ${team[4] ? takesLeaderSkill(team[4].categories) : null}`}> { team.length > 4 ? 
                        <><img src={team[4].imageURL} title={`${team[4].name} ${team[4].title}`} alt={`${team[4].name} ${team[4].title}`} className='' onMouseEnter={()=>{setPassive(team[4].passive); setSuperAttack(team[4].superAttack); setActiveSkill(team[4].activeSkill); setActiveSkillCondition(team[4].activeSkillCondition); setOpacity(1)}} onMouseLeave={()=>setOpacity(0)}/></>
                        : null}</td>
                    <td rowSpan="2"className={`border-amber-400 border-solid border-[0.1rem] overflow-hidden relative bg-black ${team[5] ? takesLeaderSkill(team[5].categories) : null}`}> { team.length > 5 ? 
                        <><img src={team[5].imageURL} title={`${team[5].name} ${team[5].title}`} alt={`${team[5].name} ${team[5].title}`} className='' onMouseEnter={()=>{setPassive(team[5].passive); setSuperAttack(team[5].superAttack); setActiveSkill(team[5].activeSkill); setActiveSkillCondition(team[5].activeSkillCondition); setOpacity(1)}} onMouseLeave={()=>setOpacity(0)}/></>
                        : null}</td>
                    <td className="border-amber-400 border-solid border-[0.1rem] bg-black">Friend</td>
                </tr>
                <tr>
                    <td className={`border-amber-400 border-solid border-[0.1rem] overflow-hidden relative bg-black`}>{ team.length > 0 ?
                        <><img src={team[0].imageURL} title={`${team[0].name} ${team[0].title}`} alt={`${team[0].name} ${team[0].title}`} className='' onMouseEnter={()=>{setPassive(team[0].passive); setSuperAttack(team[0].superAttack); setActiveSkill(team[0].activeSkill); setActiveSkillCondition(team[0].activeSkillCondition); setOpacity(1)}} onMouseLeave={()=>setOpacity(0)}/></>
                        : null}</td>
                    <td className="border-amber-400 border-solid border-[0.1rem] overflow-hidden relative bg-black">{ team.length > 6 ? 
                        <><img src={team[6].imageURL} title={`${team[6].name} ${team[6].title}`} alt={`${team[6].name} ${team[6].title}`} className='text-lime-500' onMouseEnter={()=>{setPassive(team[6].passive); setSuperAttack(team[6].superAttack); setActiveSkill(team[6].activeSkill); setActiveSkillCondition(team[6].activeSkillCondition); setOpacity(1)}} onMouseLeave={()=>setOpacity(0)}/></>
                    : null}</td>
                </tr>
                <tr>
                    <td onClick={(e)=>setTeam({type: 'elim', index: parseInt(e.target.innerText)-1})} className="cursor-pointer border-amber-400 border-solid border-[0.1rem] overflow-hidden text-center bg-black">1</td>
                    <td onClick={(e)=>setTeam({type: 'elim', index: parseInt(e.target.innerText)-1})} className="cursor-pointer border-amber-400 border-solid border-[0.1rem] overflow-hidden text-center bg-black">2</td>
                    <td onClick={(e)=>setTeam({type: 'elim', index: parseInt(e.target.innerText)-1})} className="cursor-pointer border-amber-400 border-solid border-[0.1rem] overflow-hidden text-center bg-black">3</td>
                    <td onClick={(e)=>setTeam({type: 'elim', index: parseInt(e.target.innerText)-1})} className="cursor-pointer border-amber-400 border-solid border-[0.1rem] overflow-hidden text-center bg-black">4</td>
                    <td onClick={(e)=>setTeam({type: 'elim', index: parseInt(e.target.innerText)-1})} className="cursor-pointer border-amber-400 border-solid border-[0.1rem] overflow-hidden text-center bg-black">5</td>
                    <td onClick={(e)=>setTeam({type: 'elim', index: parseInt(e.target.innerText)-1})} className="cursor-pointer border-amber-400 border-solid border-[0.1rem] overflow-hidden text-center bg-black">6</td>
                    <td onClick={(e)=>setTeam({type: 'elim', index: parseInt(e.target.innerText)-1})} className="cursor-pointer border-amber-400 border-solid border-[0.1rem] overflow-hidden text-center bg-black">7</td>
                </tr>
                </thead>
            </table>
            <Description opacity={opacity} passive={passive} superAttack={superAttack} activeSkill={activeSkill} activeSkillCondition={activeSkillCondition}/>
            <Buffs/>
        </div>
    )
}

export default Team;