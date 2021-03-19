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
import { render as renderer } from 'react-dom'

describe('home test cases',() => {
    test('should have home component',() => {
        render(
            <Router>
                <Home/>
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

    test('Hyperlinks in component should have 2 links : one for register and another for login',() => {
        const element = document.createElement('div')
        renderer(
            <Router>
                <Home/>
            </Router>,
            element
        );
        const count = element.getElementsByTagName('a').length;
        expect(count).toBe(2);

        
    });

})
