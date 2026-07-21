import type { AuthButtonProps, DashButtonVariants } from "../types/ui";

const baseClasses = "flex items-center w-full rounded-xl px-4 py-3 text-sm font-medium transition-colors cursor-pointer"

const variantClasses: Record<DashButtonVariants, string> = {
    default: "bg-zinc-200 text-2xl",
    defaultClicked: "",
    third: "",
}

function DashButton({ type="button", children, variant="default", className="cursor-pointer", onClick, icon }: AuthButtonProps<DashButtonVariants>) {
    return (
        <button type={type} className={`${baseClasses} ${variantClasses[variant]} ${className}`} onClick={onClick} >
            <span className="relative flex items-center justify-center">
                <span className="absolute left-4">{icon}</span>
                {children}
            </span>
        </button>
    )   
}

export default DashButton;