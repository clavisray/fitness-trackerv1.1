import { Link } from 'react-router-dom'
import FormInput from '../components/AuthInput'
import About from './About'
import AuthButton from '../components/AuthButtons'


function SignupPage() {
    return (
        <main className="min-h-screen bg-zinc-100 flex items-center justify-center px-4">
            <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
                <Link to = "/">
                    <button className="mb-6 flex h-10 w-10 items-center justify-center rounded-2xl transition hover:bg-zinc-100 cursor-pointer">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                </Link>

                <h2 className="mb-6 text-center text-2xl font-bold">
                    Utwórz konto
                </h2>
                
                <form className="flex flex-col gap-4 mb-4">
                    <FormInput label='Imię' id="firstName" type="text" placeholder='Imię' />

                    <FormInput label='Nazwisko' id="lastName" type="text" placeholder='Nazwisko' />

                    <FormInput label='E-mail' id="email" type="email" placeholder='E-mail' />

                    <FormInput label='Hasło' id="password" type="password" placeholder='Hasło' />

                    <label className="flex items-start gap-2 text-sm text-zinc-600">
                      <input type="checkbox" className='mt-1'></input>
                      <span> Tak, chcę otrzymywać zniżki, oferty lojalnościowe i inne informacje.</span> 
                    </label>
                
                <AuthButton type="submit">Utwórz konto</AuthButton>
                </form>

                <AuthButton variant='secondary'>Zaloguj się kontem Google</AuthButton>

                <p className="mt-4 text-center text-sm text-zinc-600">
                    Masz już konto?{" "}
                    <Link to = "/login" className="font-medium text-black underline cursor-pointer">
                            Zaloguj się
                    </Link>
                </p>

                <p className="mt-4 text-center text-xs text-zinc-500">
                Tworząc konto akceptujesz <Link to ="/about" className='text-black cursor-pointer'>Regulamin</Link> oraz Politykę prywatności.
                </p>
            </section>
        </main>
    )
}

export default SignupPage