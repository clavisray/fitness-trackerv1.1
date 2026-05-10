import Header from '../components/Header'

function Homepage() {
    return (
        <div className='h-screen flex flex-col overflow-hidden'>
            <Header />
            <main className='flex-1 overflow-y-scroll snap-y snap-proximity scroll-smooth'>
                
                <section className='h-full snap-start bg-pink-500'>Hero</section>
                <section className='h-full snap-start bg-grey'>Functions</section>
                <section className='h-full snap-start bg-zinc-900 text-white'>About</section>
    
            </main>
        </div>
    )
}

export default Homepage