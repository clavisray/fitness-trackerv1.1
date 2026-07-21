import DashButton from "./DashButton";

function Sidebar() {
    return (
        <div className="flex flex-col gap-4 p-4 bg-zinc-200">
            <DashButton>
                Dashboard
            </DashButton>

            <DashButton>
                Dashboard
            </DashButton>

            <DashButton>
                Dashboard
            </DashButton>

            <DashButton>
                Dashboard
            </DashButton>
        </div>
    )
}

export default Sidebar;