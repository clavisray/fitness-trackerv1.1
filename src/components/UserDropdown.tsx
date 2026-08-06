import { Link, NavLink } from 'react-router-dom'
import useAuth from '../hooks/useAuth'


function UserDropdown() {
    const { logout } = useAuth();

    const navItems = [
        { label: "Ustawienia", path:"/settings"},
        { label: "Profil", path:"/profile"},
    ]

    return (
        <div className="flex w-56 flex-col p-3">

            <nav className="flex w-full flex-col gap-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            `flex w-full items-center justify-center rounded-xl px-4 py-3 transition-colors ${
                                isActive
                                    ? "bg-sky-200 font-medium text-sky-700"
                                    : "text-zinc-600 hover:bg-sky-100 hover:text-sky-700"
                            }`
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </nav>

            <button onClick={logout} className="hover:bg-sky-100 px-4 py-3 rounded-xl cursor-pointer mt-2">
                Wyloguj się
            </button>

        </div>
    )
}

export default UserDropdown;