/* eslint-disable @next/next/no-img-element */
import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.amLoaded();
  }

  get_my_coords = (theta, radius) => {
    return {
      x: Math.cos(theta) * radius,
      y: Math.sin(theta) * radius,
    };
  };

  render() {
    let new_coords = this.get_my_coords(this.props.theta, this.props.radius);
    return (
      <div
        style={{
          ...styles.card,
          left: `${this.props.center.x + new_coords.x}px`,
          top: `${this.props.center.y - new_coords.y}px`,
        }}
      >
        <img
          src={this.props.pic}
          alt={`${this.props.index}`}
          style={styles.image}
        />
      </div>
    );
  }
}

const styles = {
  card: {
    margin: "0",
    padding: "0",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    height: "150px",
    width: "150px",
    backgroundColor: "white",
    borderRadius: "50%",
    boxShadow: "0px 3px 5px 1px rgba(0,0,0,0.4)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "60px",
  },
};

export default React.memo(Card);
