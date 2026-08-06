import { useNavigate } from "react-router-dom"
import Sidebar from "../../components/DashboardSidebar";
import useAuth from '../../hooks/useAuth'
import Topbar from "../../components/DashboardTopbar";


function Dashboard() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();
    
    console.log(user);
    console.log(user?.email);
    console.log(user?.id);
    console.log(user?.user_metadata);
    console.log(user?.user_metadata.name);
    return (
        <div className="flex h-screen bg-zinc-50 p-2">
            <Sidebar />

            <div className="flex flex-1 flex-col px-2">
                <Topbar title="Dashboard" titleMessage={`Witaj ponownie, ${user?.user_metadata.name}`}/>

                <main className="mt-2 flex-1 rounded-3xl shadow-sm">
                    
                </main>
            </div>
        </div>
    )
}

export default Dashboard