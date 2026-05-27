import Header from '../components/Header'
import HeroButton from '../components/HeroButton'

function Homepage() {
    return (
        <div className='h-screen flex flex-col overflow-hidden'>
            <Header />

            <main className='flex-1 overflow-y-scroll snap-y snap-mandatory scroll-smooth mt-5'>
                <section className='h-full flex flex-col items-center justify-center px-4 text-center md:px-20 md:text-left snap-start'>Hero
                    <div className='flex flex-col items-center gap-6 md:items-start'>

                        <h1 className='text-4xl font-bold md:text-5xl'>
                            Track your progress
                        </h1>

                        <p className='max-w-sm text-base text-zinc-600
                        md:max-w-xl md:text-lg'>
                            Monitoruj treningi, progres is woje wyniki w jednym miejscu
                        </p>
                        

                        <div className='flex w-full flex-col gap-3
                        md:gap-4 md:flex-row'>
                            <HeroButton variant='primary' className='w-full md:w-auto md:px-8'>
                                Join now
                            </HeroButton>

                            <HeroButton variant='secondary' className='w-full md:w-auto md:px-8'>
                                Learn more
                            </HeroButton>
                        </div>

                    </div>

                    

                </section>
                <section className='h-full snap-start bg-grey'>Functions</section>
                <section className='h-full snap-start bg-zinc-900 text-white'>About</section>
            
            </main>
        </div>
    )
}

export default Homepage