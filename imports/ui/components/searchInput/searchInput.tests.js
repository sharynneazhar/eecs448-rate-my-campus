/* eslint-env mocha */

import React from 'react';
import { Meteor } from 'meteor/meteor';
import { mount, shallow, } from 'enzyme';
import { assert, expect, } from 'meteor/practicalmeteor:chai';
import sinon from 'sinon';

import SearchInput from '../button';

describe('SearchInput', () => {
  if (Meteor.isServer) return; // force client-only

  it('simulate input change events', function() {
    
  });

});
