
import { render, screen } from '@testing-library/react';
import PepoleEx from './peopleEx';
import * as React from 'react';
import { JSDOM } from "jsdom";
import "jest" 
describe('App component', () => {
 
    // eslint-disable-next-line @rushstack/hoist-jest-mock
    jest.mock('./peopleEx', () => ({
        "PrincipalType": {
            "User": 1,
            "DistributionList": 2,
            "SecurityGroup": 4,
            "SharePointGroup": 8,
        },
    }));

  test('it renders', async () => {

    const dom = new JSDOM()
    global.document = dom.window.document
    global.window = dom.window
    const peopleProps={
      context: null
    }
    const componet = React.createElement(PepoleEx,peopleProps)
    render(componet);
    screen.debug();
  });
});
