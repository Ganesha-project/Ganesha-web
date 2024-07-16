'use client'
import Link from 'next/link';
import Image from 'next/image';
import Artboard2 from '../public/IMG/Artboard2.png';
import ThemeSwitch from './ThemeSwitch';
import { useState, useEffect } from 'react';
import { RiCustomerServiceFill } from 'react-icons/ri';
import { IoIosArrowDown } from "react-icons/io";
import { NavLinks } from '@/app/Database';
import { HiMenuAlt2 } from 'react-icons/hi';
import { ExpandableButton } from './ExpandableButton';
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const path = usePathname();
  const product = path.startsWith('/all-products')
  const legal = path.startsWith('/legalitas')

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
      <nav className={`navbar fixed 2xl:px-80 md:px-24 w-full z-50 top-0 start-0 ease-in-out duration-300
        ${isScrolled ? 'bg-[#ffffff70] dark:bg-[#00000070] backdrop-blur-lg shadow-mainShadow' : 'sm:bg-transparent lg:bg-transparent'}
        `}>
        <div className="navbar-start">
          <div className="dropdown">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div tabIndex={0} role="button" className="drawer-content btn btn-ghost btn-circle lg:hidden">
                <label htmlFor="my-drawer" className={`drawer-button text-white ${isScrolled ? '!text-gray-900 dark:!text-white' : ''}`}>
                  <HiMenuAlt2 size={25} />
                </label>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className={`flex z-50 flex-col p-4 w-80 min-h-full bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-50 backdrop-blur-md text-base-content rounded-r-3xl`}>
                  <div className="font-bold flex items-center gap-2 m-[-16px] p-4 mb-5 text-white bg-mainBlue rounded-tr-[30px] pt-5">
                    <Image
                      width={40}
                      height={40}
                      className=""
                      src={Artboard2}
                      alt="" />
                    <h1 className="text-xl text-mainColor dark:text-baseColor">
                      Ganesha Consulting
                    </h1>
                  </div>
                  <div className='flex flex-col gap-3  font-medium'>
                    {NavLinks.main.slice(0, 1).map(link => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className={`flex flex-col items-start group duration-200 hover:bg-white px-3 py-1 rounded-full dark:hover:bg-mainColor hover:text-mainColor dark:text-white text-gray-800 dark:hover:text-baseColor`}
                          aria-current="page"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <ExpandableButton label={'Produk & Layanan'} order={'order-last'} className={'hover:bg-white px-3 py-1 rounded-full dark:hover:bg-mainColor'}>
                        <div
                          className={`z-10 bg-[#ffffff] dark:bg-black rounded-xl mt-2 text-gray-800 dark:text-white divide-y divide-gray-100 shadow w-fit`}
                        >
                          <ul
                            className="py-2 text-sm text-gray-800 dark:text-white"
                          >
                            {NavLinks.productsAndServices.map(link => (
                              <li key={link.href}>
                                <a
                                  href={link.href}
                                  className="block px-4 py-2 m-2 duration-300 rounded-full hover:bg-[#bca0be72]"
                                >
                                  {link.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </ExpandableButton>
                    </li>
                    <li>
                      <ExpandableButton label={'Legalitas'} order={'order-last'} className={'hover:bg-white px-3 py-1 rounded-full dark:hover:bg-mainColor'}>
                        <div
                          className={`z-10 bg-[#ffffff] dark:bg-black rounded-xl mt-2 text-gray-800 dark:text-white divide-y divide-gray-100 shadow w-fit`}
                        >
                          <ul
                            className="py-2 text-sm text-gray-800 dark:text-white"
                          >
                            {NavLinks.legalities.map(link => (
                              <li key={link.href}>
                                <a
                                  href={link.href}
                                  className="block px-4 py-2 m-2 duration-300 rounded-full hover:bg-[#bca0be72]"
                                >
                                  {link.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </ExpandableButton>
                    </li>
                    {NavLinks.others.map(link => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          className={`flex flex-col items-start group duration-200 hover:bg-white px-3 py-1 rounded-full dark:hover:bg-mainColor hover:text-mainColor dark:text-white text-gray-800 dark:hover:text-baseColor`}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </div>
                </ul>
              </div>
            </div>
          </div>
          <a className="btn btn-ghost text-xl">
            <Image src={Artboard2} width={40} height={40} alt="Ganesha Logo" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
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
            <li className='dropdown'>
              <div className='relative flex flex-col items-center group'>
                <div
                  tabIndex={0}
                  role='button'
                  className={`gap-1 py-2 px-3 flex items-center text-gray-800 dark:text-white rounded hover:bg-slate-100 md:hover:bg-transparent  dark:hover:text-baseColor hover:text-mainColor md:p-0`}
                >
                  Produk & Layanan <IoIosArrowDown />
                </div>
                <span className={`${`${path === product ? 'scale-100' : 'scale-0'}`} absolute bottom-[-3px] w-10 h-[3px] ease-in-out duration-300 group-hover:scale-100 scale-0 dark:bg-baseColor bg-mainColor rounded-full`}></span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white dark:bg-black rounded-box z-[1] w-52 p-2 shadow dark:shadow-mainShadow"
              >
                {NavLinks.productsAndServices.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-[#bca0be72]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li className='dropdown'>
              <div className='relative flex flex-col items-center group'>
                <a
                  tabIndex={1}
                  role='button'
                  className={`gap-1 py-2 px-3 flex items-center text-gray-800 dark:text-white rounded hover:bg-slate-100 md:hover:bg-transparent  dark:hover:text-baseColor hover:text-mainColor md:p-0`}

                >
                  Legalitas <IoIosArrowDown />
                </a>
                <span className={`${`${path === legal ? 'scale-100' : 'scale-0'}`} absolute bottom-[-3px] w-10 h-[3px] ease-in-out duration-300 group-hover:scale-100 scale-0 dark:bg-baseColor bg-mainColor rounded-full`}></span>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-white dark:bg-black rounded-box z-[1] w-52 p-2 shadow dark:shadow-mainShadow"
              >
                {NavLinks.legalities.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-[#bca0be72]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            {NavLinks.others.map(link => (
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
          </ul>
        </div>
        <div className="navbar-end -z-20 md:z-0 pr-3 space-x-2">
          <a
            href='/contact'
            className={`flex items-center `}
          >
            <span className='md:block hidden text-gray-800 dark:text-white dark:bg-[#63636355] hover:bg-mainColor hover:text-white bg-gray-200 bg-opacity-50 backdrop-blur-sm ease-in-out duration-300 dark:hover:bg-secondaryColor px-4 py-2 rounded-full'>
              Hubungi Kami
            </span>
            <span className='md:hidden block text-xl text-gray-900 dark:text-white  dark:bg-[#63636355] hover:bg-mainColor hover:text-white bg-[#ffffff81] backdrop-blur-sm ease-in-out duration-300 dark:hover:bg-secondaryColor focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-full px-2 py-2 text-center'>
              <RiCustomerServiceFill />
            </span>
          </a>
          <ThemeSwitch />
        </div>
      </nav>
    </>
  );
};
