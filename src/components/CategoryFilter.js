import { HiFilter } from "react-icons/hi"
import { useState } from "react"

export default function CategoryFilter({ categories }) {
    const [searchTerm, setSearchTerm] = useState("")

    function handleChange(e) {
        setSearchTerm(e.target.value)
    }

    return (
        <div className="flex flex-col items-center justify-center w-full mb-16 z-40">
            <div className="flex flex-col items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full w-1/2 md:w-1/3 lg:w-1/4 transition-transform duration-300 relative cursor-pointer">
                {/* Input element with icon */}
                <div className="flex items-center px-4 py-2">
                    <HiFilter className="text-gray-600 dark:text-gray-400 mr-2" />
                    <input type="text" value={searchTerm} onChange={handleChange} placeholder="Pesquisar..." className="block w-full text-black bg-blue-900 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 transition-transform duration-300 hover:scale-105" />
                </div>
                {/* Filtered results */}
                {/* <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {categories.allCategories.filter(option => option.nome.toLowerCase().includes(searchTerm.toLowerCase())).map((option) => (
                            <p key={option.nome} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white" role="menuitem">{option.nome}</p>
                        ))}
                    </div>
                </div> */}
            </div>
        </div>
    )
}
