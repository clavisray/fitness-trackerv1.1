type ButtonVariant = "primary" | "secondary" | "third";

type AuthButtonProps = {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    variant?: ButtonVariant;
}

const variantClasses = {
    primary: "w-full rounded-xl bg-black py-3 text-white font-medium transition hover:bg-zinc-800 cursor-pointer",
    secondary: "w-full rounded-xl bg-white py-3 text-black outline-solid transition hover:bg-zinc-100 cursor-pointer",
    third: ""
}


function AuthButton({ type = "button", children, variant = "primary" }: AuthButtonProps ) {
    return (
        <button type={type} className={variantClasses[variant]}>
            {children}
        </button>
    )
}

export default AuthButton;