import addToTeamContext from '../context/addToTeamContext';
import { useContext } from 'react';

const Resetbtton = () => {
    const { team, setTeam } = useContext(addToTeamContext);

    return(
        <div className={`mr-auto ml-auto text-center mt-[5vh] mb-[1vh] text-white ${team.length ? 'block' : 'hidden'}`}>
            <button className='text-sm lg:text-lg border-[0.1rem] pl-[1vw] pr-[1vw] bg-black rounded hover:shadow-lg' onClick={()=>setTeam({type: 'reset'})}>Reset Team</button>
        </div>
    );
}

export default Resetbtton;