import { useState } from "react";
import useAuth from "../hooks/useAuth";
import UserDropdown from "./UserDropdown";
import { FaRegBell } from "react-icons/fa";

type TopbarProps = {
    title: string;
    titleMessage?: string;
};

function Topbar({ title, titleMessage }: TopbarProps) {
    const { user } = useAuth();

    const [isDropdown, setIsDropdown] = useState(false);

    const toggleDropdown = () => {
        setIsDropdown(prev => !prev);
    };

    const userName = user?.user_metadata.name as string | undefined;
    const initials = userName
    ?.split(" ")
    .map(w => w[0])
    .join("");

    console.log(initials);

    return (
        <div className="flex items-center rounded-xl justify-between border-b border-zinc-100 bg-white px-6 py-4">
            <div>
                <h1 className="text-2xl">
                    {title}
                </h1>

                <p className="text-zinc-500">
                    {titleMessage}
                </p>
            </div>

            <div className="flex items-center gap-4">

                <FaRegBell size={20} className="cursor-pointer"/>
                
                <div className="relative">
                    <button onClick={toggleDropdown}>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white font-semibold cursor-pointer">
                            {initials}
                        </div>
                    </button>
                    {isDropdown && (
                        <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl bg-white shadow-lg">
                            <UserDropdown />
                        </div>
                    )}
                    
                </div>
                
                
            </div>
            
        </div>
    )
}
    export default Topbar;