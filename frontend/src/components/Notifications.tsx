import type { NotificationsButtonProps } from "../types/ui";

function Notifications({ onClick, icon }: NotificationsButtonProps) {
    return (
        <button onClick={onClick}>
            {icon}
        </button>
    )
}

export default Notifications;