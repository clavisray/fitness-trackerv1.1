import { useState } from "react";
import useAuth from "../hooks/useAuth";
import UserDropdown from "./UserDropdown";
import { FaRegBell } from "react-icons/fa";
import Notifications from "./Notifications";
import NotificationsDropdown from "./NotificationsDropdown";

type TopbarProps = {
    title: string;
    titleMessage?: string;
    children: React.ReactNode;
};

function Topbar({ title, titleMessage, children }: TopbarProps) {
    const { user } = useAuth();

    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

    const toggleUserDropdown = () => {
        setIsUserDropdownOpen(prev => !prev);
    };

    const toggleNotifications = () => {
        setIsNotificationsOpen(prev => !prev);
    };

    const userName = user?.user_metadata.name as string | undefined;
    const initials = userName
    ?.split(" ")
    .map(w => w[0])
    .join("");

    // console.log(initials);

    return (
            <div className="grid h-24 grid-cols-[1fr_2fr_1fr] items-center bg-transparent px-6">
                {/* left side */}
            <div>
                <h1 className="text-2xl">
                    {title}
                </h1>

                <p className="text-zinc-500">
                    {titleMessage}
                </p>
            </div>

            {/* middle notch */}
            <div className="flex h-20 items-center justify-center rounded-3xl bg-white px-6 py-3">
                {children}
            </div>

            {/* right side notifications */}
            <div className="flex justify-end items-center gap-4">
                <div className="relative">
                    <Notifications 
                    onClick={toggleNotifications}
                    icon={<FaRegBell size={20} className="cursor-pointer" />}
                    />
                    {isNotificationsOpen && (
                        <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl bg-white shadow-lg">
                            <NotificationsDropdown />
                        </div>
                    )}

                </div>
                
                <div className="relative">
                    <button onClick={toggleUserDropdown}>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white font-semibold cursor-pointer">
                            {initials}
                        </div>
                    </button>
                    {isUserDropdownOpen && (
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