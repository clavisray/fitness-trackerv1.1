import { Link, useNavigate } from "react-router-dom"
import FormInput from '../components/AuthInput'
import AuthButton from "../components/AuthButtons"
import { useState, type FormEvent } from 'react'
import { supabase } from '../lib/supabaseClient'

function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    async function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password
        });

        if (error) {
            console.log("Błąd", error.message)
            return;
        }

        console.log("Zalogowano użytkownika", data)
        navigate("/dashboard");
    }

    return (
        <main className="min-h-screen bg-zinc-100 flex items-center justify-center px-4">
            <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
                <Link to = "/" className="mb-6 flex h-10 w-10 items-center justify-center rounded-2xl transition hover:bg-zinc-100 cursor-pointer">
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>

                <h2 className="mb-6 text-center text-2xl font-bold">
                    Zaloguj się
                </h2>
                
                <form onSubmit={handleLogin} className="flex flex-col gap-4 mb-4">
                    <FormInput label="E-mail" id="email" type="email" placeholder="E-mail" 
                    value={email} onChange={(e) => setEmail(e.target.value)}/>

                    <FormInput label='Hasło' id="password" type="password" placeholder='Hasło' 
                    value={password} onChange={(p) => setPassword(p.target.value)}/>

                    <AuthButton type="submit" variant="primary">Zaloguj się</AuthButton>
                    
                </form>
                <AuthButton variant="secondary">Zaloguj się kontem Google</AuthButton>

                <p className="mt-4 text-center text-sm text-zinc-600">
                    Nie masz konta?{" "}
                    <Link to = "/signup" className="font-medium text-black underline cursor-pointer hover:no-underline">
                            Zarejestruj się
                    </Link>
                </p>

                <p className="mt-4 text-center text-xs text-zinc-500">
                Tworząc konto akceptujesz <Link to ="/about" className='text-black underline cursor-pointer hover:no-underline'>Regulamin</Link> oraz Politykę prywatności.
                </p>
            </section>
        </main>
    )
}

export default LoginPage