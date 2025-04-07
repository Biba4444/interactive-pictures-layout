import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import styles from './SearchBar.module.css'
import { useSearchContext } from '../../../contexts/useSearchContext'

const SearchBar = () => {
	const { onSearch } = useSearchContext()
	const [searchValue, setSearchValue] = useState('')

	const handleSubmit = (event: React.FormEvent) => {
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
					onChange={e => setSearchValue(e.target.value)}
					className={styles.input}
				/>
				<FaSearch className={styles.search} />
			</label>
		</form>
	)
}

export default SearchBar
