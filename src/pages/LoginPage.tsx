import { Link } from "react-router-dom"
import FormInput from '../components/AuthInput'
import AuthButton from "../components/AuthButtons"

function LoginPage() {
    return (
        <main className="min-h-screen bg-zinc-100 flex items-center justify-center px-4">
            <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
                <Link to = "/">
                    <button className="mb-6 flex h-10 w-10 items-center justify-center rounded-2xl transition hover:bg-zinc-100 cursor-pointer">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                </Link>

                <h2 className="mb-6 text-center text-2xl font-bold">
                    Zaloguj się
                </h2>
                
                <form className="flex flex-col gap-4 mb-4">
                    <FormInput label="E-mail" id="email" type="email" placeholder="E-mail" />

                    <FormInput label='Hasło' id="password" type="password" placeholder='Hasło' />

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