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

export default {
  get: jest.fn().mockResolvedValue(mockResponse);
}