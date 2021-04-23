import shopLocalImage from './images/shop-local.png';
import reviewsImage from './images/small-reviews.png';
import graphImage from './images/stress-graph.png';

let projectData = [
  {
    img: reviewsImage,
    title: 'Ratings & Reviews',
    description: "The ratings & reviews section for the product page on a retail website. Built using React, this app includes a pop-up modal, dynamic graphs, hoverable stars, and a list of reviews with a smooth, 'infinite' scroll. It's responsive for both mobile and desktop viewing and achieved a 95 Lighthouse score.",
    link: 'https://github.com/audreee/ratings-and-reviews'
  },
  {
    img: shopLocalImage,
    title: 'Shop Local',
    description: 'A local business finder that finds small businesses owned by members of vulnerable communities. This app was built in under 2 days as part of a challenge to build a minimum viable product in less than 2 days. The search engine was built using PostgreSQL and the maps is powered by the Google Maps API.',
    link: 'https://github.com/audreee/shop-local'
  },
  {
    img: graphImage,
    title: 'System Design',
    description: "A back end API for the Questions & Answers data of an e-commerce website. This app was built to scale using Express/Node, PostgreSQL, Docker, and deployed to AWS EC2 micro instances. The SQL queries return data in nested JSON objects. It supports 0 - 10,000rps in 20 seconds with a 0% error rate.",
    link: 'https://github.com/audreee/system-design'
  }
]

export default projectData;