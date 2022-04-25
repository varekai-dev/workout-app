import React from 'react'
import Layout from '../../common/Layout/Layout.jsx'
import bgImage from '../../../images/new-workout-bg.jpg'
import Field from '../../ui/Field/Field.jsx'
import Button from '../../ui/Button/Button.jsx'
import ReactSelect from 'react-select'

import styles from './NewWorkout.module.scss'
import { Link } from 'react-router-dom'

const NewWorkout = () => {
	const [name, setName] = React.useState('')
	const [exercise, setExercise] = React.useState([])
	const handleSubmit = () => {}
	return (
		<>
			<Layout bgImage={bgImage} heading="Create new workout" />
			<div className={styles.wrapper}>
				<form onSubmit={handleSubmit}>
					<Field
						placeholder="Enter name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<Link to="/new-exercise" className="dark-link">
						Add new exercise
					</Link>
					<ReactSelect
						classNamePrefix="select2-selection"
						placeholder="Exercises"
						title="Exercises"
						options={[
							{ value: 'asdsd', label: 'Push-ups' },
							{ value: 'sdasdsda', label: 'Pull-ups' },
						]}
						value={exercise}
						onChange={setExercise}
						isMulti={true}
						// menuIsOpen={true}
					/>
					<Button text="Create" callback={() => {}} />
				</form>
			</div>
		</>
	)
}

export default NewWorkout
