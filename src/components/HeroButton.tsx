import type { AuthButtonProps } from "../types/ui";

const variantClasses = {
    primary: "bg-blue-500 text-white transition delay-150 duration-300 ease-in-out hover:bg-indigo-500",
    secondary: "bg-white text-black border border-zinc-300 hover:bg-zinc-100",
    third: "bg-red-600 text-white hover:bg-red-700",
}

const baseClasses = "rounded-2xl px-4 py-2 font-medium transition cursor-pointer";

function HeroButton({ type="button", children, variant = "primary", className="" }: AuthButtonProps){
    return (
        <button type={type} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
            {children}
        </button>
    )
}

export default HeroButton;