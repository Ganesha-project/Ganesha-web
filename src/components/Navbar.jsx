'use client'
import Image from 'next/image';
import Artboard2 from '../public/IMG/Artboard2.png';
import ThemeSwitch from './ThemeSwitch';
import { useState, useEffect } from 'react';
import { RiCustomerServiceFill } from 'react-icons/ri';
import { IoIosSearch } from "react-icons/io";
import { dataContact, NavLinks } from '@/app/Database';
import { HiOutlineMenu } from 'react-icons/hi';
import { usePathname } from "next/navigation";
import { MegaMenuNavbar } from './MegaMenuNavbar';
import { SearchNavbar } from './SearchNavbar';
import { MobileDrawer } from './MobileDrawer';
import { SlSocialInstagram } from 'react-icons/sl';
import Link from 'next/link';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
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
      <nav className={`navbar fixed 2xl:px-80 md:px-24 w-full z-[100] top-0 start-0 ease-in-out duration-300
        ${isScrolled && isExpanded !== true ? 'bg-[#ffffff70] dark:bg-[#00000070] backdrop-blur-lg shadow-mainShadow' : 'bg-transparent sm:bg-transparent lg:bg-transparent'}
        `}>
        <div className="navbar-start">
          <a className="ml-2 md:ml-0 text-xl duration-200 ease-in-out hover:drop-shadow-[0px_0px_15px_#d093d4] dark:hover:drop-shadow-[0px_0px_15px_#CCB3CF] hover:scale-[1.1]" href='/'>
            <Image src={Artboard2} width={40} height={40} alt="Ganesha Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">
            {NavLinks.main.slice(0, 1).map(link => (
              <li key={link.href} className='relative flex flex-col items-center group'>
                <a
                  href={link.href}
                  className={`block py-2 px-3 text-gray-800 dark:text-white rounded hover:bg-slate-100 md:hover:bg-transparent  dark:hover:text-baseColor hover:text-mainColor md:p-0`}
                  aria-current="page"
                >
                  {link.label}
                </a>
                <span className={`${path === link.href ? 'scale-100' : 'scale-0'} absolute bottom-[-3px] w-10 h-[3px] ease-in-out duration-300 group-hover:scale-100 scale-0 dark:bg-baseColor bg-mainColor rounded-full`}></span>
              </li>
            ))}
            <MegaMenuNavbar
              title="Produk & Layanan"
              label={'Our Service Collections'}
              links={NavLinks.productsAndServices}
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
            <MegaMenuNavbar
              title="Legalitas"
              label={'Our Legality Services'}
              links={NavLinks.legalities}
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
            <li className='relative flex flex-col items-center group'>
              <a
                href={'/activity'}
                className={`block py-2 px-3 text-gray-800 dark:text-white rounded hover:bg-slate-100 md:hover:bg-transparent  dark:hover:text-baseColor hover:text-mainColor md:p-0`}
                aria-current="page"
              >
                Activity
              </a>
              <span className={`${path === '/activity' ? 'scale-100' : 'scale-0'} absolute bottom-[-3px] w-10 h-[3px] ease-in-out duration-300 group-hover:scale-100 scale-0 dark:bg-baseColor bg-mainColor rounded-full`}></span>
            </li>
            <li className='relative flex flex-col items-center group'>
              <a
                href={'/artikel'}
                className={`block py-2 px-3 text-gray-800 dark:text-white rounded hover:bg-slate-100 md:hover:bg-transparent  dark:hover:text-baseColor hover:text-mainColor md:p-0`}
                aria-current="page"
              >
                Artikel
              </a>
              <span className={`${path === '/artikel' ? 'scale-100' : 'scale-0'} absolute bottom-[-3px] w-10 h-[3px] ease-in-out duration-300 group-hover:scale-100 scale-0 dark:bg-baseColor bg-mainColor rounded-full`}></span>
            </li>
            <MegaMenuNavbar
              title="About"
              label={'Get to know us'}
              links={NavLinks.about}
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          </ul>
        </div>
        <div className="navbar-end pr-3 space-x-2">

          <Link
            href='/contact'
            className={`flex items-center `}
          >
            <span className='md:block hidden font-semibold text-gray-800 dark:text-white bg-[#ffffff26] hover:bg-mainColor hover:text-white bg-gray-200 bg-opacity-50 backdrop-blur-sm ease-in-out duration-300 dark:hover:bg-secondaryColor px-4 py-2 rounded-full'>
              Contact
            </span>
            <span data-tip={'Contact Us'} className='block md:hidden tooltip tooltip-bottom p-2 rounded-full bg-white bg-opacity-40 dark:bg-opacity-25 backdrop-blur-md hover:bg-opacity-100 hover:bg-mainColor hover:text-white duration-300 dark:hover:bg-secondaryColor'>
              <RiCustomerServiceFill className='text-xl' />
            </span>
          </Link>

          <Link
            href={dataContact.media[0].link}
            data-tip={'Our Instragram'}
            className='block md:hidden tooltip tooltip-bottom p-2 rounded-full bg-white bg-opacity-40 dark:bg-opacity-25 backdrop-blur-md hover:bg-opacity-100 hover:bg-mainColor hover:text-white duration-300 dark:hover:bg-secondaryColor'
          >
            <SlSocialInstagram className='text-xl' />
          </Link>

          <div className='hidden md:block'>
            <MegaMenuNavbar
              icon={<IoIosSearch className='text-xl' />}
              iconClassName={'p-2 rounded-full bg-white bg-opacity-25 backdrop-blur-md hover:bg-opacity-100 hover:bg-mainColor hover:text-white duration-300 dark:hover:bg-secondaryColor '}
              arrowVisibility={'hidden'}
              children={
                <SearchNavbar />
              }
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          </div>
          <ThemeSwitch />
          <div className='md:hidden block'>
            <MegaMenuNavbar
              icon={<HiOutlineMenu className='text-xl' />}
              iconClassName={'p-2 rounded-full bg-gray-200 bg-opacity-40 dark:bg-opacity-25 backdrop-blur-md hover:bg-opacity-100 hover:bg-mainColor hover:text-white duration-300 dark:hover:bg-secondaryColor '}
              arrowVisibility={'hidden'}
              children={
                <MobileDrawer />
              }
              isExpanded={isExpanded}
              setIsExpanded={setIsExpanded}
            />
          </div>
        </div>
      </nav >
    </>
  );
};