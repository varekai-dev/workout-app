import React from 'react'
import Layout from '../../common/Layout/Layout.jsx'
import bgImage from '../../../images/auth-bg.png'
import Field from '../../ui/Field/Field.jsx'
import Button from '../../ui/Button/Button.jsx'
import Alert from '../../ui/Alert/Alert.jsx'

import styles from './Auth.module.scss'

const Auth = () => {
	const [name, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [type, setType] = React.useState('auth')

	const handleSubmit = (e) => {
		e.preventDefault()

		if (type === 'auth') {
			console.log('auth')
		} else {
			console.log('reg')
		}
	}
	return (
		<>
			<Layout bgImage={bgImage} heading="Auth || Register" />
			<div className="wrapper-inner-page">
				{true && <Alert text="You have been successfully" />}
				<form onSubmit={handleSubmit}>
					<Field
						type="email"
						placeholder="Enter email"
						value={name}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<Field
						placeholder="Enter password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>

					<div className={styles.wrapperButtons}>
						<Button text="Sign in" callback={() => setType('auth')} />
						<Button text="Sign up" callback={() => setType('reg')} />
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
