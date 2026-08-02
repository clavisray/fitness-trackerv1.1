import { useNavigate } from "react-router-dom"
import Sidebar from "../../components/DashboardSidebar";
import useAuth from '../../hooks/useAuth'


function Dashboard() {
    const navigate = useNavigate();
    const { user, logout } = useAuth();

    const userName = user?.user_metadata.name as string | undefined;
    const initals = userName
    ?.split(" ")
    .map(w => w[0])
    .join("");

    
    
    console.log(user);
    console.log(user?.email);
    console.log(user?.id);
    console.log(user?.user_metadata);
    console.log(user?.user_metadata.name);
    return (
        <div className="flex flex-col h-screen">
            <div className="grid flex-1 w-full h-full bg-zinc-200 overflow-hidden">

                {/* lewa strona */}
                <div className="flex flex-col items-start h-full">
                    <Sidebar />
                </div>

                {/* prawa strona */}
                <div className="flex flex-col justify-center items-center w-full bg-zinc-1000">
                    <p>test</p>
                    <button onClick={logout}>
                        wyloguj się
                    </button>
                </div>

                
            </div>
        </div>
    )
}

export default Dashboard