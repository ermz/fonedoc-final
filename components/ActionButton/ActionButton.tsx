import Link from "next/link";
import { SelectedPage } from '@/types/types';

interface Props {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({ children, setSelectedPage }: Props) => {
    return (
        <Link
            href="/"
            className="rounded-md bg-secondary px-10 py-2 hover:bg-primary-500 hover:text-white"
        >
            {children}
        </Link>
    )
}

export default ActionButton

