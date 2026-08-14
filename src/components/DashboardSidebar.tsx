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
        <section className='flex h-full flex-col gap-4 p-4 bg-sky-50 rounded-2xl border border-zinc-100 shadow-sm justify-between'>

            <h2 className="font-bold text-xl text-sky-900">Fitness-tracker</h2>

            <nav className="mt-8 flex flex-1 flex-col gap-4">
                {navItems.map((item) => (
                    <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => isActive 
                    ? "rounded-xl bg-sky-200 px-4 py-3 text-sky-700 font-medium"
                    : "rounded-xl px-4 py-3 text-zinc-600 hover:bg-sky-100 hover:text-sky-700 transition-colors"}>
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            <button type="button" className='hover:bg-sky-100 hover:text-sky-700 text-zinc-600 px-4 py-3 rounded-xl cursor-pointer' onClick={logout}>
                Wyloguj się
            </button>
        </section>
    )
}

export default Sidebar;