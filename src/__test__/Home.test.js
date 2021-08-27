import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import HomePage from '../components/Home';
import '@testing-library/jest-dom';

describe('Test Home page Components', () => {
  it('test HomePage function component renders without error', () => {
    const divElement = document.createElement('div');
    ReactDOM.render(<HomePage />, divElement);
  });

  it('render correctly', () => {
    const { getByTestId } = render(<HomePage />);
    expect(getByTestId('homepage')).toHaveTextContent('Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis justo id ex auctor semper. Praesent ornare justo at nisl sagittis blandit. Nunc dignissim dignissim mauris, sit amet ullamcorper felis commodo ut. Aliquam nec nunc porta, ornare eros ut, maximus mauris. Quisque ac felis placerat, hendrerit tellus vitae, tempus orci. In pharetra dolor at elit vulputate porta. Praesent sit amet elit dignissim, cursus turpis id, tempus odio. Ut aliquet, mi vitae dictum suscipit, enim felis sollicitudin ipsum, at egestas velit elit ac odio. Cras lectus nisi, suscipit vitae mattis a, tempor ultrices felis. Integer lacinia, leo vitae posuere iaculis, purus libero rhoncus dolor, nec eleifend leo lacus quis ligula. Aenean a venenatis dui. Nullam scelerisque tellus vel nisi commodo, a dignissim augue dictum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum pretium lectus quis purus hendrerit pharetra. Nulla volutpat, ligula id ultrices pulvinar, leo ipsum rutrum augue, in laoreet mauris nibh vitae nisl. Mauris eget diam eu justo bibendum molestie vitae vitae tellus.');
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
