// App.test.js
import React from 'react';
import renderer from 'react-test-renderer';

import 'jest-styled-components';
import {Collatz} from './App';

// Creating snapshot test of rendered items
it('snapshots Collatz with test renderer', () => {
    const collatz = renderer.create(<Collatz number={ 13 } />)

    // possible component interaction here
    let tree = collatz.toJSON();
    expect(tree).toMatchSnapshot();
});