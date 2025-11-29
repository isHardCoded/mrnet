import CompositionDecision from './CompositionDecision/Index'
import ContactForm from './ContactForm/Index'
import Hero from './Hero/Index'
import Principle from './Principle/Index'
import TechSupport from './TechSupport/Index'
import WorkSchema from './WorkSchema/Index'

export default function Technology() {
	return (
		<>
			<Hero />
			<Principle />
			<WorkSchema />
			<CompositionDecision />
			<TechSupport />
			<ContactForm />
		</>
	)
}
