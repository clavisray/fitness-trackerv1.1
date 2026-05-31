import Header from '../components/Header'
import HeroButton from '../components/HeroButton'
import FormInput from '../components/AuthInput'
import { useState } from 'react'

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
                                        Join now
                                    </HeroButton>
                                </div>
                            </div>

                        {/* PRAWA STRONA */}
                        <div className="flex justify-center md:justify-end">
                            screen apki
                        </div>

                        </div>
                    </div>
                </section>
                <section className='h-full snap-start bg-gray-100'>Functions</section>
                <section className='h-full snap-start bg-zinc-900 text-white'>
                    About
                    <HeroButton variant='secondary' className='w-full md:w-auto md:px-8'>
                                Learn more
                    </HeroButton>

                </section>
            
            </main>
        </div>
    )
}

export default Homepage