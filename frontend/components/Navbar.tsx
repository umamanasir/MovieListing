import Link from 'next/link';

export default function Navbar(){
    return(
        <nav className='navbarContainer'>
         <Link className="navBarHeading" href='/'>Welcome to Movie List</Link>
         <Link className="navBarbtn" href={"/addMovie"}> Add New Movie</Link>  
        </nav>
    )
}