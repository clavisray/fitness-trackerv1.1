import { Link } from 'react-router-dom'


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
                
                <form className="flex flex-col gap-4">
                    <label className="block text-sm font-medium">Imie</label>
                        <input type="imie" 
                        placeholder='Imie' 
                        className="w-full rounded-xl border border-zinc-300 px-4 py-2 outline-none focus:border-black" />

                    <label className="block text-sm font-medium">Nazwisko</label>
                        <input type="nazwisko" 
                        placeholder="Nazwisko" 
                        className="w-full rounded-xl border border-zinc-300 px-4 py-2 outline-none focus:border-black"/>

                    <label className="block text-sm font-medium">E-mail</label>
                        <input type="email" 
                        id="email" 
                        placeholder='Email' 
                        className="w-full rounded-xl border border-zinc-300 px-4 py-2 outline-none focus:border-black"/>

                    <label className="block text-sm font-medium">Hasło</label>
                        <input type="password" 
                        id="password" 
                        placeholder='Hasło' 
                        className="w-full rounded-xl border border-zinc-300 px-4 py-2 outline-none focus:border-black"/>
                    
                    <label htmlFor='checkbox' className='checkbox-label'> 
                    <input type="checkbox" id="checkbox" />
                    <span> Tak, chcę otrzymywać zniżki, oferty lojalnościowe i inne informacje.</span> 
                    </label>
                </form>

                <button 
                    type = "submit" 
                    className="mb-3 mt-2 w-full rounded-xl bg-black py-3 text-white font-medium transition hover:bg-zinc-800 cursor-pointer">Utwórz konto
                </button>
                <button className="mb-6 w-full rounded-xl bg-white py-3 text-black outline-solid transition hover:bg-zinc-100 cursor-pointer">Zaloguj się kontem Google</button>

                <p className="mt-6 text-center text-sm text-zinc-600">
                    Masz już konto?{" "}
                    <Link to = "/login">
                        <button className="font-medium text-black underline cursor-pointer">
                            Zaloguj się
                        </button>
                    </Link>
                </p>

                <p className="mt-4 text-center text-xs text-zinc-500">
                Tworząc konto, akceptujesz Regulamin oraz Politykę prywatności.
                </p>
            </section>
        </main>
    )
}

export default SignupPage