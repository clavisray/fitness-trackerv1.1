export type ButtonVariant = "primary" | "secondary" | "third";

export type AuthButtonProps = {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    variant?: ButtonVariant;
    className?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
}

export type FormErrors = {
    email?: string;
    password?: string;
    general?: string;
}
