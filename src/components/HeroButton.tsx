import type { AuthButtonProps } from "../types/ui";

const variantClasses = {
    primary: "relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 text-white transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-full",
    secondary: "bg-white text-black border border-zinc-300 hover:bg-zinc-100",
    third: "bg-red-600 text-white hover:bg-red-700",
}

const baseClasses = "relative overflow-hidden rounded-2xl px-4 py-2 font-medium transition cursor-pointer";

function HeroButton({ type="button", children, variant = "primary", className="" }: AuthButtonProps){
    return (
        <button type={type} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
            <span className="relative z-10">{children}</span>
        </button>
    )
}

export default HeroButton;