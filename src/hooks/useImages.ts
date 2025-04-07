import { useCallback, useEffect, useState } from 'react'

const API_URL = 'https://pixabay.com/api/'
const API_KEY = '49508543-beaf05a0f802f0bed2128a61c'

type Image = {
	id: number
	webformatURL: string
	tags: string
}

type Status = 'idle' | 'pending' | 'resolved' | 'rejected'

export const useImages = () => {
	const [searchValue, setSearchValue] = useState('')
	const [pagintationPage, setPagintationPage] = useState(1)
	const [images, setImages] = useState<Image[]>([])
	const [status, setStatus] = useState<Status>('idle')

	const url = `${API_URL}?key=${API_KEY}&q=${searchValue}&orientation=horizontal&page=${pagintationPage}&per_page=15`

	const fetchImages = useCallback(async () => {
		setStatus('pending')
		try {
			const response = await fetch(url)
			if (response.ok) {
				const data = await response.json()
				setImages(prevImages =>
					pagintationPage === 1 ? data.hits : [...prevImages, ...data.hits]
				)
				setStatus('resolved')
			} else {
				setStatus('rejected')
				throw new Error('Failed to fetch data')
			}
		} catch (error) {
			console.error('Error fetching images:', error)
			setStatus('rejected')
		}
	}, [url, pagintationPage])

	useEffect(() => {
		fetchImages()
	}, [fetchImages])

	const handleSearch = (value: string) => {
		setSearchValue(value)
		setPagintationPage(1)
		setImages([])
	}

	const handleLoadMore = () => {
		setPagintationPage(prevPage => prevPage + 1)
	}

	return {
		images,
		status,
		handleSearch,
		handleLoadMore,
	}
}
