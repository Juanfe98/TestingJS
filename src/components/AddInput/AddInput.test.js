import { render, screen, fireEvent } from '@testing-library/react';
import AddInput from './AddInput';

const mockedSetTodos = jest.fn();

it('Should render the input element with the proper placeholder', () => {
  render(
    <AddInput 
      todos={[]} 
      setTodos={mockedSetTodos}
      />
  )
  const inputElement = screen.getByPlaceholderText('Add a new task here...');
  expect(inputElement).toBeInTheDocument();
})


//Firing events testing
it('Should be able to write in the input', () => {
  render(
    <AddInput 
      todos={[]} 
      setTodos={mockedSetTodos}
      />
  )
  const inputElement = screen.getByPlaceholderText('Add a new task here...');
  fireEvent.change(inputElement,{
    target: {
      value: 'Do homework'
    }
   })
  expect(inputElement.value).toBe('Do homework');
})

//Firing events testing
it('Should clean the input when add button is clicked', () => {
  render(
    <AddInput 
      todos={[]} 
      setTodos={mockedSetTodos}
      />
  )
  const inputElement = screen.getByPlaceholderText('Add a new task here...');
  const buttonElement = screen.getByRole("button", { class: 'add-btn' })
  fireEvent.change(inputElement,{
    target: {
      value: 'Do homework'
    }
   })
  fireEvent.click(buttonElement)
  expect(inputElement.value).toBe('');
})