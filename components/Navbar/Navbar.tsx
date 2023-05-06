'use client'

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logowhite from "@/public/logowhite.png";
import Link from 'next/link';
import NavLink from "../Navbar/NavLink"

import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/components/ActionButton/ActionButton';

interface Props {
    
}

enum SelectedPage {
    Home = "",
    Contact = "contact",
    Repair = "repair",
    About = "about"
}

const Navbar = (props: Props) => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <nav>
            <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                Navbar
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* Left Side */}
                        <Image className="w-28" alt="logo" src={logowhite} />
                        {/* Right Side */}
                        {isAboveMediumScreens ? (
                            <div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <NavLink
                                        page="Home"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <NavLink
                                        page="Contact"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <NavLink
                                        page="Repair"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <NavLink
                                        page="About"
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign in</p>
                                    <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                                </div>
                            </div> ) : (
                            <button
                                className="rounded-full bg-secondary p-2"
                                onClick={() => setIsMenuToggled(!isMenuToggled)}
                            >
                                <Bars3Icon className="h-6 w-6 text-white" />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile Menu Modal */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    <div className="flex justify-end p-12">
                        <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon className="h-6 w-6 text-gray-400" />
                        </button>
                    </div>

                    {/* Menu Items */}
                    <div className={`ml-[33%] flex flex-col gap-10 text-2xl`}>
                        <NavLink
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <NavLink
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <NavLink
                            page="Repair"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <NavLink
                            page="About"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar;