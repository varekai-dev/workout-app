import React from 'react'
import { Link } from 'react-router-dom'
import hamburgerImage from '../../../../images/header/hamburger.svg'
import hamburgerCloseImage from '../../../../images/header/hamburger-close.svg'

import styles from './Hamburger.module.scss'
import { menu } from './menuBase.js'

const Hamburger = () => {
	const [show, setShow] = React.useState(false)
	const handleLogout = () => {}
	return (
		<div className={styles.wrapper}>
			<button onClick={() => setShow(!show)}>
				<img src={show ? hamburgerCloseImage : hamburgerImage} alt="Auth" />
			</button>
			<nav className={`${styles.menu} ${show ? styles.show : ''}`}>
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
