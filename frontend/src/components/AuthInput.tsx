type FormInputProps = {
    label?: string;
    type: string;
    id: string;
    placeholder: string;
    className?: string;
    hasError?: boolean;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function FormInput({ label, type, id, placeholder, className="", hasError=false, value, onChange }: FormInputProps) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium">
                {label}
            </label>

            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className={`mt-1 w-full rounded-xl border px-4 py-2 outline-none transition-colors
                    ${hasError 
                        ? "border-red-500 focus:border-red-500" 
                        : "border-zinc-300 focus:border-black"
                    } ${className}`}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default FormInput;