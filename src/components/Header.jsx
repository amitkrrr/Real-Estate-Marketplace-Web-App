import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <header className='bg-slate-200 shadow-mid'>
        <div className='flex justify-between item-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
                <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                    <span className='text-red-500'>Amit</span>
                    <span className='text-red-700'>Estate</span>
                </h1>
            </Link>
            

            <form className='bg-slate-100 p-2 rounded-lg flex item-center'>
                <input type = "text" placeholder='search.....' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <FaSearch className='bg-transparent ' />
            </form>

            <ul className='flex gap-4'>
                <Link to='/'>
                    <li className='hidden sm:inline text-slate-700 hover:underline'>Home</li>
                </Link>
                <Link to='/about'>
                    <li className='hidden sm:inline text-slate-700 hover:underline'>About</li>
                </Link>
                
                <Link to='/Sign-In'>
                    <li className='sm:inline text-slate-700 hover:underline'>Sign In</li>
                </Link>
                
            </ul>
        </div>
        
    </header>
  )
}
