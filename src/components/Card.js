import { useContext } from 'react';
import addToTeamContext from '../context/addToTeamContext';

const Card = ({name, title, imageURL, categories, leaderSkill, passive, links, superAttack,activeSkill,activeSkillCondition}) => {
    const { team, setTeam } = useContext(addToTeamContext);

    return(
        <>
            <img src={imageURL} title={`${name} ${title}`} alt={`${name} ${title}`} loading="lazy" onClick={(e)=>{setTeam({type: 'add', char: {name,title,imageURL,categories,leaderSkill,passive,links,superAttack,activeSkill,activeSkillCondition}}); e.stopPropagation();}} className='cursor-pointer hover:shadow-xl'/>
        </>
    )
}

export default Card;