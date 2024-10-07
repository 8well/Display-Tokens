import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Sun, Moon } from 'lucide-react'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <header className={`${darkMode ? 'bg-gray-800' : 'bg-white'} text-${darkMode ? 'white' : 'gray-900'} py-4`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/logo.svg" 
            alt="DisplayTokens Logo" 
            className="w-10 h-10"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'https://via.placeholder.com/40';
            }}
          />
          <span className="text-2xl font-bold">DisplayTokens</span>
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link to="/tokens" className="hover:text-blue-400">Tokens</Link></li>
            <li><Link to="/news" className="hover:text-blue-400">News</Link></li>
            <li><Link to="/communities" className="hover:text-blue-400">Communities</Link></li>
            <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search tokens..."
              className={`${darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'} px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header