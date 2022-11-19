import Card from './Card';
import { useContext, useEffect, useState } from 'react';
import addToTeamContext from '../context/addToTeamContext';

const Cards = () => {
    const { GiveCards, cards, cardRarity, searchName, cardCategory, cardColor, categories} = useContext(addToTeamContext);
    
    const [load, setLoad] = useState(0);
    const [render, setRender] = useState([]);
    const [canLoad, setCanLoad] = useState(true);

    if(!cardRarity && !cardColor && !cardCategory && !searchName && categories.categorie === 'default') {
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`);
    }
    if(cardRarity && !cardColor && !cardCategory && !searchName && categories.categorie === 'default'){
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`,`(rarity: "${cardRarity}")`);
    }
    if(!cardRarity && cardColor && !cardCategory && !searchName && categories.categorie === 'default'){
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`,`(type: "${cardColor}")`);
    }
    if(cardRarity && cardColor && !cardCategory && !searchName && categories.categorie === 'default'){
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`,`(rarity: "${cardRarity}",type: "${cardColor}")`);
    }
    if(!cardRarity && !cardColor && cardCategory && !searchName && categories.categorie === 'default' ){
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`,`(class: "${cardCategory}")`);
    }
    if(cardRarity && !cardColor && cardCategory && !searchName && categories.categorie === 'default'){
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`,`(class: "${cardCategory}",rarity: "${cardRarity}")`);
    }
    if(!cardRarity && cardColor && cardCategory && !searchName && categories.categorie === 'default'){
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`,`(class: "${cardCategory}",type: "${cardColor}")`);
    }
    if(cardRarity && cardColor && cardCategory && !searchName && categories.categorie === 'default'){
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`,`(class: "${cardCategory}",type: "${cardColor}",rarity: "${cardRarity}")`);
    }
    if(!cardRarity && !cardColor && !cardCategory && searchName && categories.categorie === 'default'){
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`,`(name: "${searchName}")`);
    }
    if(cardRarity && !cardColor && !cardCategory && searchName && categories.categorie === 'default'){
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`,`(name: "${searchName}",rarity: "${cardRarity}")`);
    }
    if(!cardRarity && cardColor && !cardCategory && searchName && categories.categorie === 'default'){
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`,`(name: "${searchName}",type: "${cardColor}")`);
    }
    if(cardRarity && cardColor && !cardCategory && searchName && categories.categorie === 'default'){
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`,`(name: "${searchName}",rarity: "${cardRarity}",type: "${cardColor}")`);
    }
    if(!cardRarity && !cardColor && cardCategory && searchName && categories.categorie === 'default'){
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`,`(name: "${searchName}",class: "${cardCategory}")`);
    }
    if(cardRarity && !cardColor && cardCategory && searchName && categories.categorie === 'default'){
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`,`(name: "${searchName}",rarity: "${cardRarity}",class: "${cardCategory}")`);
    }
    if(!cardRarity && cardColor && cardCategory && searchName && categories.categorie === 'default'){
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`,`(name: "${searchName}",type: "${cardColor}",class: "${cardCategory}")`);
    }
    if(cardRarity && cardColor && cardCategory && searchName && categories.categorie === 'default'){
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`,`(name: "${searchName}",type: "${cardColor}",class: "${cardCategory}",rarity: "${cardRarity}")`);
    }
    if(!cardRarity && !cardColor && !cardCategory && !searchName && categories.categorie !== 'default') {
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`, `(categories: "${categories.categorie}")`);  
    }
    if(cardRarity && !cardColor && !cardCategory && !searchName && categories.categorie !== 'default') {
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`, `(categories: "${categories.categorie}",rarity: "${cardRarity}")`);  
    }
    if(!cardRarity && cardColor && !cardCategory && !searchName && categories.categorie !== 'default') {
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`, `(categories: "${categories.categorie}",type: "${cardColor}")`);  
    }
    if(cardRarity && cardColor && !cardCategory && !searchName && categories.categorie !== 'default') {
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`, `(categories: "${categories.categorie}",type: "${cardColor}",rarity: "${cardRarity}")`);  
    }
    if(!cardRarity && !cardColor && cardCategory && !searchName && categories.categorie !== 'default') {
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`, `(categories: "${categories.categorie}",class: "${cardCategory}")`);  
    }
    if(cardRarity && !cardColor && cardCategory && !searchName && categories.categorie !== 'default') {
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`, `(categories: "${categories.categorie}",class: "${cardCategory}",rarity: "${cardRarity}")`);  
    }
    if(!cardRarity && cardColor && cardCategory && !searchName && categories.categorie !== 'default') {
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`, `(categories: "${categories.categorie}",class: "${cardCategory}",type: "${cardColor}")`);  
    }
    if(cardRarity && cardColor && cardCategory && !searchName && categories.categorie !== 'default') {
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`, `(categories: "${categories.categorie}",class: "${cardCategory}",type: "${cardColor}",rarity: "${cardRarity}")`);  
    }
    if(!cardRarity && !cardColor && !cardCategory && searchName && categories.categorie !== 'default') {
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`, `(categories: "${categories.categorie}",name: "${searchName}")`);  
    }
    if(cardRarity && !cardColor && !cardCategory && searchName && categories.categorie !== 'default') {
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`, `(categories: "${categories.categorie}",name: "${searchName}",rarity: "${cardRarity}")`);  
    }
    if(!cardRarity && cardColor && !cardCategory && searchName && categories.categorie !== 'default') {
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`, `(categories: "${categories.categorie}",name: "${searchName}",type: "${cardColor}")`);  
    }
    if(cardRarity && cardColor && !cardCategory && searchName && categories.categorie !== 'default') {
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`, `(categories: "${categories.categorie}",name: "${searchName}",type: "${cardColor}",rarity: "${cardRarity}")`);  
    }
    if(!cardRarity && !cardColor && cardCategory && searchName && categories.categorie !== 'default') {
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`, `(categories: "${categories.categorie}",name: "${searchName}",class: "${cardCategory}")`);  
    }
    if(cardRarity && !cardColor && cardCategory && searchName && categories.categorie !== 'default') {
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`, `(categories: "${categories.categorie}",name: "${searchName}",class: "${cardCategory}",rarity: "${cardRarity}")`);  
    }
    if(!cardRarity && cardColor && cardCategory && searchName && categories.categorie !== 'default') {
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`, `(categories: "${categories.categorie}",name: "${searchName}",class: "${cardCategory}",type: "${cardColor}")`);  
    }
    if(cardRarity && cardColor && cardCategory && searchName && categories.categorie !== 'default') {
        GiveCards('https://dokkanapi.azurewebsites.net/graphql', `id name title imageURL leaderSkill passive categories links superAttack activeSkill activeSkillCondition`, `(categories: "${categories.categorie}",name: "${searchName}",class: "${cardCategory}",type: "${cardColor}",rarity: "${cardRarity}")`);  
    }
    
    window.addEventListener('scroll', ()=>{
        let { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        let scrollTopCeil = Math.ceil(scrollTop);
        if(scrollTopCeil+clientHeight >= scrollHeight){
            setLoad(load+1);
        }
    });
    useEffect(()=>{
        setRender([]);
        if(cards.data){
            for(let i = 0; i < 50; i++){
                if(cards.data.characters[i]) setRender((render)=>[...render, cards.data.characters.shift()]);
                else{
                    setCanLoad(false);
                    break;
                }
            }
        }
    },[cards.data, cards])
    useEffect(()=>{
        if(cards.data){
            for(let i = 0; i < 50; i++){
                if(cards.data.characters[i]) setRender((render)=>[...render, cards.data.characters.shift()]);
                else{
                    setCanLoad(false);
                    break;
                }
            }
        }
    },[load]);

    return (
        render.length ?
            <>
                <div className="mt-[5vh] grid grid-cols-[repeat(5,_minmax(10px,_1fr))] lg:grid-cols-[repeat(10,_minmax(10px,_1fr))] gap-1">
                    {
                        render.map(el => {
                            return(<Card key={el.id} name={el.name} title={el.title} imageURL={el.imageURL} categories={el.categories} leaderSkill={el.leaderSkill} passive={el.passive} links={el.links} superAttack={el.superAttack} activeSkill={el.activeSkill} activeSkillCondition={el.activeSkillCondition}/>);
                        })
                    }
                    
                </div>
                <div className={`text-center mt-[1vh] ${canLoad ? 'block' : 'hidden'}`}>LOADING MORE...</div>
            </>
    : <div className='text-center mt-[5vh]'>LOADING...</div>
    )
}

export default Cards;