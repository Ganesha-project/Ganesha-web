import Image from 'next/image'

export const CardTax = ({ data }) => {

    return (
        <>

            <div class='m-10 lg:m-32 flex items-center justify-center'>
                <div class=''>
                    <h1 class='font-extrabold text-3xl lg:text-5xl text-center uppercase text-white bg-[#84534C] rounded-full p-10'>Perorangan</h1>
                    <div class='flex flex-col lg:flex-row'>
                        <div class='bg-[#E7D0BF] hover:bg-opacity-50 p-10 flex flex-col items-center justify-center m-10 rounded-[40px]'>
                            <h1 class='font-bold text-4xl text-center lg:text-left'>SPT Masa Bulanan</h1>
                            <p class='mt-3 font-semibold text-xl text-center lg:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consectetur unde asperiores adipisci quo, iure, molestiae velit itaque impedit dicta officia non distinctio harum aperiam sapiente excepturi autem nihil tenetur?</p>
                            <a href="" class='bg-[#84534C] hover:bg-opacity-50 p-3 rounded-[40px] mt-5 w-full text-center text-white font-bold block lg:inline-block'>
                                Konsultasi Sekarang
                            </a>
                        </div>
                        <div class='bg-[#E7D0BF] hover:bg-opacity-50 p-10 flex flex-col items-center justify-center m-10 rounded-[40px]'>
                            <h1 class='font-bold text-4xl text-center lg:text-left'>SPT Masa Tahunan</h1>
                            <p class='mt-3 font-semibold text-xl text-center lg:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis consectetur unde asperiores adipisci quo, iure, molestiae velit itaque impedit dicta officia non distinctio harum aperiam sapiente excepturi autem nihil tenetur?</p>
                            <a href="" class='bg-[#84534C] hover:bg-opacity-50 p-3 rounded-[40px] mt-5 w-full text-center text-white font-bold block lg:inline-block'>
                                Konsultasi Sekarang
                            </a>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}