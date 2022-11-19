import { useState, useContext } from 'react';
import addToTeamContext from '../context/addToTeamContext';

const Search = () => {
    const { setSearchName } = useContext(addToTeamContext);
    const [ name, setName] = useState('');

    return(
        <>
            <div className="text-center"><input type="text" className="border-2 border-sky-500 rounded w-[50vw] mt-[5vh] pl-[0.5rem]" placeholder="Search by name..." onChange={(e)=>{setName(e.target.value); e.stopPropagation()}} onKeyUp={(e)=>{if(e.key === "Enter") setSearchName(name); e.stopPropagation()}} onBlur={(e)=>{setName(e.target.value); e.stopPropagation()}}></input></div>
        </>
    )
}

export default Search;