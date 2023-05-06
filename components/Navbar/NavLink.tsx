import React from 'react'
import Link from 'next/link';
import { SelectedPage } from '@/types/types';

type Props = {
    page: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}


const NavLink = ({
    page,
    selectedPage,
    setSelectedPage,
}: Props) => {
    return (
        <Link
            href={`/${page.toLowerCase() === "home" ? "" : page.toLowerCase()}`}
            className={`${selectedPage === page as SelectedPage ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
            onClick={() => setSelectedPage(page as SelectedPage)}
        >
            {page}
        </Link>
    )
}

export default NavLink
