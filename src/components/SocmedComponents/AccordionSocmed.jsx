import { Title } from "../Title";
import { accordionData } from "../../../public/Data/SocmedData";

export const AccordionSocmed = () => {
    return (
        <section className="md:px-24 px-5 md:my-24 my-10 space-y-10">
            <Title text1={'Kenapa perusahaan'} text={'Membutuhkan Social Meda Management'} />

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
                <div className="md:w-[50%] md:order-none order-first">
                    <img
                        className="md:h-[70lvh] w-full object-cover rounded-3xl md:rounded-r-none md:rounded-l-3xl"
                        src="https://images.unsplash.com/photo-1491951931722-5a446214b4e2?q=80&w=2256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="" />
                </div>
            </div>
        </section>
    );
};
