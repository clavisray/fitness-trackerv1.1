import { Link } from 'react-router-dom'
import FormInput from '../components/AuthInput'
import AuthButton from '../components/AuthButtons'
import { supabase } from '../lib/supabaseClient'
import { useState } from 'react'
import type { FormEvent } from 'react'
import { MdErrorOutline } from 'react-icons/md'


function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isMarketingConsent, setMarketingConsents] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorsMsg] = useState("");
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
    });

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isPasswordLongEnough = password.length >= 8;
    const isEmailValid = emailRegex.test(email);
    const isNameLongEnough = name.trim().length >= 2 && name.trim().length <= 20;

    function validateForm() {
        const newErrors = {
            name: "",
            email: "",
            password: "",
        };

        if (!isNameLongEnough) {
            newErrors.name = "Imię musi mieć od 2 do 20 znaków.";
        }

        if (!isEmailValid) {
            newErrors.email = "Podaj poprawny adres e-mail.";
        }

        if (!isPasswordLongEnough) {
            newErrors.password = "Hasło musi mieć minimum 8 znaków.";
        }

        setErrors(newErrors);

        return !newErrors.name && !newErrors.email && !newErrors.password;
    }

    function clearError(field: "name" | "email" | "password") {
        
        setErrors((prev) => {
            const updated = {
                ...prev,
                [field]: "",
            };

            if (!updated.name && !updated.email && !updated.password) {
                setErrorsMsg("");
            }

            return updated;
        });
    }


    async function handleSignup(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setErrorsMsg("");

        const isValid = validateForm();

        if (!isValid) {
            setErrorsMsg("Popraw zaznaczone pola.");
            return;
        }

        setIsLoading(true);
        
        try {

            const { data, error } = await supabase.auth.signUp({
                email: email.trim(),
                password,
                options: {
                    data: {
                        name: name.trim(),
                        marketingConsent: isMarketingConsent,
                    },
                },
            });
        
        

            if (error) {
                console.log("Błąd:", error.message);
                setErrorsMsg("Nie udało się utworzyć konta. Spróbuj ponownie.")
                return;
            }
        
            console.log("Utworzono konto: ", data);
            setErrorsMsg("");

        } finally {
            setIsLoading(false);
        }
    }

    

    return (
        <main className="min-h-screen bg-zinc-100 flex items-center justify-center px-4">
            <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
                <Link to = "/" className="mb-6 flex h-10 w-10 items-center justify-center rounded-2xl transition hover:bg-zinc-100 cursor-pointer">
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>

                {errorMsg && (
                    <p className='rounded-md border px-4 py-4 w-full mb-5 border-red-500 flex items-row gap-2 items-center'>
                        <MdErrorOutline size={20} />
                        {errorMsg}
                    </p>
                )}

                <h2 className="mb-6 text-center text-2xl font-bold">
                    Utwórz konto
                </h2>
                
                <form onSubmit={handleSignup} noValidate className="flex flex-col gap-4 mb-4">

                    <FormInput label='Imię' id="firstName" type="text" placeholder='Imię'
                    value={name} onChange={
                        (n) => { const value = n.target.value;

                            setName(value);

                            if (value.trim().length >= 2 && value.trim().length <= 20) {
                                clearError("name");
                            }

                    }}

                    hasError={Boolean(errors.name)}/>

                    {errors.name && (
                    <p className='-mt-3 text-xs text-red-600'>
                        {errors.name}
                    </p>
                )}

                    <FormInput label='E-mail' id="email" type="email" placeholder='E-mail' 
                    value={email} onChange={
                        (e) => { const value = e.target.value;

                            setEmail(value); 

                            if (emailRegex.test(value)) {
                                clearError("email");
                            }
                        }}

                        hasError={Boolean(errors.email)}/>

                    {errors.email && (
                        <p className='-mt-3 text-xs text-red-600'>
                            {errors.email}
                        </p>
                )}

                    <FormInput label='Hasło' id="password" type="password" placeholder='Hasło' 
                    value={password} onChange={(p) => { const value = p.target.value;
                        setPassword(value); 

                        if (value.length >= 8) {
                            clearError("password")
                        }
                    }} 
                        
                        hasError={Boolean(errors.password)}/>

                    {errors.password && (
                        <p className='-mt-3 text-xs text-red-600'>
                            {errors.password}
                        </p>
                    )}

                    <label className="flex items-start gap-2 text-sm text-zinc-600">
                      <input type="checkbox" className='mt-1 accent-black' 
                        checked={isMarketingConsent} onChange={(e) => {setMarketingConsents(e.target.checked); 
                        console.log(e.target.checked);
                      }} />

                      <span> Tak, chcę otrzymywać zniżki, oferty lojalnościowe i inne informacje.</span> 
                    </label>
                
                <AuthButton type="submit" disabled={isLoading}>
                    {isLoading ? "Tworzenie..." : "Utwórz konto"}
                </AuthButton>
                </form>
                <p className="mt-4 text-center text-sm text-zinc-600">
                    Masz już konto?{" "}
                    <Link to = "/login" className="font-medium text-black underline cursor-pointer hover:no-underline">
                            Zaloguj się
                    </Link>
                </p>

                <p className="mt-4 text-center text-xs text-zinc-500">
                Tworząc konto akceptujesz <Link to ="/about" className='text-black underline cursor-pointer hover:no-underline'>Regulamin</Link> oraz Politykę prywatności.
                </p>
            </section>
        </main>
    )
}

export default SignupPage;