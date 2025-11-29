import CompositionDecision from './CompositionDecision/Index'
import Hero from './Hero/Index'
import Principle from './Principle/Index'
import WorkSchema from './WorkSchema/Index'

export default function Technology() {
	return (
		<>
			<Hero />
			<Principle />
			<WorkSchema />
			<CompositionDecision />
		</>
	)
}
