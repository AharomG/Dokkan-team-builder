import { useContext, useState } from 'react';
import addToTeamContext from '../context/addToTeamContext';

const Card = ({name, title, imageURL, categories, leaderSkill, passive, links, superAttack,activeSkill,activeSkillCondition}) => {
    const { setTeam } = useContext(addToTeamContext);
    const [effect, setEffect] = useState(false);

    return(
        <>
            <img src={imageURL} title={`${name} ${title}`} alt={`${name} ${title}`} loading="lazy" onClick={(e)=>{setTeam({type: 'add', char: {name,title,imageURL,categories,leaderSkill,passive,links,superAttack,activeSkill,activeSkillCondition}}); setEffect(true); e.stopPropagation();}} className={`cursor-pointer hover:shadow-xl ${effect ? 'animate-wiggle' : null}`} onAnimationEnd={() => setEffect(false)}/>
        </>
    )
}

export default Card;