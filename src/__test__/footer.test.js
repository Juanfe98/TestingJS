import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
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

describe('Footer Snapshot', () => {
  it('Component should match the UI snapshot version', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
