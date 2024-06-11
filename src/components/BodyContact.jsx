
import Image from "next/image"
import cs2 from "../public/BG/cs2.jpg"
import { GiMailbox } from "react-icons/gi"
import { RiFacebookBoxFill, RiInstagramFill, RiLinkedinFill, RiWhatsappFill } from "react-icons/ri"
import { FBLINK, IGLINK, LINKEDINLINK, MAILLINK, WALINK } from "./Links/Links"

export const BodyContact = () => {
   
    return (
        <>
            <div className="m-10 lg:m-32">
                <div className="flex flex-col lg:flex-row">
                    <Image
                        src={cs2}
                        className="w-full lg:w-[70vh] md:w-auto h-auto"
                    />
                    <div className="lg:ml-5 mt-5 lg:mt-0">
                        <h1 className="mb-5 text-5xl lg:text-7xl font-extrabold bg-violet-900 bg-clip-text text-transparent">Kontak Kami</h1>
                        <a
                            href={MAILLINK}
                            className="mb-5 hover:bg-opacity-50 flex items-center gap-4 bg-violet-100 rounded-[40px] p-6">
                            <GiMailbox size={50} />
                            <div>
                                <p className="text-xl lg:text-2xl font-semibold">Email</p>
                                <p className="text-xl lg:text-4xl font-extrabold">ganeshamultikreatif{' '}@gmail.com</p>
                            </div>
                        </a>
                        <a
                            href={WALINK}
                            className="mb-5 hover:bg-opacity-50 flex items-center gap-4 bg-violet-100 rounded-[40px] p-6">
                            <RiWhatsappFill size={50} />
                            <div>
                                <p className="text-xl lg:text-2xl font-semibold">Whatsapp</p>
                                <p className="text-xl lg:text-4xl font-extrabold">+62 888 712 7000</p>
                            </div>
                        </a>
                        <div className="flex justify-between lg:justify-end gap-3">
                            <a
                                href={IGLINK}
                                className="flex hover:bg-opacity-50 flex-col w-fit items-center gap-4 bg-violet-100 rounded-[40px] p-6">
                                <RiInstagramFill size={50} />
                            </a>
                            <a
                                href={FBLINK}
                                className="flex hover:bg-opacity-50 flex-col w-fit items-center gap-4 bg-[#EA5554] rounded-[40px] p-6">
                                <RiFacebookBoxFill size={50} color="white" />
                            </a>
                            <a
                                href={LINKEDINLINK}
                                className="flex hover:bg-opacity-50 flex-col w-fit items-center gap-4 bg-violet-100 rounded-[40px] p-6">
                                <RiLinkedinFill size={50} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="m-4 lg:m-32 flex flex-col lg:flex-row gap-8 justify-center">
                <div class="self-end">
                    <h1 class="bg-[#EA5554] bg-clip-text text-center text-transparent text text-5xl lg:text-7xl lg:text-right mb-5 font-extrabold">Alamat Kantor</h1>
                    <a href="https://maps.app.goo.gl/XYd5ADAXJhwPgAKJ7" class="w-full lg:w-[40vw] hover:bg-opacity-50 flex items-center gap-4 bg-[#EA5554] rounded-[40px] p-6">
                        <div>
                            <p class="text-xl text-white text-right lg:text-2xl font-extrabold">Menara Cakrawala 12th Floor Unit 5A, Jalan M.H. Thamrin, Desa/Kelurahan Kebon Sirih, Kec. Menteng, Kota Adm. Jakarta Pusat, Provinsi DKI Jakarta, Kode Pos: 10340</p>
                        </div>
                    </a>
                </div>
                <div className="mapouter rounded-[40px] overflow-hidden">
                    <div className="gmap_canvas">
                        <iframe
                            src="https://maps.google.com/maps?q=Menara%20Cakrawala%2012th%20Floor%20Unit%205A,%20Jalan%20M.H.%20Thamrin,%20Desa/Kelurahan%20Kebon%20Sirih,%20Kec.%20Menteng,%20Kota%20Adm.%20Jakarta%20Pusat,%20Provinsi%20DKI%20Jakarta,%20Kode%20Pos:%2010340&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder={0}
                            scrolling="no"
                            style={{ width: 400, height: 400 }}
                        />
                        <style
                            dangerouslySetInnerHTML={{
                                __html:
                                    ".mapouter{position:relative;height:400px;width:400px;background:#fff;} .maprouter a{color:#fff !important;position:absolute !important;top:0 !important;z-index:0 !important;}"
                            }}
                        />
                        <a href="https://blooketjoin.org/">blooket</a>
                        <style
                            dangerouslySetInnerHTML={{
                                __html:
                                    ".gmap_canvas{overflow:hidden;height:400px;width:470px}.gmap_canvas iframe{position:relative;z-index:2}"
                            }}
                        />
                    </div>
                </div>
            </div>


            <div className="bg-violet-100 p-4 rounded-[40px] m-4 flex flex-col h-fit justify-center lg:mx-32">
                <div className="flex justify-center">
                    <p className="font-bold text-center lg:text-right text-4xl lg:text-7xl bg-violet-800 p-2 text-transparent bg-clip-text">Tulis Pertanyaan Kamu Disini!</p>
                </div>
                <div className="overflow-hidden">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSefgw-pkrvxafdPktCGgilf4azrjad-_6Pve9YCaIi2EXvYhQ/viewform?embedded=true" width="100%" height="1050" frameborder="0" marginheight="0" marginwidth="0">Memuat…</iframe>
                </div>
            </div>


        </>
    )
}