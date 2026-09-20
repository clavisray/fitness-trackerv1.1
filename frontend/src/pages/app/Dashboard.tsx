import Sidebar from "../../components/DashboardSidebar";
import Topbar from "../../components/DashboardTopbar";

import useAuth from '../../hooks/useAuth'
import useCalendar from "../../hooks/useCalendar";

import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'


function Dashboard() {
    const { user } = useAuth();

    const {
        currentDay,
        today,
    } = useCalendar();

    const [time, setTime] = useState(new Date());


    const dashboardWidgets = [
        { label: currentDay, path: "/calendar", size: "wide", content: `${currentDay} • ${time.toLocaleTimeString("pl-PL")}`, },
        { label: "Diet", path: "/diet", size: "normal", content: `Diet-comp`, },
        { label: "Profile", path: "/profile", size: "normal", content: `Profile-comp`, },
    ]
    console.log(today.getHours(), today.getMinutes(), today.getSeconds())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);
    
    return (
        <div className="h-screen bg-gradient-to-r from-lime-200 via-sky-100 to-indigo-200 p-2">
            <div className="h-full rounded-3xl flex bg-white/40 backdrop-blur-md border border-white/40 shadow-sm p-2">
                <Sidebar />

                <div className="flex flex-1 flex-col px-2">
                    <Topbar title="Dashboard" titleMessage={`Witaj ponownie, ${user?.user_metadata.name}`}>
                        <div className="">

                        </div>
                    </Topbar>

                    <main className="mt-2 flex-1 min-h-0 rounded-3xl">
                        <div className="grid h-full grid-cols-2 auto-rows-fr gap-4">
                            {dashboardWidgets.map((widget, index) => (
                                <NavLink
                                    key={widget.path}
                                    to={widget.path}
                                    className={`
                                        bg-white/60 backdrop-blur-md border border-white/60
                                        px-4 py-4 cursor-pointer rounded-3xl shadow-sm
                                        flex items-center justify-center text-center
                                        hover:bg-white/90 transition
                                        ${widget.size === "wide" ? "col-span-2" : ""}
                                    `}
                                >
                                    {widget.content}
                                </NavLink>
                            ))}
                        </div>
                        
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Dashboard