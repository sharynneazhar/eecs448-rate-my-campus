/* eslint-env mocha */

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { mount, shallow, } from 'enzyme';
import { assert, expect, } from 'meteor/practicalmeteor:chai';
import sinon from 'sinon';

import Button from '../button';

describe('Button', () => {
  if (Meteor.isServer) return; // force client-only

  it('should parse the correct style from prop', function () {
    const props = { style: 'btn-default', text: 'default button', };
    const component = shallow(<Button {...props} />);
    expect(component.text()).to.contain('default button');
    expect(component.find('.btn-default')).to.be.have.length(1);
  });

  it('simulate click events', function() {
    const onClick = sinon.spy();
    const props = { text: 'default button', onClick: onClick, };
    const component = shallow(<Button {...props} />);
    component.find('button').simulate('click');
    expect(onClick).to.have.property('callCount', 1);
  });

});
