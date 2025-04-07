import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from './SearchBar.module.css'
import { useSearchContext } from '../../../contexts/useSearchContext'

const SearchBar = () => {
	const { onSearch } = useSearchContext()
	const [searchValue, setSearchValue] = useState('')

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		setSearchValue(value)
	}

	const handleSubmit = (event: React.SyntheticEvent<EventTarget>) => {
		event.preventDefault()
		onSearch(searchValue)
		setSearchValue('')
	}

	return (
		<form
			onSubmit={handleSubmit}
			className={styles.form}
		>
			<label>
				<input
					type='text'
					name='Searchbar'
					value={searchValue}
					placeholder='Search...'
					onChange={handleSearch}
					className={styles.input}
				/>
				<FaSearch className={styles.search} />
			</label>
		</form>
	)
}

export default SearchBar
