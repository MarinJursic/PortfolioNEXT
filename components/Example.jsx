import React, { Component } from "react";
import VerticalCarousel from "./VerticalCarousel";
import uuidv4 from "uuid";
import { config } from "react-spring";

let slides = [
  {
    key: 1,
    content: {
      imageUrl: "./images/SaaS.png",
      imageAlt: "saas",
      projectName: "Honeycomb",
      description:
        "A Software As A Service Web Application built for home builders to help them organize their work and tasks so they can work more efficiently. Contains of 4 main pages: Home Page, Task Page, Gantt Chart, Calendar Page.",
      technologies: "NEXT.js / MongoDB",
      githubLink: "https://github.com/MarinJursic/fullstack-saas",
      demoLink: "https://baustela2.netlify.app/",
    },
  },
  {
    key: 2,
    content: {
      imageUrl: "./images/Tracker.png",
      imageAlt: "tracker",
      projectName: "Expense Tracker",
      description:
        "Expense Tracker lets you add income or expense in various different categories for a certain date and it keeps track of them using local storage. Incomes and expenses are then shown in a pie chart which tells you in which category you've spent or earned the most.",
      technologies: "React.js / Material-UI / Speechly",
      githubLink: "https://github.com/MarinJursic/expense-tracker",
      demoLink: "https://dreamy-keller-5bfec3.netlify.app/",
    },
  },
  {
    key: 3,
    content: {
      imageUrl: "./images/Ecommerce.png",
      imageAlt: "ecommerce",
      projectName: "Bakmazon",
      description:
        "Ecommerce web application built using React.js and Firebase on which people can buy all sorts of clothes and shoes. Offers a wide variety of filters for searching the clothes you'd like and also has coupons on checkout.",
      technologies: "React.js / Firebase",
      githubLink: "https://github.com/Brkic365/Bakmazon",
      demoLink: "https://bakmazon.netlify.app/",
    },
  },
  {
    key: 4,
    content: {
      imageUrl: "./images/Crypto.png",
      imageAlt: "crypto",
      projectName: "Crypto Exchange",
      description:
        "A Crypto Exchange Web Application on which clinets can buy 4 main types of crypto: Bitcoin, Ethereum, Litecoin and Bitcoin Cash. Users enter which crypto they like, the amount they would like, their wallet address and the site takes care of the rest.",
      technologies: "NEXT.js / Stipe API / Coinbase API",
      githubLink: "https://github.com/MarinJursic/CryptoExchange",
      demoLink: "https://crypto-exchange-liard.vercel.app/",
    },
  },
  {
    key: 5,
    content: {
      imageUrl: "./images/Untitled.png",
      imageAlt: "restaurant",
      projectName: "Restaurant Website",
      description:
        "A Restaurant website made with NEXT.js and MongoDB on which users can check out the restaurants menu and if they like their food they can order it and get it delivered to their address. Site also has a login system for users to create accounts.",
      technologies: "NEXT.js / MongoDB",
      githubLink: "https://google.com",
      demoLink: "https://google.com",
    },
  },
  {
    key: 6,
    content: {
      imageUrl: "./images/Nba.png",
      imageAlt: "nba",
      projectName: "Season Stats",
      description:
        "Season Stats allows you to search for a specific player that has played in the NBA or is still playing and lets you choose a season from which the stats will be. The stats come from an open source NBA Api (https://www.balldontlie.io/ ).",
      technologies: "React.js / Axios",
      githubLink: "https://github.com/MarinJursic/season-stats",
      demoLink: "https://hopeful-yalow-78dd65.netlify.app/",
    },
  },
  {
    key: 7,
    content: {
      imageUrl: "./images/Instagram.png",
      imageAlt: "instagram",
      projectName: "Instagram Clone",
      description:
        "Instagram Clone Web Application which is built using React.js, Tailwind CSS, Firebase and it tries to clone the basic functionalities of Instagram. Users can add others and view their posts and visit their profiles.",
      technologies: "React.js / Tailwind CSS / Firebase",
      githubLink: "https://github.com/MarinJursic/instagram-clone",
      demoLink: "https://instagram-clone-tau-two.vercel.app/",
    },
  },
  {
    key: 8,
    content: {
      imageUrl: "./images/Csgo.png",
      imageAlt: "csgo",
      projectName: "eWarz",
      description:
        "A CS:GO themed website for a CS:GO community server. Sites is built using React.js and TypeScript and Bootstrap. Consists of multiple pages and on the server page users have a button on which when they pressed they can join the server.",
      technologies: "React.js / TypeScript / Bootstrap",
      githubLink: "https://github.com/MarinJursic/cssite",
      demoLink: "https://affectionate-beaver-774e53.netlify.app/",
    },
  },
];

export default class Example extends Component {
  state = {
    goToSlide: 0,
    offsetRadius: 2,
    showNavigation: true,
    config: config.gentle,
  };

  // onChangeInput = e => {
  //   this.setState({
  //     [e.target.name]: parseInt(e.target.value, 10) || 0
  //   });
  // };

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "50vw",
          height: "80vh",
          margin: "0 auto",
        }}
      >
        <VerticalCarousel
          slides={slides}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}
