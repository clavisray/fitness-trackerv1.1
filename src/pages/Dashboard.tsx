import { useNavigate } from "react-router-dom"
import Header from "../components/Header"
import { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";

function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        supabase.auth.getSession().then(({ data }) => {
            if (!data.session) {
                navigate("/login");
            }
        });
    }, []);
    
    return (
        <div>
            
            <Header />
            Dashboard
        </div>
    )
}

export default Dashboard