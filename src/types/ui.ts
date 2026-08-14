export type ButtonVariant = "primary" | "secondary" | "third";

export type DashButtonVariants = "default" | "defaultClicked" | "third";

export type AuthButtonProps<V extends string = ButtonVariant> = {
    type?: "button" | "submit" | "reset";
    children: React.ReactNode;
    variant?: V;
    className?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    disabled?: boolean;
}

export type FormErrors = {
    email?: string;
    password?: string;
    general?: string;
}

export type NotificationsButtonProps = {
    icon?: React.ReactNode;
    onClick?: () => void;
}

export type CalendarDayProps = {
    className?: string;
    events?: CalendarEventType[];
    day: number;
    onClick?: () => void; 
    onEventClick?: (event: CalendarEventType) => void;
}

export type CalendarEventType = {
    id: string;
    title: string;
    type: "workout" | "diet" | "note";
    day: number;
    content: string;
}

export type CalendarEventProps = {
    event: CalendarEventType;
    viewMode: "month" | "week";
    onClick?: () => void;
}

export type AddEventModalProps = {
    day: number;
    month: number;
    onClose: () => void;
    onAddEvent: (event: CalendarEventType) => void;
}