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

describe('Register test cases',() => {
    test('should have Register component',() => {
        render(
            <Router>
                <Register/>
            </Router>
        )
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
