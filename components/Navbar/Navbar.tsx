'use client'

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logowhite from "@/public/logowhite.png";
import Link from 'next/link';
import NavLink from "../Navbar/NavLink"

import Image from 'next/image';
import useMediaQuery from '@/hooks/useMediaQuery';

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
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
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
                                    <button>Become a Member</button>
                                </div>
                            </div> ) : (
                            <button>Hello</button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;