"use client";
import Link from "next/link";
import Image from "next/image";
import { Title } from "../Title";
import { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";

export const WebPackageWork = ({ text1, text }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [groupedPackages, setGroupedPackages] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(1);
  const [scrollTo, setScrollto] = useState(10);

  // State untuk setiap section carousel
  const [carouselStates, setCarouselStates] = useState({});

  useEffect(() => {
    const fetchWebProjects = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_APIURL}/business/projects?serviceId=3&limit=20`
        );
        const result = await response.json();

        if (result && result.data) {
          console.log("Fetched web projects:", result);
          setData(result.data);

          // Group projects by package type
          const packageGroups = {};

          result.data.forEach((project) => {
            project.packages?.forEach((pkg) => {
              const packageType = pkg?.package?.type;
              if (packageType) {
                if (!packageGroups[packageType]) {
                  packageGroups[packageType] = [];
                }
                packageGroups[packageType].push({
                  ...project,
                  currentPackageType: packageType,
                });
              }
            });
          });

          // Convert to array and initialize carousel states
          const grouped = Object.entries(packageGroups).map(
            ([type, projects]) => ({
              packageType: type,
              projects: projects,
            })
          );

          setGroupedPackages(grouped);

          // Initialize carousel index for each package type
          const initialStates = {};
          grouped.forEach((group) => {
            initialStates[group.packageType] = 0;
          });
          setCarouselStates(initialStates);
        }
      } catch (error) {
        console.error("Error fetching web projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWebProjects();
  }, []);

  // Update itemsToShow based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsToShow(2);
        setScrollto(30);
      } else {
        setItemsToShow(1);
        setScrollto(15);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrevClick = (packageType) => {
    setCarouselStates((prev) => ({
      ...prev,
      [packageType]: Math.max(0, prev[packageType] - 1),
    }));
  };

  const handleNextClick = (packageType, maxLength) => {
    setCarouselStates((prev) => ({
      ...prev,
      [packageType]: Math.min(maxLength - itemsToShow, prev[packageType] + 1),
    }));
  };

  if (loading) {
    return (
      <section className="bg-neutral-100 dark:bg-darkColor h-fit md:py-20 py-10 md:my-10 my-5">
        <div className="md:mx-24 mx-5 2xl:mx-80 text-center">
          <p className="text-xl">Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-neutral-100 dark:bg-darkColor h-fit md:py-20 py-10 md:my-10 my-5">
      {groupedPackages.map((group, groupIdx) => {
        // const result = group.packageType.split(" ").join("-").toLowerCase();
        // console.log("GROUP:", result)
        const currentIndex = carouselStates[group.packageType] || 0;

        return (
          <div
            id={group.packageType.split(" ").join("-").toLowerCase()}
            key={groupIdx}
            className={groupIdx > 0 ? "mt-8 md:mt-12" : ""}
          >
            {/* Header Section */}
            <div className="md:mx-24 mx-5 2xl:mx-80 flex md:items-center justify-between md:flex-row flex-col">
              <Title text1="Explore" text={group.packageType} />
              <div className="hidden md:block">
                <div className="flex justify-end w-full items-center gap-3">
                  <button
                    onClick={() => handlePrevClick(group.packageType)}
                    className={`${
                      currentIndex === 0
                        ? "opacity-50 cursor-not-allowed"
                        : "opacity-100"
                    } bg-radial dark:from-black dark:hover:from-sky-900 hover:from-sky-200 dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}
                  >
                    <IoIosArrowBack className="text-2xl md:text-[2rem]" />
                  </button>
                  <button
                    onClick={() =>
                      handleNextClick(group.packageType, group.projects.length)
                    }
                    className={`${
                      currentIndex >= group.projects.length - itemsToShow
                        ? "opacity-50 cursor-not-allowed"
                        : "opacity-100"
                    } bg-radial dark:from-black dark:hover:from-sky-900 hover:from-sky-200 dark:to-darkColor from-white to-neutral-100 dark:text-neutral-100 text-neutral-700 md:px-7 md:py-7 px-5 py-5 rounded-full hover:scale-95 duration-300 ease-in-out`}
                  >
                    <IoIosArrowForward className="text-2xl md:text-[2rem]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Carousel Section */}
            <div className="relative carousel w-[100%]">
              <div
                className="grid grid-flow-col gap-3 transform transition-transform duration-500 ease-in-out py-10"
                style={{
                  transform: `translateX(-${
                    currentIndex * (scrollTo / itemsToShow)
                  }%)`,
                }}
              >
                {group.projects.map((project, idx) => (
                  <Link
                    key={idx}
                    href={project.link}
                    className={`duration-300 ease-in-out hover:scale-[1.05] hover:shadow-mainShadow origin-bottom space-y-10 p-3 md:p-5 bg-gradient-to-b min-w-[80lvw] md:min-w-[40lvw] h-fit from-white to-neutral-100 dark:from-black dark:to-darkColor rounded-3xl w-fit 
                      ${idx === 0 ? "ml-5 md:ml-24 2xl:ml-80" : ""} 
                      ${
                        idx === group.projects.length - 1
                          ? "mr-5 md:mr-24 2xl:mr-80"
                          : ""
                      }`}
                  >
                    <Image
                      className="rounded-xl w-full h-fit object-cover"
                      width={500}
                      height={500}
                      src={project.preview}
                      alt={project.name}
                    />
                    <div>
                      <h1 className="text-xl md:text-2xl font-bold">
                        {project.name}
                      </h1>
                      <h2 className="text-sm">{project.companyName}</h2>
                      <h2 className="md:text-lg text-sm my-2 px-3 py-1 bg-gradient-to-t font-medium dark:from-neutral-700 from-neutral-200 to-transparent rounded-full w-fit">
                        {project.currentPackageType}
                      </h2>
                      <button className="text-sm md:text-lg hover:brightness-75 flex items-center gap-2 group dark:hover:brightness-125 duration-200 px-3 py-1 bg-gradient-to-tl from-neutral-200 via-neutral-100 to-sky-200 dark:from-darkColor dark:via-darkColor dark:to-sky-900 rounded-full text-neutral-600 dark:text-white font-bold">
                        Visit{" "}
                        <FaLongArrowAltRight className="group-hover:scale-125 origin-left duration-200 ease-in-out" />
                      </button>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
