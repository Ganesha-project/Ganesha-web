export const Title = ({ text1, text, icon, className, iconClassName }) => {
    return (
        <>
            <div className={`${className} space-y-2`}>
                <span className="md:text-lg font-medium">
                    {text1}
                </span>
                <h1 className={`text-xl md:text-4xl pb-1 font-semibold bg-gradient-to-br dark:from-white dark:via-baseColor dark:to-mainColor from-neutral-800 via-mainColor to-baseColor bg-clip-text text-transparent flex items-center gap-2`}>
                    {text}
                    <div className={iconClassName}>
                        {icon}
                    </div>
                </h1>
            </div>
        </>
    )
}