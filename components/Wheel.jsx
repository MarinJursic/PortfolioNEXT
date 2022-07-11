/* eslint-disable react/jsx-key */
import React, { Component } from "react";
import Card from "./Card";

const allImages = [
  "./images/HTML.webp",
  "./images/CSS.webp",
  "./images/JavaScript.webp",
  "./images/React.svg",
  "./images/Redux.webp",
  "./images/NEXT.webp",
  "./images/TypeScript.svg",
  "./images/NodeJS.webp",
  "./images/Express.webp",
  "./images/Firebase.webp",
  "./images/Sass.webp",
  "./images/SocketIO.webp",
  "./images/MongoDB.webp",
  "./images/TailwindCSS.webp",
  "./images/Bootstrap.webp",
  "./images/GraphQL.webp",
];

export default class Wheel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      radius: props.width >= 1000 ? 550 : 450, // 250
      cards: [],
      theta: 0,
      snap_in_progress: false,
      cards_loaded: 0,
      loaded: false,
      snap_point: {
        x: null,
        y: null,
      },
    };

    this.temp_theta = 0.0;
    this.anim_id = null;
  }
  timeout = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  componentDidMount() {
    let center_of_wheel = {
      x: parseFloat(this.wheel.style.width) / 2.0,
      y: parseFloat(this.wheel.style.height) / 2.0,
    };

    let new_cards = [];

    for (let i = 0; i < 16; i++) {
      // 8
      new_cards.push(
        <Card
          pic={allImages[i]}
          theta={(Math.PI / 8.0) * i} // 4.0
          radius={this.state.radius}
          center={center_of_wheel}
          key={`card_${i}`}
          amLoaded={this.card_loaded}
          index={i}
        />
      );
    }

    this.setState({ cards: new_cards });

    let event = {
      deltaY: 0,
    };

    event.deltaY = 1;

    setInterval(() => this.handle_scroll(event), 10);
  }

  handle_scroll = (event) => {
    try {
      if (!this.state.loaded && this.snap_in_progress) {
        return;
      } else {
        clearTimeout(this.anim_id);
        let scroll_speed = (event.deltaY / 360) * 20;
        this.temp_theta += scroll_speed;

        this.wheel.style.transitionDuration = "1.0s"; // 0.1
        this.wheel.style.transitionDelay = "0.0s";
        this.wheel.style.transform = `translate(-50%,-50%) rotate(${this.temp_theta}deg)`;

        for (let i = 0; i < this.wheel.children.length; i++) {
          this.wheel.children[i].style.transitionDuration = "1.0s";
          this.wheel.children[i].style.transitionDelay = "0.0s";
          this.wheel.children[
            i
          ].style.transform = `translate(-50%,-50%) rotate(${
            -1.0 * this.temp_theta
          }deg)`;
        }

        this.anim_id = setTimeout(() => {
          this.setState(
            { theta: this.temp_theta, snap_in_progress: true },
            () => {
              this.snap_back();
            }
          );
        }, 150);
      }
    } catch (error) {}
  };

  snap_back = () => {
    let center_of_wheel = {
      x:
        this.wheel.getBoundingClientRect().x +
        this.wheel.getBoundingClientRect().width / 2,
      y:
        this.wheel.getBoundingClientRect().y +
        this.wheel.getBoundingClientRect().height / 2,
    };
    let snap_point_theta = Math.atan2(
      Math.abs(this.state.snap_point.y - center_of_wheel.y),
      Math.abs(this.state.snap_point.x - center_of_wheel.x)
    );
    snap_point_theta *= 180 / Math.PI;
    console.log(snap_point_theta);

    let shortest_distance =
      Math.pow(
        this.wheel.children[3].getBoundingClientRect().x +
          this.wheel.children[3].getBoundingClientRect().width / 2 -
          this.state.snap_point.x,
        2
      ) +
      Math.pow(
        this.wheel.children[3].getBoundingClientRect().y +
          this.wheel.children[3].getBoundingClientRect().height / 2 -
          this.state.snap_point.y,
        2
      );
    shortest_distance = Math.sqrt(shortest_distance);

    let closest_card = null;

    for (let i = 0; i < this.wheel.children.length; i++) {
      let dx = Math.pow(
        this.wheel.children[i].getBoundingClientRect().x +
          this.wheel.children[i].getBoundingClientRect().width / 2 -
          this.state.snap_point.x,
        2
      );
      let dy = Math.pow(
        this.wheel.children[i].getBoundingClientRect().y +
          this.wheel.children[i].getBoundingClientRect().height / 2 -
          this.state.snap_point.y,
        2
      );
      let current_shortest_distance = Math.sqrt(dx + dy);

      if (current_shortest_distance <= shortest_distance) {
        shortest_distance = current_shortest_distance;
        closest_card = this.wheel.children[i];
      }
    }

    let closest_cards_x =
      closest_card.getBoundingClientRect().x +
      closest_card.getBoundingClientRect().width / 2;
    let closest_cards_y =
      closest_card.getBoundingClientRect().y +
      closest_card.getBoundingClientRect().height / 2;
    let closest_cards_theta = Math.atan2(
      Math.abs(closest_cards_y - center_of_wheel.y),
      Math.abs(closest_cards_x - center_of_wheel.x)
    );
    closest_cards_theta *= 180 / Math.PI;

    let theta_between = Math.abs(closest_cards_theta - snap_point_theta);

    if (
      closest_cards_x > center_of_wheel.x &&
      closest_cards_y <= center_of_wheel.y
    ) {
      theta_between =
        closest_cards_theta > snap_point_theta
          ? theta_between
          : -1.0 * theta_between;
    } else if (
      closest_cards_x <= center_of_wheel.x &&
      closest_cards_y <= center_of_wheel.y
    ) {
      theta_between =
        closest_cards_theta > snap_point_theta
          ? -1.0 * theta_between
          : theta_between;
    } else if (
      closest_cards_x <= center_of_wheel.x &&
      closest_cards_y > center_of_wheel.y
    ) {
      theta_between =
        closest_cards_theta > snap_point_theta
          ? theta_between
          : -1.0 * theta_between;
    } else if (
      closest_cards_x > center_of_wheel.x &&
      closest_cards_y >= center_of_wheel.y
    ) {
      theta_between =
        closest_cards_theta > snap_point_theta
          ? -1.0 * theta_between
          : theta_between;
    }

    this.wheel.style.transitionDuration = "15.0s"; // 1.0
    this.wheel.style.transitionDelay = "0.0s"; // 0.1
    this.wheel.style.transform = `translate(-50%,-50%) rotate(${
      this.state.theta + theta_between
    }deg)`;

    for (let i = 0; i < this.wheel.children.length; i++) {
      this.wheel.children[i].style.transitionDuration = "15.0s";
      this.wheel.children[i].style.transitionDelay = "0.0s";
      if (this.wheel.children[i] === closest_card) {
        this.wheel.children[i].style.zIndex = 100;
        this.wheel.children[i].style.transform = `translate(-50%,-50%) rotate(${
          -1.0 * (this.state.theta + theta_between)
        }deg) scale(1.0)`;
      } else {
        this.wheel.children[i].style.zIndex = 1;
        this.wheel.children[i].style.transform = `translate(-50%,-50%) rotate(${
          -1.0 * (this.state.theta + theta_between)
        }deg) scale(1)`;
      }
    }

    this.anim_id = setTimeout(() => {
      this.setState((prevState) => {
        return {
          theta: prevState.theta + theta_between,
          snap_in_progress: true,
        };
      });
    }, 200);
  };

  card_loaded = () => {
    this.setState(
      (prevState) => {
        return {
          cards_loaded: prevState.cards_loaded + 1,
        };
      },
      () => {
        if (this.state.cards_loaded === 16) {
          this.setState({
            loaded: true,
            snap_point: {
              x:
                this.wheel.children[4].getBoundingClientRect().x +
                this.wheel.children[4].getBoundingClientRect().width / 2,
              y:
                this.wheel.children[4].getBoundingClientRect().y +
                this.wheel.children[4].getBoundingClientRect().height / 2,
            },
          });
        }
      }
    );
  };

  render() {
    return (
      <div
        onWheel={this.handle_scroll}
        ref={(ref_id) => (this.wheel = ref_id)}
        style={styles.wheel}
      >
        {this.state.cards}
      </div>
    );
  }
}

const styles = {
  wheel: {
    position: "absolute",
    bottom: "-150px",
    left: "50%",
    transform: "translate(-50%,-50%)",
    height: "250px",
    width: "250px",
    borderRadius: "100px",
    zIndex: "1000",
  },
};
