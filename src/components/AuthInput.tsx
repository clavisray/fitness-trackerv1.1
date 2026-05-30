type FormInputProps = {
    label?: string;
    type: string;
    id: string;
    placeholder: string;
    className?: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function FormInput({ label, type, id, placeholder, className="", value, onChange }: FormInputProps) {
    return (
        <div>
            <label htmlFor={id} className={`block text-sm font-medium ${className}`}>
                {label}
            </label>

            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className={`mt-1 w-full rounded-xl border border-zinc-300 px-4 py-2 outline-none focus:border-black ${className}`}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default FormInput;