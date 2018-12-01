import StarRatings from "../../../node_modules/react-star-ratings";
import React from "react";

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 3
    };
    this.changeRating = this.changeRating.bind(this);
  }

  componentDidMount() {
    this.changeRating(this.props.rating);
  }

  changeRating(newRating) {
    this.setState({
      rating: newRating
    });
  }

  render() {
    return (
      <StarRatings
        rating={Number(this.state.rating)}
        starRatedColor="#da3743"
        starDimension="16px"
        starSpacing="1px"
        changeRating={this.changeRating}
        numberOfStars={5}
        name="rating"
      />
    );
  }
}

export default Rating;
