import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from './../Todo';

const MockupTodo = () => {
  return(
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  )
}

const addTodo = (tasks) => {
  const inputElement = screen.getByPlaceholderText('Add a new task here...');
  const buttonElement = screen.getByRole('button', {class: 'add-btn'});
  tasks.forEach(task => {
    fireEvent.change(inputElement, {
      target: {value: task}
    })
    fireEvent.click(buttonElement);
  });
}

describe("Integration test for todo CRUD components", () => {
  
  //Integration test = test between two or more components
  it('Should add the item to the TodoList', () => {
    render(<MockupTodo />)
    addTodo(['go shopping'])
    const todoItem = screen.getByText(/go shopping/i);
    expect(todoItem).toBeInTheDocument();
  })
  
  it('The number of elements in the todo list should be the same as the items added', () => {
    render(<MockupTodo />)
    addTodo(['go shopping', 'do homework', 'wash my hands']);
    const todoItemElements = screen.getAllByTestId('todoItem');
    expect(todoItemElements.length).toBe(3);
  })

  it('Should not be mark as completed when is created',() => {
    render(<MockupTodo />)
    addTodo(['go shopping', 'do homework', 'wash my hands']);
    const todoItem = screen.getByText(/go shopping/i);
    expect(todoItem).not.toHaveClass('todo-item-active')
  })

  it('Should mark as done a task when clicked',() => {
    render(<MockupTodo />)
    addTodo(['go shopping', 'do homework', 'wash my hands']);
    const todoItem = screen.getByText(/go shopping/i);
    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass('todo-item-active')
  })

})