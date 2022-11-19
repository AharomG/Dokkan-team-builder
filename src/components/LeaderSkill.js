
const LeaderSkill = ({skill, friendSkill}) => {

    return(
        <>
            <div className={`text-center text-white border-[0.1rem] pr-[1vw] pl-[1vw] lg:w-[75vw] border-white lg:mr-auto lg:ml-auto bg-black ${skill === null ? `hidden` : null}`}>
                <span className="overflow-x-scroll text-sm lg:text-lg">
                    <b>Leader</b>: {skill}
                </span>
                <br/>
                <span className="overflow-x-scroll text-sm lg:text-lg">
                    {friendSkill ? <><b>Friend</b>: {friendSkill}</> : null}
                </span>
            </div>
        </>
    )
}

export default LeaderSkill;