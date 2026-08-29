import Sidebar from "../../components/DashboardSidebar";
import Topbar from "../../components/DashboardTopbar";

function Profile() {
    return (
        <main className="flex h-screen bg-gradient-to-r from-lime-200 via-sky-100 to-indigo-200 p-2">
            <Sidebar />

            <div className="flex flex-1 flex-col px-2">
                <Topbar title="Mój profil">
                    <div>
                        
                    </div>
                </Topbar>

                <main className="mt-2 flex-1 rounded-3xl bg-white shadow-sm">
                    
                </main>
            </div>

        </main>
    )
}

export default Profile;