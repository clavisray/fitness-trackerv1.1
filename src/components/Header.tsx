import { Link } from 'react-router-dom'
import Button from './Button'

function Header() {
    return (
        <header className="mx-3 flex items-center justify-between px-6 py-4">            
        <Link className="text-xl font-medium" to="/">Metryk</Link>
            <nav className='flex items-center gap-4'>
                
                <Link to="/"> 
                    <Button variant='primary'>Home</Button>
                </Link>
                
                <Link to="/about">
                    <Button variant='primary'>About us</Button>
                </Link>
                
                <Link to="/contact">
                    <Button variant='primary'>Support</Button>
                </Link>
                <div className='flex items-center gap-4'>
                    
                    <Link to ="/login">
                        <Button variant="third">Get started</Button>
                    </Link>

                </div>
                
            </nav>
        </header>
    )
}

export default Header