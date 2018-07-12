import React from 'react';
import ReactDOM from 'react-dom';
import {PlayerStats} from './PlayerStats';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

it('shows expected stats', () => {
  const div = document.createElement('div');

  const player = {
    "firstname": "Stan",
      "lastname": "Wawrinka",
      "shortname": "S.WAW",
      "sex": "M",
      "country": {
        "picture": "https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png",
        "code": "SUI"
      },
      "picture": "https://i.eurosport.com/_iss_/person/pp_clubteam/large/325225.jpg",
      "data": {
        "rank": 21,
        "points": 1784,
        "weight": 81000,
        "height": 183,
        "age": 33,
        "last": [
          1,
          1,
          1,
          0,
          1
        ]
      }
  }

  const card = shallow(<PlayerStats player={player} />)
  const text = card.text()
  // token content test.
  expect(text).toContain("Stan Wawrinka")
});
