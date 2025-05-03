'use client'
import Image from 'next/image';
import Artboard2 from '../public/IMG/Artboard2.png';
import ThemeSwitch from './ThemeSwitch';
import { useState, useEffect } from 'react';
import { RiCustomerServiceFill } from 'react-icons/ri';
import { dataContact } from '@/app/Database';
import { usePathname } from "next/navigation";
import { MegaMenuNavbar } from './MegaMenuNavbar';
import { SearchNavbar } from './SearchNavbar';
import { MobileDrawer } from './MobileDrawer';
import { SlSocialInstagram } from 'react-icons/sl';
import Link from 'next/link';
import { HiMiniBars2, HiMiniMagnifyingGlass, HiSquares2X2 } from "react-icons/hi2";
import { HiHome } from "react-icons/hi";
import { RiSearchFill } from "react-icons/ri";
import { ServicesMenu } from './ServicesMenu';
import { AboutMenu } from './AboutMenu';
import { BgtGradientYellowPurple, TextGradientYellowPurple, TextMainGradient } from '@/utils/ReueseClass';
import { QuickLinks } from './QuickLinks';

export const Navbar = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [expandedId, setExpandedId] = useState(null);
  const path = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      {/* Navbar Desktop */}
      <nav className={`${isScrolled ? "" : "mt-2"} navbar fixed 2xl:px-80 md:px-24 w-full z-[100] ease-in-out duration-300 text-[14px] md:flex justify-center gap-2 hidden `}>
        <div className="relative navbar-center hidden lg:flex rounded-3xl px-4">
          {/* Wrapper */}
          <div className={`absolute backdrop-blur-lg px-24 py-5 dark:bg-secondaryDark/50 bg-secondaryLight/50 border border-darkColor/5 dark:border-lightColor/5 rounded-full w-full h-[35px] -z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-custom`}></div>
          <ul className="flex items-center flex-col p-4 md:p-0 mt-4 font-medium md:space-x-2 rtl:space-x-reverse md:flex-row md:mt-0 text-[14px]">
            <li className='relative flex flex-col items-center group'>
              <Link
                href={'/'}
                className={`z-[555] flex items-center gap-2 -ml-[11px] p-[7px] text-gray-800 dark:text-white rounded-full hover:bg-darkColor/5 dark:hover:bg-lightColor/5 duration-200 ease-in-out`}
                aria-current="page"
              >
                <Image src={Artboard2} width={21} height={21} alt="Ganesha Logo" className='dark:brightness-[135%]' />
              </Link>
              <span className={`${path === '/' ? 'scale-100' : 'scale-0'} -ml-[11px] absolute bottom-[3px] w-[3px] h-[3px] ease-in-out duration-300 group-hover:scale-100 scale-0 dark:bg-lightColor bg-darkColor rounded-full`}></span>
            </li>
            <MegaMenuNavbar
              id="produk"
              title="Produk & Layanan"
              expandedId={expandedId}
              setExpandedId={setExpandedId}

            >
              <ServicesMenu
                onClose={() => setExpandedId(null)}
                expandedId={expandedId} />
            </MegaMenuNavbar>
            <li className='relative flex flex-col items-center group duration-200 ease-in-out hover:scale-[102%]'>
              <Link
                href={'/activity'}
                className={`${path === '/' && 'bg-darkColor/5 dark:bg-lightColor/5'} font-semibold shimmer-animate shimmer-text block py-[6px] px-3 items-center rounded-full hover:bg-darkColor/5 dark:hover:bg-lightColor/5 duration-200 ease-in-out`}
                aria-current="page"
              >
                <span className={TextGradientYellowPurple}>
                  Go Space
                </span>
              </Link>
              <span className={`${path.startsWith('/go-space') ? 'scale-100' : 'scale-0'} absolute bottom-[4px] w-[3px] h-[3px] ease-in-out duration-300 group-hover:scale-100 scale-0 ${BgtGradientYellowPurple} rounded-full`}></span>
            </li>
            <li className='relative flex flex-col items-center group'>
              <Link
                href={'/activity'}
                className={`block py-[6px] px-3 items-center text-gray-800 dark:text-white rounded-full hover:bg-darkColor/5 dark:hover:bg-lightColor/5 duration-200 ease-in-out`}
                aria-current="page"
              >
                Aktifitas
              </Link>
              <span className={`${path.startsWith('/activity') ? 'scale-100' : 'scale-0'} absolute bottom-[4px] w-[3px] h-[3px] ease-in-out duration-300 group-hover:scale-100 scale-0 dark:bg-lightColor bg-darkColor rounded-full`}></span>
            </li>
            <li className='relative flex flex-col items-center group'>
              <Link
                href={'/article'}
                className={`block py-[6px] px-3 items-center text-gray-800 dark:text-white rounded-full hover:bg-darkColor/5 dark:hover:bg-lightColor/5 duration-200 ease-in-out`}
                aria-current="page"
              >
                Artikel
              </Link>
              <span className={`${path.startsWith('/article') ? 'scale-100' : 'scale-0'} absolute bottom-[4px] w-[3px] h-[3px] ease-in-out duration-300 group-hover:scale-100 scale-0 dark:bg-lightColor bg-darkColor rounded-full`}></span>
            </li>
            <div className='flex items-center gap-3 py-[6px] px-3 !-mr-3 bg-darkColor/5 dark:bg-lightColor/10 rounded-full'>
              {/* Menu */}
              <MegaMenuNavbar
                id="tentang"
                icon={<HiSquares2X2 className='text-xl' />}
                iconClassName={'rounded-full'}
                expandedId={expandedId}
                setExpandedId={setExpandedId}
              >
                <AboutMenu
                  onClose={() => setExpandedId(null)}
                  expandedId={expandedId} />
              </MegaMenuNavbar>

              {/* Searchbar */}
              <MegaMenuNavbar
                id="search"
                icon={<RiSearchFill className='text-[18px]' />}
                iconClassName={'rounded-full'}
                expandedId={expandedId}
                setExpandedId={setExpandedId}
              >
                <SearchNavbar
                  onClose={() => setExpandedId(null)}
                />
              </MegaMenuNavbar>

              {/* Theme */}
              <ThemeSwitch />
            </div>
          </ul>
        </div>
        <div className="space-x-2">
          <Link
            href='/contact'
            className={`flex items-center `}
          >
            <span className='border border-darkColor/5 dark:border-lightColor/5 md:block hidden font-semibold text-neutral-800 dark:text-white bg-lightColor/50 dark:bg-darkColor/50 backdrop-blur-lg shadow-custom hover:bg-mainColor hover:text-white ease-in-out duration-300 dark:hover:bg-secondaryColor px-4 py-2 rounded-full'>
              Contact
            </span>
          </Link>

          <Link
            href={dataContact.media[0].link}
            data-tip={'Our Instragram'}
            className='block md:hidden tooltip tooltip-bottom p-2 rounded-full bg-white bg-opacity-40 dark:bg-opacity-25 backdrop-blur-md hover:bg-opacity-100 hover:bg-mainColor hover:text-white duration-300 dark:hover:bg-secondaryColor'
          >
            <SlSocialInstagram className='text-xl' />
          </Link>
        </div>
      </nav >

      {/* Mobile Navbar */}
      <nav className={`fixed space-x-2 max-w-screen navbar !min-h-[50px] h-[50px] z-[999] md:hidden lg:hidden`}>
        {/* Wrapper */}
        <div className={`${isScrolled ? "" : "hidden"} absolute backdrop-blur-xl px-24 py-5 dark:bg-secondaryDark/50 bg-secondaryLight/50 w-full h-full -z-[100] top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2`}></div>
        <div className='navbar-start'>
          <Link
            href={'/'}
            className={`${expandedId && "-translate-y-[200%] scale-0"} origin-top z-[555] justify-center flex items-center gap-2 p-[7px]  duration-300 ease-in-out transition-all`}
            aria-current="page"
          >
            <Image
              src={Artboard2}
              width={25}
              height={25}
              className={`${isScrolled ? "dark:brightness-125 brightness-90" : "grayscale brightness-[150] contrast-200 invert dark:invert-0"}`}
              alt="Ganesha Logo" />
          </Link>
        </div>
        <div className='navbar-end space-x-6 mr-2'>
          <MegaMenuNavbar
            id="search"
            icon={<HiMiniMagnifyingGlass className={`text-xl mb-[2px]`} />}
            iconClassName={``}
            expandedId={expandedId}
            setExpandedId={setExpandedId}
            mobile=
            {
              <>
                <SearchNavbar
                  className={`mx-5 mt-10`}
                  expandedId={expandedId} />
                <QuickLinks />
              </>
            }
          >
          </MegaMenuNavbar>

          <MegaMenuNavbar
            id="tentang"
            icon={<HiMiniBars2 className={`text-xl mb-[2px]`} />}
            iconClassName={''}
            expandedId={expandedId}
            setExpandedId={setExpandedId}
            mobile={<MobileDrawer
              onClose={() => setExpandedId(null)}
              expandedId={expandedId} />}
          >
          </MegaMenuNavbar>
        </div>
      </nav >

      {/* Background Layer & Effect */}
      < div className={`hidden md:block fixed top-0 z-[80] ${expandedId ? "opacity-100 backdrop-blur-xl md:backdrop-blur-[30px] w-screen h-screen" : "opacity-0"} noBar bg-lightColor/30 dark:bg-lightColor/20 transition-opacity duration-300`
      } />
      < div className={`${expandedId ? "md:scale-105" : "md:scale-100"} noBar overflow-hidden md:transform md:origin-top md:transition-transform md:duration-500 md:ease-in-out`}>
        {children}
      </div >
    </>
  );
};