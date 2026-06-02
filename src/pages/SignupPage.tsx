import { Link } from 'react-router-dom'
import FormInput from '../components/AuthInput'
import AuthButton from '../components/AuthButtons'
import { supabase } from '../lib/supabaseClient'
import { useState } from 'react'
import type { FormEvent } from 'react'


function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorsMsg] = useState("");
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [inputError, setInputError] = useState(false);
    const [marketingConsents, setMarketingConsents] = useState(false);


    const isPasswordLongEnough = password.length >= 8;
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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


    async function handleSignup(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setInputError(false);
        setErrorsMsg("");

        const isValid = validateForm();
        if (!isValid) {
            return;
        }

        if (!email || !password || !name) {
            setErrorsMsg("Wypełnij wszystkie pola");
            setInputError(true);
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email,
            password
        });

        if(error) {
            console.log("Błąd: ", error.message);
            setInputError(true);
            return;
        }

        console.log("Utworzono konto: ", data);
        setErrorsMsg("");
    }



    return (
        <main className="min-h-screen bg-zinc-100 flex items-center justify-center px-4">
            <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
                <Link to = "/" className='mb-6 w-full flex items-center justify-center rounded-2xl transition hover:bg-zinc-100 cursor-pointer md:h-10 md:w-10'>
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>

                <h2 className="mb-6 text-center text-2xl font-bold">
                    Utwórz konto
                </h2>
                
                <form onSubmit={handleSignup} className="flex flex-col gap-4 mb-4">
                    <FormInput label='Imię' id="firstName" type="text" placeholder='Imię'
                    value={name} onChange={(n) => setName(n.target.value)} hasError={inputError}/>
                    {errorMsg && <p className={`-mt-3 text-xs ${isNameLongEnough ? "text-green-600" : "text-red-600"}`}>
                        {errorMsg}
                    </p>}

                    <FormInput label='E-mail' id="email" type="email" placeholder='E-mail' 
                    value={email} onChange={(e) => setEmail(e.target.value)} hasError={inputError}/>
                    {errorMsg && <p className={`-mt-3 text-xs ${isEmailValid ? "text-green-600" : "text-red-600"}`}>
                        {errorMsg}
                    </p>}

                    <FormInput label='Hasło' id="password" type="password" placeholder='Hasło' 
                    value={password} onChange={(p) => setPassword(p.target.value)} hasError={inputError}/>

                    {errorMsg && <p className={`-mt-3 text-xs ${isPasswordLongEnough ? "text-green-600" : "text-red-600"}`}>
                        {errorMsg}
                    </p>}

                    {errorMsg && <p className='text-sm text-red-500'>{errorMsg}</p>}

                    <label className="flex items-start gap-2 text-sm text-zinc-600">
                      <input type="checkbox" className='mt-1 accent-black' 
                      checked={marketingConsents} onChange={(e) => setMarketingConsents(e.target.checked)} />

                      {/* add value for span below */}
                      <span> Tak, chcę otrzymywać zniżki, oferty lojalnościowe i inne informacje.</span> 
                    </label>
                
                <AuthButton type="submit">Utwórz konto</AuthButton>
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

export default SignupPage