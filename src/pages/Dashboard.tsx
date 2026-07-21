import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import Sidebar from "../components/DashboardSidebar";

function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        async function checkSession() {
            const { data } = await supabase.auth.getSession();

            if (!data.session) {
            navigate("/login");
            }

            console.log(data);
            
        }

        checkSession();
        
        }, [navigate]);
        
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
                </div>
                
            </div>
        </div>
    )
}

export default Dashboard