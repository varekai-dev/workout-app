import { Link } from 'react-router-dom'
import hamburgerImage from '../../../../images/header/hamburger.svg'
import hamburgerCloseImage from '../../../../images/header/hamburger-close.svg'

import styles from './Hamburger.module.scss'
import { menu } from './menuBase.js'
import { useAuth } from '../../../../hooks/useAuth.js'
import { useOutsideAlerter } from '../../../../hooks/useOutsideAlerter.js'

const Hamburger = () => {
	const { setIsAuth } = useAuth()
	const { ref, isComponentVisible, setIsComponentVisible } =
		useOutsideAlerter(false)

	const handleLogout = () => {
		localStorage.removeItem('token')
		setIsAuth(true)
		setIsComponentVisible(false)
	}
	return (
		<div className={styles.wrapper} ref={ref}>
			<button onClick={() => setIsComponentVisible(!isComponentVisible)}>
				<img
					src={isComponentVisible ? hamburgerCloseImage : hamburgerImage}
					alt="Auth"
					height={24}
				/>
			</button>
			<nav
				className={`${styles.menu} ${isComponentVisible ? styles.show : ''}`}
			>
				<ul>
					{menu.map((item) => (
						<li key={item.title}>
							<Link to={item.link}>{item.title}</Link>
						</li>
					))}
					<li>
						<button onClick={handleLogout}>Logout</button>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Hamburger
