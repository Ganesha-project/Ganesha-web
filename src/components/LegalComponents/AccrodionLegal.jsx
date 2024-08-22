import { accordionData } from "../../../public/Data/LegalitasData";
import { Title } from "../Title";

export const AccordionLegal = () => {
    return (
        <section className="md:px-24 px-5 md:my-24 my-10 space-y-10">
            <Title text1={'Kelebihan'} text={'Memiliki Legalitas Usaha!'} />

            <div className="flex flex-col md:flex-row gap-10 items-center justify-center md:pl-10 md:pt-10 md:pb-10 md:pr-0 p-5 md:p-0 dark:bg-darkColor bg-gray-100 rounded-3xl">
                <div className="space-y-3 md:w-[50%]">
                    {/* Accordion */}
                    {accordionData.map(({ id, title, description,}) => (
                        <div key={id} className={`collapse collapse-arrow h-fit border-b rounded-none dark:border-b-gray-500 border-gray-300`}>
                            <input type="radio" name="accordion" id={`item${id}`} />
                            <div className={`collapse-title text-xl md:text-2xl font-bold flex items-center gap-2`}>
                                {title}
                            </div>
                            <div className={`collapse-content`}>
                                <ul className="text-gray-700 dark:text-gray-200">
                                    {description.map((text, index) => (
                                        <li key={index}>
                                            <p className="mb-2 text-lg">{text}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="md:w-[50%] md:order-none order-first bg-[#E7F1F3] rounded-3xl md:rounded-r-none md:rounded-l-3xl">
                    <img
                        className="md:h-[70lvh] w-full object-cover rounded-3xl md:rounded-r-none md:rounded-l-3xl"
                        src="https://res.cloudinary.com/dzrh2ogbn/image/upload/v1722236548/GaneshaAssets/vakr9ynkwlrqy3lb4qwb.svg"
                        alt="" />
                </div>
            </div>
        </section>
    );
};
