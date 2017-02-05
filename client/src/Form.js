import React from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { addObject, updateName, updateDescription } from './store'
import { connect } from 'react-redux'

const Form = ({
  name,
  description,
  addObject,
  updateName,
  updateDescription
}) =>
  <form>
    <h4>Create a new object</h4>
    <FormGroup controlId="formBasicText">
      <ControlLabel>Name:</ControlLabel>
      <FormControl
        type="text"
        value={ name }
        placeholder="Enter text"
        onChange={ (event) => updateName(event.target.value) }
      />
      <FormControl.Feedback />
      <ControlLabel>Description:</ControlLabel>
      <FormControl
        type="text"
        value={ description }
        placeholder="Enter description"
        onChange={ (event) => updateDescription(event.target.value) }
      />
      <FormControl.Feedback />
      <Button onClick={ () => {
        addObject(name, description)
      }
       }>Add</Button>
    </FormGroup>
  </form>

const mapStateToProps = (state) => {
  return {
    name: state.form.name,
    description: state.form.description
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addObject: (name, description) => {
      dispatch(addObject(name, description))
    },
    updateName: (name) => {
      dispatch(updateName(name))
    },
    updateDescription: (description) => {
      dispatch(updateDescription(description))
    }
  }
}

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)

export default FormContainer
