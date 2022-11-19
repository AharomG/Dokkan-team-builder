const ReturnToTop = () => {
    const toTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return(
        <>
            <img onClick={toTop} alt='X' className='w-[15vw] md:w-[5vw] fixed bottom-[5vh] right-[5vw] md:right-[2vw] cursor-pointer' src="https://static.thenounproject.com/png/216362-200.png"/>
        </>
    )
}

export default ReturnToTop;