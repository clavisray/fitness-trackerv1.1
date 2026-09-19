import Sidebar from "../../components/DashboardSidebar";
import useAuth from '../../hooks/useAuth'
import Topbar from "../../components/DashboardTopbar";
import { Link, NavLink } from 'react-router-dom'


function Dashboard() {
    const { user } = useAuth();

    const dashboardWidgets = [
        { label: "Calendar", path: "/calendar"},
        { label: "Diet", path: "/diet"},
        { label: "Profile", path: "/profile"},
        { label: "Settings", path: "/settings"},
    ]
    
    return (
        <div className="flex h-screen bg-gradient-to-r from-lime-200 via-sky-100 to-indigo-200 p-2">
            <Sidebar />

            <div className="flex flex-1 flex-col px-2">
                <Topbar title="Dashboard" titleMessage={`Witaj ponownie, ${user?.user_metadata.name}`}>
                    <div className="">

                    </div>
                </Topbar>

                <main className="mt-2 flex-1 min-h-0 rounded-3xl">
                    <div className="grid h-full grid-cols-2 auto-rows-fr gap-4 p-4">
                        {dashboardWidgets.map((widget) => (
                            <NavLink
                                key={widget.path}
                                to={widget.path}
                                end={widget.path === "/"}
                                className="bg-white/40 backdrop-blur-md border border-white/40 px-4 py-4 cursor-pointer rounded-3xl shadow-sm flex items-center justify-center text-center hover:opacity-50 transition"                                >
                                    {widget.label}
                            </NavLink>
                        ))}
                    </div>
                    
                </main>
            </div>
        </div>
    )
}

export default Dashboard