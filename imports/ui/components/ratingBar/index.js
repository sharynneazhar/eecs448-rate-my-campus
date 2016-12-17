import React, {
  Component,
  PropTypes
} from 'react';

export default class Bar extends Component {
  constructor(props) {
    super(props);
  }

  rate(e) {
    if(e > rating) {
      for(var i=1; i <= e; i++) {
        let id = "#" + i;
        $(id).addClass("selected");
      }
    }
    else if(e < rating) {
      for(var i=5; i > e; i--) {
        let id = "#" + i;
        $(id).removeClass("selected");
      }
    }
  }

  render() {
    rating = 0;
    return (
      <div className="rate">
        <div className="br-wrapper">
          <select id="rating" name="rating" autoComplete="off">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div className="br-widget">
            <a id="1" className="bar" onClick={this.rate(1)} />
            <a id="2" className="bar" onClick={this.rate(2)} />
            <a id="3" className="bar" onClick={this.rate(3)} />
            <a id="4" className="bar" onClick={this.rate(4)} />
            <a id="5" className="bar" onClick={this.rate(5)} />
          </div>
        </div>
        <div className={this.props.color}>0</div>
        <div className="quality">{this.props.quality}</div>
      </div>
    );
  }
}

Bar.propTypes = {
  color: PropTypes.string,
  quality: PropTypes.string,
};
