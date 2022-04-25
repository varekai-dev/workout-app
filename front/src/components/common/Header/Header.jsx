import styles from './Header.module.scss'

import userImage from '../../../images/header/user.svg'
import Hamburger from './Hamburger/Hamburger.jsx'

const Header = () => {
	return (
		<header className={styles.header}>
			<button>
				<img src={userImage} alt="Auth" />
			</button>
			<Hamburger />
		</header>
	)
}

export default Header
