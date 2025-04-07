import { createContext, useContext } from 'react'

type SearchContextType = {
	onSearch: (value: string) => void
}

export const SearchContext = createContext<SearchContextType>({
	onSearch: () => {},
})

export const useSearchContext = () => useContext(SearchContext)
