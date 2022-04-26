import Hamburger from './Hamburger/Hamburger.jsx'
import { useHistory } from 'react-router-dom'

import userImage from '../../../images/header/user.svg'
import authImage from '../../../images/header/dumbbell.svg'
import arrowImage from '../../../images/header/arrow.svg'

import styles from './Header.module.scss'
import { useAuth } from '../../../hooks/useAuth.js'

const Header = () => {
	const { location, goBack, push } = useHistory()
	const { isAuth } = useAuth()
	return (
		<header className={styles.header}>
			{location.pathname !== '/' ? (
				<button onClick={() => goBack()}>
					<img src={arrowImage} alt="back" />
				</button>
			) : (
				<button onClick={() => push(isAuth ? '/profile' : '/auth')}>
					<img src={isAuth ? authImage : userImage} alt="Auth" height="40" />
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header
