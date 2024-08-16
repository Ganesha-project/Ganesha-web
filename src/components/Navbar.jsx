'use client'
import Link from 'next/link';
import Image from 'next/image';
import Artboard2 from '../public/IMG/Artboard2.png';
import ThemeSwitch from './ThemeSwitch';
import { useState, useEffect } from 'react';
import { RiCustomerServiceFill } from 'react-icons/ri';
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { NavLinks } from '@/app/Database';
import { HiMenuAlt2 } from 'react-icons/hi';
import { ExpandableButton } from './ExpandableButton';
import { usePathname } from "next/navigation";
import { Title } from './Title';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
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
        ${isScrolled ? 'bg-[#ffffff70] dark:bg-[#00000070] backdrop-blur-lg shadow-mainShadow' : 'sm:bg-transparent lg:bg-transparent'}
        `}>
        <div className="navbar-start">

          <div className="dropdown">
            <div className="drawer">
              <input id="my-drawer" type="checkbox" className="drawer-toggle" />
              <div tabIndex={0} role="button" className="drawer-content btn btn-ghost btn-circle lg:hidden">
                <label htmlFor="my-drawer" className={`drawer-button ${isScrolled ? '!text-gray-900 dark:!text-white' : ''}`}>
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
                  <div className='flex flex-col gap-3 font-medium'>
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

            {/* Mega Menu Trigger */}
            <div className="relative group">
              <a
                href="javascript:void(0)"
                className="gap-1 py-2 px-3 flex items-center text-gray-800 dark:text-white rounded hover:bg-slate-100 md:hover:bg-transparent dark:hover:text-baseColor hover:text-mainColor md:p-0"
              >
                Produk & Layanan
                <span className='group-hover:rotate-180 duration-300 ease-in-out'>
                  <IoIosArrowDown />
                </span>
              </a>
              {/* Mega Menu Dropdown */}
              <div className='-z-50 fixed left-0 right-0 top-0 pt-10 transform opacity-0 max-h-0 pointer-events-none group-hover:pointer-events-auto group-hover:max-h-[800px] group-hover:opacity-100 group-hover:h-screen transition-all duration-300 ease-out origin-top bg-white dark:bg-black dark:bg-opacity-15 bg-opacity-0 backdrop-blur-lg'>
                <div
                  className={"-z-40 fixed left-0 right-0 top-0 pt-10 transform opacity-0 max-h-0 pointer-events-none group-hover:pointer-events-auto group-hover:max-h-[800px] group-hover:opacity-100 transition-all duration-500 ease-in-out origin-top bg-white dark:bg-black backdrop-blur-lg shadow-mainShadow"}
                >
                  <div className="flex justify-center">
                    <div className="grid gap-6 p-8 max-w-7xl w-full mx-auto">

                      <div className="grid grid-cols-2">
                        {NavLinks.productsAndServices.map(link => (
                          <Link href={link.href} key={link.href} className='flex items-center px-3 py-3 gap-3 duration-300 ease-out hover:bg-baseColor dark:hover:bg-baseColor hover:bg-opacity-20 dark:hover:bg-opacity-35 hover:shadow-mainShadow rounded-box'>
                            <div className={`${link.accent} h-12 min-w-12 min-h-12 w-12 text-2xl rounded-lg flex dark:bg-opacity-70 items-center justify-center`}>
                              {link.icon}
                            </div>
                            <div
                              className="text-lg font-semibold flex flex-col"
                            >
                              {link.label}
                              <span className='text-sm font-normal dark:text-gray-400 text-gray-800 truncate-last-1'>
                                {link.desc}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <a
                href="javascript:void(0)"
                className="gap-1 py-2 px-3 flex items-center text-gray-800 dark:text-white rounded hover:bg-slate-100 md:hover:bg-transparent dark:hover:text-baseColor hover:text-mainColor md:p-0"
              >
                Legalitas
                <span className='group-hover:rotate-180 duration-300 ease-in-out'>
                  <IoIosArrowDown />
                </span>
              </a>
              {/* Mega Menu Dropdown */}
              <div className='hover:h-0 -z-50 fixed left-0 right-0 top-0 pt-10 transform opacity-0 max-h-0 pointer-events-none group-hover:pointer-events-auto group-hover:max-h-[800px] group-hover:opacity-100 group-hover:h-screen transition-all duration-300 ease-out origin-top bg-white dark:bg-black dark:bg-opacity-15 bg-opacity-0 backdrop-blur-lg'>
                <div
                  className="-z-40 fixed left-0 right-0 top-0 pt-10 transform opacity-0 max-h-0 pointer-events-none group-hover:pointer-events-auto group-hover:max-h-[800px] group-hover:opacity-100 transition-all duration-500 ease-in-out origin-top bg-white dark:bg-black backdrop-blur-lg shadow-mainShadow"
                >
                  <div className="flex justify-center">
                    <div className="grid gap-6 p-8 max-w-7xl w-full mx-auto">

                      <div className="grid grid-cols-2">
                        {NavLinks.legalities.map(link => (
                          <Link href={link.href} key={link.href} className='flex items-center px-3 py-3 gap-3 duration-300 ease-out hover:bg-baseColor dark:hover:bg-baseColor hover:bg-opacity-20 dark:hover:bg-opacity-35 hover:shadow-mainShadow rounded-box'>
                            <div className={`${link.accent} h-12 min-w-12 min-h-12 w-12 text-2xl rounded-lg flex dark:bg-opacity-70 items-center justify-center`}>
                              {link.icon}
                            </div>
                            <div
                              className="text-lg font-semibold flex flex-col"
                            >
                              {link.label}
                              <span className='text-sm font-normal dark:text-gray-400 text-gray-800 truncate-last-1'>
                                {link.desc}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

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
            <span className='md:block hidden font-semibold text-gray-800 dark:text-white bg-[#ffffff26] hover:bg-mainColor hover:text-white bg-gray-200 bg-opacity-50 backdrop-blur-sm ease-in-out duration-300 dark:hover:bg-secondaryColor px-4 py-2 rounded-full'>
              Contact
            </span>
            <span data-tip={'Contact Us'} className='block md:hidden tooltip tooltip-bottom p-2 rounded-full bg-white bg-opacity-25 backdrop-blur-md hover:bg-opacity-100 hover:bg-mainColor hover:text-white duration-300 dark:hover:bg-secondaryColor'>
              <RiCustomerServiceFill className='text-xl' />
            </span>
          </a>
          <Link
            href={'/services'}
            data-tip={'Search'}
            className='tooltip tooltip-bottom p-2 rounded-full bg-white bg-opacity-25 backdrop-blur-md hover:bg-opacity-100 hover:bg-mainColor hover:text-white duration-300 dark:hover:bg-secondaryColor'>
            <IoIosSearch className='text-xl' />
          </Link>
          <ThemeSwitch />
        </div>
      </nav >
    </>
  );
};

// import { useState } from 'react';
// import Link from 'next/link';

// export const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gray-800">
//       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
//         <div className="relative flex items-center justify-between h-16">
//           <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
//             <div className="flex-shrink-0">
//               <div href="/">
//                 <a className="text-white text-xl font-bold">Logo</a>
//               </div>
//             </div>
//             <div className="hidden sm:block sm:ml-6">
//               <div className="flex space-x-4">
//                 <div href="/">
//                   <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
//                 </div>

//                 {/* Mega Menu Trigger */}
//                 <div className="relative group">
//                   <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
//                     Services
//                   </button>
//                   {/* Mega Menu Dropdown */}
//                   <div
//                     className="fixed left-0 right-0 top-16 transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 ease-out origin-top bg-white shadow-lg z-20"
//                   >
//                     <div className="flex justify-center">
//                       <div className="grid gap-6 p-8 max-w-7xl w-full mx-auto bg-white rounded-lg shadow-lg">
//                         <div href="/service1">
//                           <a className="p-3 -m-3 block rounded-md hover:bg-gray-50">
//                             <p className="text-xl font-medium text-gray-900">Service 1</p>
//                             <p className="mt-1 text-sm text-gray-500">Description for service 1</p>
//                           </a>
//                         </div>
//                         <div href="/service2">
//                           <a className="p-3 -m-3 block rounded-md hover:bg-gray-50">
//                             <p className="text-xl font-medium text-gray-900">Service 2</p>
//                             <p className="mt-1 text-sm text-gray-500">Description for service 2</p>
//                           </a>
//                         </div>
//                         <div href="/service3">
//                           <a className="p-3 -m-3 block rounded-md hover:bg-gray-50">
//                             <p className="text-xl font-medium text-gray-900">Service 3</p>
//                             <p className="mt-1 text-sm text-gray-500">Description for service 3</p>
//                           </a>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div href="/about">
//                   <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
//                 </div>
//                 <div href="/contact">
//                   <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
