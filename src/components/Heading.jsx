import PropTypes from 'prop-types'

const Heading = ({ children: title }) => {
	return <h1 className='text-3xl font-serif text-brown-800 mb-4'>{title}</h1>
}

Heading.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Heading
