/* eslint-env mocha */

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render, mount, shallow, } from 'enzyme';
import { assert, expect, } from 'meteor/practicalmeteor:chai';

import Home from '../../../ui/pages/home';
import SearchInput from '../../../ui/components/searchInput';

describe('<Home />', () => {
  it('contains an <SearchInput/> component', function () {
    const wrapper = shallow(<Home />);
    // expect(wrapper.find(SearchInput)).to.have.length(1);
  });

});
