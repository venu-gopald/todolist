import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TodoActions from '../actions';


const TodoList = ({todos, actions}) =>
    (
        <ul>
            { todos && todos.map((todo) => <TodoItem key={todo.id} todo={todo} {...actions}/>)}
        </ul>
    )

TodoList.propTypes = {
    actions: PropTypes.object.isRequired
}


const mapStateToProps = state => ({
        todos:state.todos
    }
)

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps )(TodoList)