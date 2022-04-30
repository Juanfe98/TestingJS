import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowerList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  )
}

const mockResponse = {
  data: {
    results: [
      {
        name: {first: "Juan", last: 'montaña'},
        picture: "https://randomuser.me/api/portraits/men/73.jpg",
        logn: "JuanFe"
      }
    ]
  }
}

jest.mock('axios', () => ({
  __esModule: true,
  get: () => ({
    your:  mockResponse
  })
}));

it('should render the card', async () => {
  render(<MockFollowerList />);
  const cardFollower = await screen.findAllByTestId('follower-item-0');
  expect(cardFollower.length).toBeGreaterThan(2);
})