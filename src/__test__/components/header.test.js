import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Header from '../../components/Header';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('Header component tests', () => {
  const header = mount(
    <ProviderMock>
      <Header />
    </ProviderMock>
  );

  it('Should render the proper title', () => {
    expect(header.find('.Header-title').text()).toEqual('Platzi Storee');
  });
});

describe('Header Snapshot', () => {
  it('Should match the snapshot', () => {
    const headerSnapshot = create(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );
    expect(headerSnapshot.toJSON()).toMatchSnapshot();
  });
});
