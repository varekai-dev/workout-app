import Hamburger from './Hamburger/Hamburger.jsx'

import userImage from '../../../images/header/user.svg'

import styles from './Header.module.scss'
import { useHistory } from 'react-router-dom'
const Header = () => {
	const { location, goBack, push } = useHistory()
	return (
		<header className={styles.header}>
			{location.pathname !== '/' ? (
				<button onClick={() => goBack()}></button>
			) : (
				<button onClick={() => push('/auth')}>
					<img src={userImage} alt="Auth" />
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header
