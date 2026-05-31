type ButtonVariant = "primary" | "secondary" | "third";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: ButtonVariant;
}

const variantClasses = {
    primary: "inline-block text-zinc-700 transition-all duration-100 hover:scale-105 hover:text-black hover:font-semibold cursor-pointer",
    secondary: "bg-zinc-200 text-zinc-900 hover:bg-zinc-300 cursor-pointer",
    third: "relative overflow-hidden bg-gradient-to-r from-blue-500 to-indigo-500 text-white transition-all duration-300 hover:from-indigo-500 hover:to-purple-500 before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:transition-transform before:duration-700 hover:before:translate-x-full cursor-pointer",
}

function Button({ children, onClick, className = "", variant = "primary" }: ButtonProps) {
    return (
        <button onClick={onClick}
            className={`rounded-xl px-4 py-2 font-medium transition ${variantClasses[variant]} ${className}`}
            >
                {children}
        </button>
    );
}

export default Button