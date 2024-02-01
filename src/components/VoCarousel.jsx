import Image from "next/image"
import Img1 from "../public/VO/1.jpg"
import Img2 from "../public/VO/2.jpg"
import Img3 from "../public/VO/3.png"
import Img4 from "../public/VO/4.png"
import Img5 from "../public/VO/5.png"
import Img6 from "../public/VO/6.png"
import Img7 from "../public/VO/7.png"

export const VoCarousel = () => {
    return (
        <>
            <div className="m-10 lg:m-32">
                <div id="default-carousel" className="relative w-full" data-carousel="slide">
                    {/* Carousel wrapper */}
                    <div className="relative h-[60vh] md:h-[75vh] lg:h-[90vh] overflow-hidden rounded-lg">
                        {/* Item 1 */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                            <Image
                                src={Img1}
                                className="absolute block w-auto h-full object-cover rounded-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."
                            />
                        </div>
                        {/* Item 2 */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                            <Image
                                src={Img2}
                                className="absolute block  w-auto h-full object-cover rounded-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."
                            />
                        </div>
                        {/* Item 3 */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                            <Image
                                src={Img3}
                                className="absolute block  w-auto h-full object-cover rounded-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."
                            />
                        </div>
                        {/* Item 4 */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                            <Image
                                src={Img4}
                                className="absolute block  w-auto h-full object-cover rounded-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."
                            />
                        </div>
                        {/* Item 5 */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                            <Image
                                src={Img5}
                                className="absolute block  w-auto h-full object-cover rounded-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."
                            />
                        </div>
                        {/* Item 6 */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                            <Image
                                src={Img6}
                                className="absolute block  w-auto h-full object-cover rounded-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."
                            />
                        </div>
                        {/* Item 7 */}
                        <div className="hidden duration-700 ease-in-out" data-carousel-item="">
                            <Image
                                src={Img7}
                                className="absolute block  w-auto h-full object-cover rounded-3xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                alt="..."
                            />
                        </div>
                    </div>
                    {/* Slider indicators */}
                    <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="true"
                            aria-label="Slide 1"
                            data-carousel-slide-to={0}
                        />
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="false"
                            aria-label="Slide 2"
                            data-carousel-slide-to={1}
                        />
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="false"
                            aria-label="Slide 3"
                            data-carousel-slide-to={2}
                        />
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="false"
                            aria-label="Slide 4"
                            data-carousel-slide-to={3}
                        />
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="false"
                            aria-label="Slide 5"
                            data-carousel-slide-to={4}
                        />
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="false"
                            aria-label="Slide 5"
                            data-carousel-slide-to={5}
                        />
                        <button
                            type="button"
                            className="w-3 h-3 rounded-full"
                            aria-current="false"
                            aria-label="Slide 5"
                            data-carousel-slide-to={6}
                        />
                    </div>
                    {/* Slider controls */}

                </div>
            </div>

        </>
    )
}