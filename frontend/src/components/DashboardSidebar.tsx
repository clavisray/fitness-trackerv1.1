import { NavLink } from "react-router-dom";
import useAuth from "../hooks/useAuth";

function Sidebar() {
    const { logout } = useAuth();

    const navItems = [
        { label: "Dashboard", path:"/dashboard"},
        { label: "Kalendarz", path:"/calendar"},
        { label: "Dieta", path: "/diet"},
        { label: "Profil", path: "/profile"},
        { label: "Ustawienia", path: "/settings"},
    ]
    return (
        <section className='flex h-full flex-col gap-4 p-4 bg-white/40 backdrop-blur-md rounded-2xl border border-white/20 shadow-sm justify-between'>

            <h2 className="font-bold text-xl text-sky-900">Fitness-tracker</h2>

            <nav className="mt-8 flex flex-1 flex-col gap-4">
                {navItems.map((item) => (
                    <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => isActive 
                    ? "rounded-xl bg-white/20 backdrop-blur-md border border-white/40 shadow-sm px-4 py-3 text-sky-900 font-medium"
                    : "rounded-xl px-4 py-3 text-sky-900 hover:bg-white/20 hover:backdrop-blur-md transition-colors"}>
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            <button type="button" className='rounded-xl px-4 py-3 text-sky-900 hover:bg-white/20 hover:backdrop-blur-md transition-colors cursor-pointer' onClick={logout}>
                Wyloguj się
            </button>
        </section>
    )
}

export default Sidebar;