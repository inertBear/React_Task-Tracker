import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAdd, showAddDialog }) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button
                color='steelblue'
                onClick ={onAdd}
                showAddDialog={showAddDialog}
            />
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header