import React from 'react'
import Layout from '../../common/Layout/Layout.jsx'
import bgImage from '../../../images/auth-bg.png'
import Field from '../../ui/Field/Field.jsx'
import Button from '../../ui/Button/Button.jsx'
import Alert from '../../ui/Alert/Alert.jsx'
import Loader from '../../ui/Loader.jsx'

import styles from './Auth.module.scss'
import { useMutation } from 'react-query'
import { $api } from '../../../api/api.js'
import { useHistory } from 'react-router-dom'
import { useAuth } from '../../../hooks/useAuth.js'

const Auth = () => {
	const history = useHistory()
	const [email, setEmail] = React.useState('')
	const [password, setPassword] = React.useState('')
	const [type, setType] = React.useState('auth')
	const { setIsAuth } = useAuth()
	const {
		mutate: register,
		isLoading,
		error,
	} = useMutation(
		'Registration',
		() =>
			$api({
				url: '/users',
				type: 'POST',
				body: { email, password },
				auth: false,
			}),
		{
			onSuccess(data) {
				localStorage.setItem('token', data.token)
				setIsAuth(true)
				setEmail('')
				setPassword('')
				history.replace('/')
			},
		}
	)

	const handleSubmit = (e) => {
		e.preventDefault()

		if (type === 'auth') {
			console.log('auth')
		} else {
			register()
		}
	}
	return (
		<>
			<Layout bgImage={bgImage} heading="Auth || Register" />
			<div className="wrapper-inner-page">
				{error && <Alert type="error" text={error} />}
				{isLoading && <Loader />}
				<form onSubmit={handleSubmit}>
					<Field
						type="email"
						placeholder="Enter email"
						value={email}
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
