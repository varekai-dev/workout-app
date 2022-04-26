import { useState } from 'react'
import App from '../App.jsx'
import { AuthContext } from '../contexts/AuthContext.js'

const AppProvider = () => {
	const [isAuth, setIsAuth] = useState(false)
	return (
		<AuthContext.Provider value={(isAuth, setIsAuth)}>
			<App />
		</AuthContext.Provider>
	)
}

export default AppProvider
