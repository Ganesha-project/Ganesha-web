import { ClientsReview } from "../../public/Data/Clients"
import { ExpandableButton } from "./ExpandableButton"
import { Title } from "./Title"

export const ClientLogo = () => {

    return (
        <>
            <section className="hidden md:block py-10 md:py-24 space-y-5 2xl:px-80">
                <Title text={'Our Clients'} className={'mb-5 md:mb-10 md:mx-24 mx-5 flex justify-center'} />
                <div className="carousel w-[100%] md:flex md:flex-wrap gap-5 md:justify-center">
                    {ClientsReview.map((el, index) => (
                        <>
                            {el.clientLogo ? (
                                <div key={index} className={`${index === 0 ? 'pl-5 md:pl-0' : ''} ${index === ClientsReview.length - 1 ? 'pr-5 md:pr-0' : ''} carousel-item`}>
                                    <div className="dark:bg-white bg-opacity-50 rounded-[25px] h-32 w-32 flex items-center p-2 relative group">
                                        <img
                                            className="object-contain w-full h-full bg-blend-multiply"
                                            src={el.clientLogo}
                                            alt={el.ptName} />
                                        <div className="absolute inset-0 group-hover:opacity-100 opacity-0 backdrop-blur-md duration-300 bg-white flex flex-col justify-center bg-opacity-50 ease-in-out rounded-[25px]">
                                            <h4 className="text-center text-gray-900 font-semibold">
                                                {el.ptName}
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            ) :
                                null}
                        </>
                    ))}
                </div>
            </section>
            <section className="md:hidden block py-10 md:py-24 space-y-5 2xl:px-80">
                <Title text={'Our Clients'} className={'mb-5 md:mb-10 md:mx-24 mx-5 flex justify-center'} />
                <div className="mx-5 flex justify-center flex-wrap gap-4">
                    {ClientsReview.slice(0, 6).map((el, idx) => (
                        <>
                            {el.clientLogo ? (
                                <div key={idx} className="dark:bg-white bg-opacity-50 rounded-[25px] h-32 w-32 flex items-center p-2 relative group">
                                    <img
                                        className="object-contain w-full h-full bg-blend-multiply"
                                        src={el.clientLogo}
                                        alt={el.ptName} />
                                    <div className="absolute inset-0 group-hover:opacity-100 opacity-0 backdrop-blur-md duration-300 bg-white flex flex-col justify-center bg-opacity-50 ease-in-out rounded-[25px]">
                                        <h4 className="text-center text-gray-900 font-semibold">
                                            {el.ptName}
                                        </h4>
                                    </div>
                                </div>
                            ) :
                                null}
                        </>
                    ))}
                </div>
                <ExpandableButton
                    align={'items-center'}
                    label={'Show All'}
                    className={'px-4 py-2 bg-baseColor dark:bg-secondaryColor w-fit rounded-full font-bold'}
                    classNameInner={"flex flex-wrap gap-4 justify-center mx-5 pb-10"}>
                    {ClientsReview.slice(6).map((el, idx) => (
                        <>
                            {el.clientLogo ? (
                                <div key={idx} className="dark:bg-white bg-opacity-50 rounded-[25px] h-32 w-32 flex items-center p-2 relative group">
                                    <img
                                        className="object-contain w-full h-full bg-blend-multiply"
                                        src={el.clientLogo}
                                        alt={el.ptName} />
                                    <div className="absolute inset-0 group-hover:opacity-100 opacity-0 backdrop-blur-md duration-300 bg-white flex flex-col justify-center bg-opacity-50 ease-in-out rounded-[25px]">
                                        <h4 className="text-center text-gray-900 font-semibold">
                                            {el.ptName}
                                        </h4>
                                    </div>
                                </div>
                            ) :
                                null}
                        </>
                    ))}
                </ExpandableButton>
            </section>
        </>
    )
}
