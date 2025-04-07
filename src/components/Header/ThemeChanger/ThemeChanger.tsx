import { useEffect, useState } from 'react'
import styles from './ThemeChanger.module.css'

const THEMES = {
	LIGHT: 'light',
	DARK: 'dark',
}

export const ThemeChanger = () => {
	const savedTheme = localStorage.getItem('theme') || THEMES.LIGHT
	const [theme, setTheme] = useState(savedTheme)

	const handleThemeChange = (newTheme: string) => {
		setTheme(newTheme)
	}

	useEffect(() => {
		document.body.setAttribute('data-theme', theme)
	}, [theme])

	return (
		<div>
			{theme === THEMES.DARK ? (
				<button
					className={styles.button}
					onClick={() => handleThemeChange(THEMES.LIGHT)}
				>
					Light
				</button>
			) : (
				<button
					className={styles.button}
					onClick={() => handleThemeChange(THEMES.DARK)}
				>
					Dark
				</button>
			)}
		</div>
	)
}

export default ThemeChanger
