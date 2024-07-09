export const Title = ({ text, icon, className, iconClassName }) => {
    return (
        <>
            <h1 className={`${className} text-xl md:text-4xl font-semibold text-mainColor dark:text-baseColor text-center flex items-center gap-2 justify-center`}>
                {text}
                <div className={iconClassName}>
                    {icon}
                </div>
            </h1>
        </>
    )
}