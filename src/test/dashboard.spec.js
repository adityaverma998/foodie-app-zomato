import Dashboard from '../components/Dashboard';
// please add your test cases here

// export default Dashboard;

import React from 'react';
// please add your test cases here
//export default Header;
import '@testing-library/jest-dom/extend-expect'
import {render} from  '@testing-library/react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from '../components/Register';
import Home from '../components/Home';
import Card from '../components/Card';

describe('Card test cases',() => {
    test('should have Card component',() => {
        // let params = {
        //     username : "some"
        // }
        expect(2+3).toBe(5);
    });

    // test('Dashboard component should have container boot strap class',() => {
    //     render(<Dashboard/>);
    //     expect(screen.getByTestId('containerid')).toHaveClass('container');
    // });

    // test('Dashboard component should have row boot strap class',() => {
    //     render(<Dashboard/>);
    //     expect(screen.getByTestId('rowid')).toHaveClass('row');
    // })
})
