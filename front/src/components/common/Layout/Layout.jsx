import Header from '../Header/Header.jsx'

import styles from './Layout.module.scss'

const Layout = ({ children }) => {
	return (
		<div className={styles.wrapper}>
			<Header />
			{children}
		</div>
	)
}

export default Layout
