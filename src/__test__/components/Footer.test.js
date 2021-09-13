import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('Testing <Footer />', () => {
  const footer = mount(<Footer />);
  test('Rendering component', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del título', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
