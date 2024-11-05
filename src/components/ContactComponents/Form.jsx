"use client"
import { useState } from "react";
import { dataFormContact } from "@/app/Database";
import { IoSend } from "react-icons/io5";
import { Title } from "../Title";
import Toastify from 'toastify-js'; // Import Toastify
import 'toastify-js/src/toastify.css'; // Import Toastify CSS

export const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const result = await response.json();

            // Show a success message using Toastify if the request is successful
            Toastify({
                text: result.message,
                duration: 3000,
                gravity: "top", // can be "top" or "bottom"
                position: 'right', // can be "left", "center" or "right"
                backgroundColor: "#4caf50", // Success color
                stopOnFocus: true, // Prevents dismissing of toast on hover
            }).showToast();
        } catch (error) {
            // Show an error message using Toastify if the request fails
            Toastify({
                text: 'Terjadi kesalahan saat mengirim pesan. Coba lagi nanti.',
                duration: 3000,
                gravity: "top",
                position: 'right',
                backgroundColor: "#f44336", // Error color
                stopOnFocus: true,
            }).showToast();
        }
    };

    return (
        <section className="md:m-24 m-5 space-y-5 md:py-20 py-10">
            <Title text={'Tulis Pertanyaan Kamu Disini!'} />
            <form onSubmit={handleSubmit} className="space-y-3">
                {dataFormContact.map((el, idx) => (
                    <label key={idx} className="input input-bordered rounded-2xl bg-gray-100 dark:bg-darkColor flex items-center gap-2">
                        <span className="font-semibold">{el.placeholder}</span>
                        <input
                            type="text"
                            name={el.name}
                            className="grow"
                            value={formData[el.name]}
                            onChange={handleChange}
                            required
                        />
                    </label>
                ))}
                <textarea
                    name="message"
                    cols="30"
                    rows="5"
                    className="border border-[#E2E6EA] dark:border-[#3D3F41] rounded-2xl bg-gray-100 dark:bg-darkColor placeholder:text-gray-900 dark:placeholder:text-white px-4 py-3 w-full placeholder:font-semibold"
                    placeholder="Pesan"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
                <button className="px-4 py-2 rounded-2xl w-full bg-gradient-to-bl from-gray-100 dark:from-darkColor to-sky-200 dark:to-sky-800 btn btn-ghost border-none hover:brightness-105">
                    Kirim
                    <IoSend />
                </button>
            </form>
        </section>
    );
};