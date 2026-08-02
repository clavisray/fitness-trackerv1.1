import { Link, useLocation, Navigate } from 'react-router-dom'

function SignupSuccess() {
    const location = useLocation();

    if (!location.state?.fromSignup) {
        return <Navigate to="/signup" replace />;
    }


    return (
        <main className="min-h-screen bg-zinc-100 flex items-center justify-center px-4">
            <section className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">
                
                    <h2 className="text-2xl font-bold">
                        Pierwszy krok już za Tobą.
                    </h2>

                    <p className="mt-6 text-zinc-600 leading-7">
                        Na podany adres e-mail wysłaliśmy wiadomość z linkiem aktywacyjnym.
                    </p>
                   
                    <p className="mt-4 text-zinc-600 leading-7 mb-6">
                        Aby dokończyć rejestrację, otwórz wiadomość i kliknij przycisk {" "}
                        <strong>"Aktywuj konto".</strong>
                    </p>

                    <Link to="/login" className='relative flex items-center justify-center w-full rounded-xl bg-black py-3 text-white font-medium transition hover:bg-zinc-800 cursor-pointer'>
                        Przejdź do logowania 
                    </Link>
                
            </section>
        </main>
    )
}

export default SignupSuccess;