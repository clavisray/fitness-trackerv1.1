export type ButtonVariant = "primary" | "secondary" | "third";

export type DashButtonVariants = "default" | "defaultClicked" | "third";

export type AuthButtonProps<V extends string = ButtonVariant> = {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    variant?: V;
    className?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
}

export type FormErrors = {
    email?: string;
    password?: string;
    general?: string;
}
