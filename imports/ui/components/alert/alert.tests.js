/* eslint-env mocha */

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { mount, shallow, } from 'enzyme';
import { assert, expect, } from 'meteor/practicalmeteor:chai';

import Alert from '../alert';

describe('Alert', () => {
  if (Meteor.isServer) return; // force client-only

  it('should show an error alert', function () {
    const props = { type: 'error', text: 'this is an error', };
    const component = shallow(<Alert {...props} />);
    expect(component.text()).to.contain('this is an error');
    expect(component.find('.alert-danger')).to.be.have.length(1);
    expect(component.find('button')).to.have.length(1);
  });

  it('should show an info alert', function () {
    const props = { type: 'info', text: 'this is an info', };
    const component = shallow(<Alert {...props} />);
    expect(component.text()).to.contain('this is an info');
    expect(component.find('.alert-info')).to.be.have.length(1);
    expect(component.find('button')).to.have.length(1);
  });

  it('should show an warning alert', function () {
    const props = { type: 'warning', text: 'this is a warning', };
    const component = shallow(<Alert {...props} />);
    expect(component.text()).to.contain('this is a warning');
    expect(component.find('.alert-warning')).to.be.have.length(1);
    expect(component.find('button')).to.have.length(1);
  });

  it('should show an success alert', function () {
    const props = { type: 'success', text: 'this is a success', };
    const component = shallow(<Alert {...props} />);
    expect(component.text()).to.contain('this is a success');
    expect(component.find('.alert-success')).to.be.have.length(1);
    expect(component.find('button')).to.have.length(1);
  });
});
