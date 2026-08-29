import Sidebar from "../../components/DashboardSidebar";
import useAuth from '../../hooks/useAuth'
import Topbar from "../../components/DashboardTopbar";


function Dashboard() {
    const { user } = useAuth();
    
    return (
        <div className="flex h-screen bg-gradient-to-r from-lime-200 via-sky-100 to-indigo-200 p-2">
            <Sidebar />

            <div className="flex flex-1 flex-col px-2">
                <Topbar title="Dashboard" titleMessage={`Witaj ponownie, ${user?.user_metadata.name}`}>
                    <div className="">

                    </div>
                </Topbar>

                <main className="mt-2 flex-1 rounded-3xl shadow-sm bg-white">
                    
                </main>
            </div>
        </div>
    )
}

export default Dashboard