import Sidebar from "../../components/DashboardSidebar";
import Topbar from "../../components/DashboardTopbar";

function Diet() {
    return (
        <main className="flex h-screen bg-zinc-50 p-2">
            <Sidebar />

            <div className="flex flex-1 flex-col px-2">
                <Topbar title="Rozpiska diety"/>

                <main className="mt-2 flex-1 rounded-3xl bg-white shadow-sm">
                    
                </main>
            </div>

        </main>
    )
}

export default Diet;