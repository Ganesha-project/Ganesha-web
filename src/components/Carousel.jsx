export const Carousel = () => {
    return (
        <>
            <div id="default-carousel" className="relative w-screen h-screen overflow-y-hidden" data-carousel="slide">
                {/* Carousel wrapper */}
                <div className="overflow-hidden md:h-96">
                    {/* Item 1 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="object-cover w-full h-full max-w-full brightness-50"
                            alt="..."
                        />
                    </div>
                    {/* Item 2 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://images.unsplash.com/photo-1551836022-8b2858c9c69b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="object-cover w-full h-full max-w-full brightness-50"
                            alt="..."
                        />
                    </div>
                    {/* Item 3 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="object-cover w-full h-full max-w-full brightness-50"
                            alt="..."
                        />
                    </div>
                    {/* Item 4 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://images.unsplash.com/photo-1594732832278-abd644401426?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="object-cover w-full h-full max-w-full brightness-50"
                            alt="..."
                        />
                    </div>
                    {/* Item 5 */}
                    <div className="hidden duration-700 ease-in-out" data-carousel-item>
                        <img
                            src="https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="object-cover w-full h-full max-w-full brightness-50"
                            alt="..."
                        />
                    </div>
                </div>
            </div>
        </>
    )
}