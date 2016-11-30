import React, {
  Component
} from 'react';
import { Link, } from 'react-router';

export default class HelpNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li>
          <Link to="/help/how-to" className="help-sidebar-link">
            How To
          </Link>
        </li>
        <li>
          <Link to="/help/ratings" className="help-sidebar-link">
            Ratings
          </Link>
        </li>
        <li>
          <Link to="/help" className="help-sidebar-link">
            ????
          </Link>
        </li>
        <li>
          <Link to="/help/faq" className="help-sidebar-link">
            FAQ
          </Link>
        </li>
        <li>
          <Link to="/help/contact" className="help-sidebar-link">
            Contact
          </Link>
        </li>
      </ul>
    );
  }
}
