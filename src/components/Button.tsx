type ButtonVariant = "primary" | "secondary" | "third";


type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: ButtonVariant;
}

const variantClasses = {
    primary: "bg-black text-white hover:bg-zinc-800",
    secondary: "bg-zinc-200 text-zinc-900 hover:bg-zinc-300",
    third: "bg-red-600 text-white hover:bg-red-700"
}

function Button({ 
    children, 
    onClick, 
    className = "", 
    variant = "primary",
}: ButtonProps) {
    return (
    <button 
        onClick={onClick}
        className={`rounded-xl px-4 py-2 font-medium transition ${variantClasses[variant]} ${className}`}
        >
            {children}
        </button>
    );
}

export default Button