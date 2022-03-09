import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import TodoFooter from "../TodoFooter";

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
}

describe('Task element', () => {
  it('Should render the number passed as props', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={4}/>)
    const paragraphElement = screen.getByRole('paragraph');
    expect(paragraphElement).toBeInTheDocument();
  })
  
  it('Should render the singular "task" when number is 1', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1}/>)
    const paragraphElement = screen.getByText(/1 task left/i);
    expect(paragraphElement).toBeInTheDocument();
  })
  
  it('The element should be invisible when the number of incomplete tasks is 0', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={0}/>)
    const paragraphElement = screen.getByText(/0 tasks left/i);
    expect(paragraphElement).not.toBeVisible();
  })
  
  it('sholud render the text on the paragraph', () => {
    render(
      <MockTodoFooter numberOfIncompleteTasks={1}/>
    )
    //different query method
    const paragraphElement = screen.getByRole('paragraph')
    console.log(paragraphElement.textContent);
    // assertion validating the VALUE of the element.
    expect(paragraphElement.textContent).toBe('1 task left');
  })
})
