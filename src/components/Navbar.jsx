"use client"
import Artboard2 from '../public/IMG/Artboard2.png';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { RiCustomerServiceFill } from 'react-icons/ri';

export const Navbar = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

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

  const isActive = (pathname) => router.pathname === pathname;

  return (
    <>
      <nav className={`font-quicksand fixed w-full z-50 top-0 start-0 ${isScrolled ? 'bg-[#dcdcdc70] backdrop-blur-lg' : 'sm:bg-transparent backdrop-blur-lg lg:bg-transparent'}`}>
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <a href='/' className="flex items-center space-x-3 rtl:space-x-reverse p-1">
            <Image src={Artboard2} className="" width={40} height={40} alt="Ganesha Logo" />
            <span className="self-center text-[#ffffff] text-2xl font-semibold blackspace-nowrap">
              {/* GaneshaConsulting */}
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-revers">
            <a
              href='/contact'
              className={`hidden lg:visible text-gray-800 bg-[#ffffff81] backdrop-blur-sm hover:bg-[#e9b3ee] focus:ring-4 focus:outline-none focus:ring-violet-300 font-medium rounded-full text-sm px-4 py-2 text-center md:inline-block ${isActive('/contact') && 'border-b-2 border-violet-300'}`}
            >
              Hubungi Kami
            </a>
            <a
              href='/contact'
              className="visible lg:hidden px-0 py-2 text-center md:inline-block"
            >
              <span><RiCustomerServiceFill size={25} color='grey' /></span>
            </a>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center bg-[#fff] rounded-3xl md:bg-transparent lg:bg-transparent justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
              <li>
                <a
                  href='/'
                  className={`block py-2 px-3 text-gray-800 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-[#f599ff] md:p-0 ${isActive === '/' ? "text-violet-800 border-b-2 border-violet-300 " : "text-gray-800"}`}
                  aria-current="page"
                >
                  GaneshaConsulting
                </a>
              </li>
              <li>
                <a
                  href='/all-products'
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  className={`block py-2 px-3 text-gray-800 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-[#f599ff] md:p-0 ${isActive('/all-products') && 'border-b-2 border-violet-300'}`}
                  type="button"
                >
                  Produk & Layanan
                </a>
                {/* Dropdown menu */}
                <div
                  id="dropdownHover"
                  className={`z-10 hidden bg-[#ffffff] rounded-xl text-gray-800 divide-y divide-gray-100 shadow w-fit`}
                >
                  <ul
                    className="py-2 text-sm text-gray-800"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <a
                        href="/all-products/sosmed"
                        className="block px-4 py-2 hover:bg-[#762a7d72]"
                      >
                        Social Media Management
                      </a>
                    </li>
                    <li>
                      <a
                        href="/all-products/web"
                        className="block px-4 py-2 hover:bg-[#762a7d72]"
                      >
                        Website Development
                      </a>
                    </li>
                    <li>
                      <a
                        href="/all-products/legalitas"
                        className="block px-4 py-2 hover:bg-[#762a7d72]"
                      >
                        Legalitas Bisnis
                      </a>
                    </li>
                    <li>
                      <a
                        href="/all-products/legalitas/badan-usaha"
                        className="block px-4 py-2 hover:bg-[#762a7d72]"
                      >
                        Badan Usaha Lainnya
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href='/all-products/legalitas'
                  id="dropdownHoverButton2"
                  data-dropdown-toggle="dropdownHover2"
                  data-dropdown-trigger="hover"
                  className={`block py-2 px-3 text-gray-800 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-[#f599ff] md:p-0 ${isActive('/all-products/legalitas') && 'border-b-2 border-violet-300'}`}
                  type="button"
                >
                  Legalitas
                </a>
                {/* Dropdown menu */}
                <div
                  id="dropdownHover2"
                  className={`z-10 hidden bg-[#ffffff] rounded-xl text-gray-800 divide-y divide-gray-100 shadow w-fit`}
                >
                  <ul
                    className="py-2 text-sm text-gray-800"
                    aria-labelledby="dropdownHoverButton2"
                  >
                    <li>
                      <a
                        href="/all-products/legalitas/pendirian-pt"
                        className="block px-4 py-2 hover:bg-[#762a7d72]"
                      >
                        Legalitas PT
                      </a>
                    </li>
                    <li>
                      <a
                        href="/all-products/legalitas/pendirian-cv"
                        className="block px-4 py-2 hover:bg-[#762a7d72]"
                      >
                        Legalitas CV
                      </a>
                    </li>
                    <li>
                      <a
                        href="/all-products/legalitas/badan-usaha"
                        className="block px-4 py-2 hover:bg-[#762a7d72]"
                      >
                        Legalitas Badan Usaha Lainnya
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href='/price-list'
                  className={`block py-2 px-3 text-gray-800 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-[#f599ff] md:p-0 ${isActive('/price-list') && 'border-b-2 border-violet-300'}`}
                >
                  List Harga
                </a>
              </li>
              {/* <li>
                <a
                  href='/karir'
                  className={`block py-2 px-3 text-gray-800 rounded hover:bg-slate-100 md:hover:bg-transparent md:hover:text-[#f599ff] md:p-0 ${isActive('/karir') && 'border-b-2 border-violet-300'}`}
                >
                  Karir
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};
