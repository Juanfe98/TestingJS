import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('Product Component', () => {
  it('Should render product component', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>
    );
    expect(product.length).toEqual(1);
  });

  it('button should execute the function passed as proo', () => {
    const handleAddToCart = jest.fn();
    const product = mount(
      <ProviderMock>
        <Product product={ProductMock} handleAddToCart={handleAddToCart} />
      </ProviderMock>,
    );
    product.find('button').simulate('click');
    expect(handleAddToCart).toHaveBeenCalledTimes(1);
  });
});
