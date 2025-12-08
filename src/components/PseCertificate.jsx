export const PseCertificate = () => {
    return (
        <>
            <section className="md:mx-24 2xl:mx-80 mx-5 pb-20">
                <img
                    className="w-full h-full object-cover rounded-3xl hidden md:inline-block shadow-mainShadow"
                    src={'/images/pse_dekstop.png'}
                    alt={'Ganesha Pse certificate'}
                />
                <img
                    className="w-full h-full object-cover rounded-3xl inline-block shadow-mainShadow md:hidden"
                    src={'/images/pse_mobile.png'}
                    alt={'Ganesha Pse certificate'}
                />
            </section>
        </>
    )
}