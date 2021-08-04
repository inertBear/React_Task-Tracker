import PropTypes from 'prop-types'

const Button = ({ color, text, onClick, showAddDialog }) => {
    return <button
                className='btn'
                onClick={onClick}
                style={{ backgroundColor: color}}
                color={color} >
            {showAddDialog ? 'Close' : 'Add'}
    </button>
}

export default Button