import React, {
  Component,
  PropTypes
} from 'react';

export default class RatingsList extends Component {
  constructor(props) {
    super(props);
    this.getFontColor = this.getFontColor.bind(this);
    this.manipulateRatingName = this.manipulateRatingName.bind(this);
  }

  getFontColor(val) {
    if (val >= 4) {
      return 'rating-value green-value';
    } else if (val >= 3) {
      return 'rating-value yellow-value';
    } else if (val >= 2) {
      return 'rating-value orange-value';
    }
    return 'rating-value red-value';
  }

  manipulateRatingName(val) {
    return val.replace(/([A-Z])/g, ' $1').trim();
  }

  render() {
    let second = Object.entries(this.props.parameters);
    let first = second.splice(0,4);
    return (
      <div className="row ratings-container">
        <div className="col-xs-6 rating-group">
          {first.map((rating, idx) => {
            return (
              <div
                key={idx}
                className={"ratings-inner" + (idx === 3 ? "" : " ratings-bottom-pad")}
              >
                <div className={this.getFontColor(rating[1])}>{rating[1].toFixed(1)}</div>
                <div className="rating-name">{this.manipulateRatingName(rating[0])}</div>
              </div>
            );
          })}
        </div>
        <div className="col-xs-6 rating-group">
          {second.map((rating, idx) => {
            return (
              <div
                key={idx}
                className={"ratings-inner" + (idx === 3 ? "" : " ratings-bottom-pad")}
              >
                <div className={this.getFontColor(rating[1])}>{rating[1].toFixed(1)}</div>
                <div className="rating-name">{this.manipulateRatingName(rating[0])}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

RatingsList.propTypes = {
  parameters: PropTypes.object,
};
