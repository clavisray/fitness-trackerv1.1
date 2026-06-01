import { Link, useNavigate } from "react-router-dom";
import FormInput from '../components/AuthInput';
import AuthButton from "../components/AuthButtons";
import { useState, type FormEvent } from 'react';
import { supabase } from '../lib/supabaseClient';
import { FcGoogle } from "react-icons/fc";
import { MdErrorOutline } from 'react-icons/md'


function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorsMsg] = useState("");
    const [inputError, setInputError] = useState(false);

    const navigate = useNavigate();

    async function handleLogin(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setErrorsMsg("");
        setInputError(false);

        if (!email || !password) {
            setErrorsMsg("Wypełnij wszystkie pola");
            setInputError(true);
            return;
        }

        const { data, error } = await supabase.auth.signInWithPassword({ email,password });

        if (error) {
            setErrorsMsg("Niepoprawny email lub hasło")
            setInputError(true);
            console.log("Błąd", error.message)
            return;
        }

        console.log("Zalogowano użytkownika", data)
        setInputError(false);
        navigate("/dashboard");
    }

    async function handleGoogleLogin() {
        console.log("klikGoogle")
        const { error } =  await supabase.auth.signInWithOAuth({
        provider: "google",
    })};

    return (
        <main className="min-h-screen bg-zinc-100 flex items-center justify-center px-4">
            <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
                <Link to = "/" className="mb-6 flex h-10 w-10 items-center justify-center rounded-2xl transition hover:bg-zinc-100 cursor-pointer">
                    <span className="material-symbols-outlined">arrow_back</span>
                </Link>
                
                {errorMsg && <p className={`rounded-md border px-4 py-4 py- w-full mb-5 border-red-500 flex items-row gap-2 items-center`}>
                        <MdErrorOutline size={20}/>
                        Nieprawidłowa nazwa użytkownika lub hasło
                    </p>}


                <h2 className="mb-6 text-center text-2xl font-bold">
                    Zaloguj się
                </h2>

                
                <form onSubmit={handleLogin} noValidate className="flex flex-col gap-4 mb-4">
                    <FormInput label="E-mail" id="email" type="email" placeholder="E-mail" 
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    hasError={inputError}/>

                    <FormInput label='Hasło' id="password" type="password" placeholder='Hasło' 
                    value={password} onChange={(p) => setPassword(p.target.value)}
                    hasError={inputError}/>

                    {errorMsg && <p className='text-sm text-red-500'>{errorMsg}</p>}

                    <AuthButton type="submit" variant="primary">Zaloguj się</AuthButton>
                    
                </form>
                <AuthButton type="button" variant="third" className="" onClick={handleGoogleLogin} icon={<FcGoogle size={20} />}>Kontynuuj przy użyciu konta Google</AuthButton>

                

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