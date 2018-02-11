import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Button, Input } from 'semantic-ui-react'

let AddTodo = ({ dispatch }) => {
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
		  const input = document.querySelector('input[name=todo]')
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <Input name='todo'/>
        <Button type="submit">
          Add Todo
        </Button>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo
