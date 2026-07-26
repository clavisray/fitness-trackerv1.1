import Header from '../components/Header'
import HeroButton from '../components/HeroButton'
import FormInput from '../components/AuthInput'
import { useState } from 'react'
import iphone from '../assets/iphone.png'
import applepl from '../assets/download-apple-pl.svg'
import googlepl from '../assets/download-google-pl.png'
import { Link } from 'react-router-dom'

function Homepage() {
    const [email, setEmail] = useState("")

    return (
        <div className="h-screen overflow-hidden">
            <main className="h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
                <section className="h-full snap-start">
                    <Header />

                    <div className="flex h-[75%] items-center justify-center px-4 md:px-20">
                        <div className="grid w-full max-w-6xl grid-cols-1 items-center gap-10 md:grid-cols-2">
                        
                            {/* LEWA STRONA */}
                            <div className="flex flex-col items-start">
                                <h1 className="text-4xl font-bold md:text-5xl">
                                Track your progress
                                </h1>

                                <p className="mt-2 max-w-xl text-base text-zinc-600 md:text-lg">
                                Monitoruj treningi, progres i swoje wyniki w jednym miejscu
                                </p>

                                <div className="mt-4 flex w-full max-w-xl flex-col gap-3 md:flex-row md:gap-4">
                                    <div className="flex-1">
                                        <FormInput
                                        id="email"
                                        type="email"
                                        placeholder="Wprowadź swój adres mailowy"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    <HeroButton variant="primary" className="w-full md:w-auto md:px-8">
                                        Dołącz teraz
                                    </HeroButton>
                                </div>
                            </div>

                        {/* PRAWA STRONA */}
                        <div className="flex justify-center md:justify-end">
                            <img src={iphone} alt="iphonescr" className='w-75 h-auto'></img>
                        </div>

                        </div>
                    </div>
                </section>

                {/* DOWNLOAD */}
                <section className="h-full snap-start grid grid-cols-5 items-center px-10">

                    {/* LEWA STRONA */}
                    <div className='col-span-3'>
                    
                        <p className='text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600'>
                            POBIERZ APLIKACJĘ
                        </p>
                        
                        <h2 className='mt-6 text-5xl font-bold'>
                            Kiedyś, czy dzisiaj?
                        </h2>
                        
                        <p className="mt-2 max-w-xl text-base text-zinc-600 md:text-lg">
                            Zabierz swój dziennik treningowy wszędzie tam, gdzie trenujesz. Zapisuj wyniki, śledź postępy i miej dostęp do wszystkich danych w jednym miejscu.
                        </p>

                        <div className="mt-8 flex gap-4">
                            <img src={applepl} alt="Pobierz w App Store" className="h-14 w-auto" />
                            <img src={googlepl} alt="Pobierz z Google Play" className="h-14 w-auto" />
                        </div>

                        <ul className='mt-8'>
                            <li>✓ Synchronizacja z kontem</li>
                            <li>✓ Dostęp na iOS i Androidzie</li>
                            <li>✓ Wszystkie treningi w jednym miejscu</li>
                        </ul>
                    </div>

                    {/* PRAWA STRONA */}
                    <div className='col-span-2'>

                    </div>
                </section>

                {/*ABOUT TERMS AND CONDITIONS */}
                <section className='h-full snap-start bg-zinc-900 text-white'>
                    About
                    <HeroButton variant='secondary' className='w-full md:w-auto md:px-8'>
                                <Link to="/about"> Learn more</Link>
                    </HeroButton>

                </section>
            
            </main>
        </div>
    )
}

export default Homepage