import React from 'react'
import { FormField, Button, Checkbox, Form } from 'semantic-ui-react'

const AddTaskForm = ({handleSubmit,handleChange,task}) => (
  <Form onSubmit={handleSubmit}>
    <FormField>
      <label>Title</label>
      <input placeholder='Add title' name='title' value={task.title} onChange={handleChange}/>
    </FormField>
    <FormField>
      <label>Description</label>
      <input placeholder='Add description' value={task.description} name='description' onChange={handleChange}/>
    </FormField>
 
    <Button type='submit'>Submit</Button>
  </Form>
)

export default AddTaskForm