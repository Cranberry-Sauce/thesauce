import { BarsArrowDownIcon, UsersIcon } from '@heroicons/react/20/solid'
import { useState, useEffect } from 'react'

export default function SearchBar(params) {
    const { searchParam, setSearchParam, searchKey, setSearchKey, handleSearch } = params.params;
    const [lastSearchParam, setLastSearchParam] = useState(searchParam);
    return (
        <div className='mt-6'>
            <label htmlFor="phone-number" className="block text-sm font-medium text-gray-700">
                Search for a user
            </label>
            <div className='flex'>

                <div className="relative mt-1 rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 flex items-center">
                        <select id="search-catagory" name="search-catagory" autoComplete="text"
                            value={searchKey}
                            onChange={(e) => setSearchKey(e.target.value)}
                            className="h-full rounded-md border-transparent bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                            <option value='first_name' >First Name</option>
                            <option value='last_name' >Last Name</option>
                            <option value='email' >Email</option>
                            <option value='cohort_num'>Cohort</option>
                            <option value='city' >Location</option>
                            <option value='resident_alum' >Resident/Alumni</option>
                            <option value='employer' >Company</option>
                            <option value='linkedin' >LinkedIn</option>
                        </select>
                    </div>
                    <input type="text" name="search-param" id="search-param" onChange={(e) => setSearchParam(e.target.value)} value={searchParam}
                        className="block w-[500px] rounded-md border-gray-300 pl-16 focus:border-indigo-500 focus:ring-indigo-500 pl-48 sm:text-sm"
                        placeholder="John Doe" />
                </div>
                <button
                    type="button"
                    onClick={() => {
                        if (searchParam !== lastSearchParam) {
                            handleSearch();
                            setLastSearchParam(searchParam);
                        }
                    }
                    } //dont allow the user to search if the search param is the same as the last search param

                    className="relative -ml-px inline-flex items-center space-x-2 rounded-md border border-gray-300 bg-gray-50 px-4 ml-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                >
                    <BarsArrowDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    <span>Search</span>
                </button>
            </div>
        </div>
    )
}