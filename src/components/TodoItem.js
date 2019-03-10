import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class TodoItem extends Component {
    render(){
        const {todo} = this.props;
        return(
            <li>
                <label> {todo.text} </label>
            </li>
        )
    }

}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}