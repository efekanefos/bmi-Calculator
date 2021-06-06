import React, { Component } from "react";
import ReactCardFlip from "react-card-flip";
import styled from "styled-components";
import "./MealPlan.css";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
class MealCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState((prevState) => ({ isFlipped: !prevState.isFlipped }));
  }

  render() {
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <div className="card mb-5 fullCard mx-auto full">
          <img
            src={`https://spoonacular.com/recipeImages/${this.props.item.id}-556x370.jpg`}
            className="card-img-top cardWidth mx-auto"
            alt="..."
          />
          <div className="card-body text-center">
            {this.props.item.title.slice(0, 25) + "..."}
          </div>
          <Button primary onClick={this.handleClick}>
            Details
          </Button>
        </div>

        <div className="fullCard card mx-auto mb-5 full">
          <div className="card-body">
            {this.props.item.title} <br /> <hr />
            Ready In : {this.props.item.readyInMinutes} Minutes <br />
            Servings : {this.props.item.servings}
          </div>

          <Button primary onClick={this.handleClick}>
            Back
          </Button>
        </div>
      </ReactCardFlip>
    );
  }
}

export default MealCard;
