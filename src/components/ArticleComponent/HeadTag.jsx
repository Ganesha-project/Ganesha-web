export const Headtag = ({ label }) => {
    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-mainColor text-2xl font-semibold">
                    {label || 'Latest Update'}
                </h1>
                <a href=""
                    className="px-3 py-1 bg-baseColor text-white rounded-full font-semibold duration-300 ease-in-out hover:bg-mainColor"
                >
                    See More
                </a>
            </div>
        </>
    )
}