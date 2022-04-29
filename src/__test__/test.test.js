import React from 'react';
import { mount } from 'enzyme';
import Footer from '../components/Footer';

it('Test', () => {
  expect('hola').toBe('hola');
});

describe('Footer Component tests', () => {
  const footer = mount(<Footer />);

  it('Render del componente Footer', () => {
    expect(footer.length).toEqual(1);
  });

  it('Should render the footer title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
