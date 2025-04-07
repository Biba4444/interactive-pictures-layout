import Header from './components/Header'
import PicturesLayout from './components/PicturesLayout'
import Skeleton from './components/Skeleton'
import Pagination from './components/Pagination'
import { SearchContext } from './contexts/useSearchContext'
import { useImages } from './hooks/useImages'

function App() {
	const { images, status, handleLoadMore, handleSearch } = useImages()

	return (
		<>
			<SearchContext value={{ onSearch: handleSearch }}>
				<Header />
			</SearchContext>
			<Skeleton
				onLoading={status === 'pending'}
				count={images.length + 16}
			>
				<PicturesLayout images={images} />
			</Skeleton>
			{status !== 'pending' && <Pagination onLoadMore={handleLoadMore} />}
		</>
	)
}

export default App
