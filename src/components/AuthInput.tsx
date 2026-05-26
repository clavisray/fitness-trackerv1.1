type FormInputProps = {
    label: string;
    type: string;
    id: string;
    placeholder: string;
};

function FormInput({ label, type, id, placeholder }: FormInputProps) {
    return (
        <div>
            <label htmlFor={id} className="block text-sm font-medium">
                {label}
            </label>

            <input
                id={id}
                type={type}
                placeholder={placeholder}
                className="w-full rounded-xl border border-zinc-300 px-4 py-2 outline-none focus:border-black"
            />
        </div>
    );
}

export default FormInput;