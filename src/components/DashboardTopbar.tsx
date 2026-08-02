import useAuth from "../hooks/useAuth";

function Topbar() {
    const { user } = useAuth();

    return (
        <div className="flex items-center rounded-xl justify-between border-b border-zinc-100 bg-white px-6 py-4">
            <div>
                <h1 className="text-2xl">
                    Dashboard
                </h1>

                <p className="text-zinc-500">
                    Witaj ponownie, {user?.user_metadata.name}
                </p>
            </div>

            <div className="flex items-center gap-4">
                <p>
                    Wyszukiwarka
                </p>

                <p>Powiadomienia</p>

                <p>Awatar</p>
            </div>
            
        </div>
    )
}
    export default Topbar;