import Image from "next/image";

export const ImgProduk = ({ socmed, styles, stylesImg }) => {
  return (
    <div className={` h-screen overflow-hidden`}>
      <Image
        className={`${stylesImg} blur-3xl lg:blur-none lg:w-[90vh] lg:transform lg:translate-x-[110%] lg:translate-y-24 lg:object-cover lg:transition-all`}
        src={socmed}
        alt="image"
      />
    </div>
  );
};
