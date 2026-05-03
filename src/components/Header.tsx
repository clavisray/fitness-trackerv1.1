import { Link } from 'react-router-dom'
import Button from './Button'

function Header() {
    return (
        <header className='flex items-center justify-between px-6 py-4'>
            <nav className='flex items-center gap-4'>
                <Link to="/">
                    Fitnesstracker
                </Link>

                <Link to="/">
                    <Button>Home</Button>
                </Link>
                
                <Link to="/about">
                    <Button>About</Button>
                </Link>
                
                <Link to="/contact">
                    <Button>Contact</Button>
                </Link>
                
                <Link to="/signup">
                    <Button>Sign up</Button>
                </Link>
                
                <Link to ="/login">
                    <Button variant="secondary">Sign in</Button>
                </Link>
            </nav>
        </header>
    )
}

export default Header