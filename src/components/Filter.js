import addToTeamContext from '../context/addToTeamContext';
import { useContext } from 'react';
import categoriesFile from "../helpers/categories.json"

const Filter = () => {
    const {cardRarity, setCardRarity, cardCategory, setCardCategory, cardColor, setCardColor, cards, setCategories} = useContext(addToTeamContext);

    return( 
        <div className="mr-auto ml-auto text-center mt-[5vh] mb-[1vh] md:max-w-[20vw]">
            <img className={`inline hover:bg-black w-[30vw] h-auto md:max-w-[9.85vw] cursor-pointer hover:shadow-lg rounded ${cardRarity === 'LR' ? 'bg-black shadow-lg' : 'bg-transparent'}`} alt='LR' onClick={ (e)=> {cardRarity === 'LR' ? setCardRarity('') : setCardRarity('LR'); e.stopPropagation()}} src='https://vignette.wikia.nocookie.net/dbz-dokkanbattle/images/d/d1/LR_logo_apng.png'/>
            <img className={`inline hover:bg-black w-[30vw] h-auto md:max-w-[9vw] cursor-pointer hover:shadow-lg rounded ${cardRarity === 'UR' ? 'bg-black shadow-lg' : 'bg-transparent'}`} alt='UR' onClick={(e)=>{ cardRarity === 'UR' ? setCardRarity('') : setCardRarity('UR'); e.stopPropagation()}} src='https://static.wikia.nocookie.net/dbz-dokkanbattle/images/8/80/UR_eclair.png'/>
            <br/><br/>
            <img className={`inline hover:bg-black w-[12vw] h-auto md:max-w-[4vw] cursor-pointer hover:shadow-lg rounded ${cardColor === 'STR' ? 'bg-black shadow-lg' : 'bg-transparent'}`} alt='STR' src='https://static.wikia.nocookie.net/dbz-dokkanbattle/images/8/82/STR_icon.png' onClick={(e)=>{ cardColor === 'STR' ? setCardColor('') : setCardColor('STR'); e.stopPropagation()}}/>
            <img className={`inline hover:bg-black w-[12vw] h-auto md:max-w-[4vw] cursor-pointer hover:shadow-lg rounded ${cardColor === 'TEQ' ? 'bg-black shadow-lg' : 'bg-transparent'}`} alt='TEQ' src='https://static.wikia.nocookie.net/dbz-dokkanbattle/images/d/d7/TEQ_icon.png' onClick={(e)=>{cardColor === 'TEQ' ? setCardColor('') : setCardColor('TEQ'); e.stopPropagation()}}/>
            <img className={`inline hover:bg-black w-[12vw] h-auto md:max-w-[4vw] cursor-pointer hover:shadow-lg rounded ${cardColor === 'PHY' ? 'bg-black shadow-lg' : 'bg-transparent'}`} alt='PHY' src='https://static.wikia.nocookie.net/dbz-dokkanbattle/images/2/2d/PHY_icon.png' onClick={(e)=>{cardColor === 'PHY' ? setCardColor('') : setCardColor('PHY'); e.stopPropagation()}}/>
            <img className={`inline hover:bg-black w-[12vw] h-auto md:max-w-[4vw] cursor-pointer hover:shadow-lg rounded ${cardColor === 'INT' ? 'bg-black shadow-lg' : 'bg-transparent'}`} alt='INT' src='https://static.wikia.nocookie.net/dbz-dokkanbattle/images/4/4a/INT_icon.png' onClick={(e)=>{cardColor === 'INT' ? setCardColor('') : setCardColor('INT'); e.stopPropagation()}}/>
            <img className={`inline hover:bg-black w-[12vw] h-auto md:max-w-[4vw] cursor-pointer hover:shadow-lg rounded ${cardColor === 'AGL' ? 'bg-black shadow-lg' : 'bg-transparent'}`} alt='AGL' src='https://static.wikia.nocookie.net/dbz-dokkanbattle/images/5/5a/AGL_icon.png' onClick={(e)=>{cardColor === 'AGL' ? setCardColor('') : setCardColor('AGL'); e.stopPropagation()}}/>
            <br/><br/>
            <span className={`text-2xl cursor-pointer p-[1vh] hover:bg-black hover:text-white hover:shadow-lg rounded ${ cardCategory === 'Super' ? 'bg-black text-white shadow-lg' : 'bg-transparent'}`} onClick={(e)=>{cardCategory === 'Super' ? setCardCategory('') : setCardCategory('Super'); e.stopPropagation();}}><b>Super</b></span>
            <span className={`text-2xl cursor-pointer p-[1vh] hover:bg-black hover:text-white hover:shadow-lg rounded  ${cardCategory === 'Extreme' ? ' text-white bg-black shadow-lg' : 'bg-transparent'}`} onClick={(e)=>{ cardCategory === 'Extreme' ? setCardCategory('') : setCardCategory('Extreme'); e.stopPropagation();}}><b>Extreme</b></span>
            <br/><br/>
            <select onChange={(e)=>setCategories({categorie: e.target.value})} className={`${cards.data ? 'block' : 'hidden'} mr-auto ml-auto`} defaultValue="default">
                <option value="default">---</option>
                {
                    categoriesFile.categories.map((el,index)=><option key={index}>{el}</option>)
                }
            </select>
        </div>
    )
}

export default Filter;