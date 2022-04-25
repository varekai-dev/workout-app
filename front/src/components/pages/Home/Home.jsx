import Button from '../../ui/Button/Button.jsx'
import Counters from '../../ui/Counters/Counters.jsx'
import Layout from '../../common/Layout/Layout.jsx'
import { useHistory } from 'react-router-dom'
import bgImage from '../../../images/home-bg.jpg'

import styles from './Home.module.scss'

const Home = () => {
	const history = useHistory()
	return (
		<Layout bgImage={bgImage}>
			<Button
				text="New"
				type="main"
				callback={() => history.push('/new-workout')}
			/>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			<Counters />
		</Layout>
	)
}

export default Home
