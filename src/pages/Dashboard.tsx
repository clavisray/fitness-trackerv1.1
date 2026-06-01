import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        async function checkSession() {
            const { data } = await supabase.auth.getSession();

            if (!data.session) {
            navigate("/login");
            }
        }

        checkSession();
        }, [navigate]);
        
    return (
        <div>
            
            <Header />
            Dashboard
        </div>
    )
}

export default Dashboard