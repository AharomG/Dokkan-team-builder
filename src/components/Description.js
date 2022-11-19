const Description = ({ opacity, passive, activeSkill, activeSkillCondition, superAttack}) => {
    return (
        <div className={`${!opacity ? 'hidden' : 'block'} pt-[0.5rem] pb-[0.5rem] text-white border-[0.2rem] border-amber-400 shadow-lg bg-[rgb(85,0,13)] mt-[3vh] text-center text-sm lg:text-lg pr-[1vw] pl-[1vw] md:w-[75vw] mr-auto ml-auto`}><b>Passive:</b> {passive}<br/><b>Super Attack:</b> {superAttack}<br/>{activeSkill ? <><b>Active Skill:</b> {activeSkill}</> : null}<br/>{activeSkillCondition ? <><b>Active Skill Condition: </b>{activeSkillCondition}</> : null}</div>
    )
}

export default Description;