import { ImgProduk } from '@/components/ImgProduk';
import { CardProduct } from '@/components/CardProduct'
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
// import { ImgProduk } from '../components/ImgProduk'
import socmed from "../../public/BG/allproducts.png"

export default function KonsultanPajakPage() {
    const imgProduct = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    return (
        <>
            <ImgProduk image={imgProduct} socmed={socmed} />
            <CardProduct />
        </>
    )
}