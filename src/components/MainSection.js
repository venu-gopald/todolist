import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as TodoActions from '../actions';
import TodoList from './TodoList';

const MainSection = ()=> <TodoList />

const mapStateToProps = state => ({
        todos:state.todos
    }
)

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps )(MainSection)
