import { dataFormContact } from "@/app/Database"
import { IoSend } from "react-icons/io5"
import { Title } from "../Title"

export const Form = () => {
    return (
        <>
        <section className="md:m-24 m-5 space-y-5">
                <Title text={'Tulis Pertanyaan Kamu Disini!'} />
                <form action="" className="space-y-3">
                    {dataFormContact.map((el, idx) => (
                        <label key={idx} className="input input-bordered rounded-full bg-baseColor dark:bg-opacity-50 flex items-center gap-2">
                            <span className="font-semibold">
                                {el.placeholder}
                            </span>
                            <input type="text" name={el.name} className="grow" />
                        </label>
                    ))}
                    <textarea name="message" id="" cols="30" rows="5" className="rounded-3xl bg-baseColor dark:bg-opacity-50 placeholder:text-gray-900 dark:placeholder:text-white px-4 py-3 w-full placeholder:font-semibold" placeholder="Pesan"></textarea>
                    <button className="px-4 py-2 rounded-full bg-red-400 text-white btn btn-ghost">
                        Kirim
                        <IoSend />
                    </button>
                </form>
            </section >
        </>
    )
}