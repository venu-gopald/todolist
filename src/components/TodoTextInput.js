import React, {Component} from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

class TodoTextInput extends Component{

  constructor(props){
    super(props);
    this.state = {

    }
  }

  handleBlur = e => {
    const {newTodo, onSave} = this.props
    if(!newTodo){
      onSave(e.target.value)
    }
  }

  handleChange = e => {
    this.setState({text:e.target.value})
  }

  handleSubmit = e => {
    const {newTodo, onSave} = this.props
    const text = e.target.value.trim()
    if (e.which === 13){
      onSave(text);
      if (newTodo){
        this.setState({text:''});
      }
    }
  }
  
  render(){
    const {placeholder, editing, newTodo} = this.props
    const {text} = this.state
    return(
        <input
        className={
          classnames({
              edit: editing,
            'new-todo': newTodo
          })
        }
        type='text'
        placeholder={placeholder}
        value={text}
        autoFocus={true}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
        />
    );
  }
}

export default TodoTextInput

TodoTextInput.propTypes ={
  onSave:PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
}