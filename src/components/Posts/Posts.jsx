import React from "react";

import "./Posts.css";

import Post from "../Post/Post";

import uuid from 'react-uuid';
import faker from 'faker';

const Posts = () => {
  const blogPosts = [
    {
      title: faker.name.title(),
      body: faker.lorem.paragraph(),
      author: faker.name.firstName() + " " + faker.name.lastName(),
      img:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      title: faker.name.title(),
      body:
      faker.lorem.paragraph(),
      author: faker.name.firstName() + " " + faker.name.lastName(),
      img:
        "https://northcoastcourier.co.za/wp-content/uploads/sites/73/2019/11/thunderstorm-3440450_960_720-520x400.jpg",
    },
    {
      title: faker.name.title(),
      body:
      faker.lorem.paragraph(),
      author: faker.name.firstName() + " " + faker.name.lastName(),
      img:
        "https://cdn.images.express.co.uk/img/dynamic/153/590x/BBC-Weather-Thunderstorms-rumble-over-Europe-1188639.jpg?r=1570648466807",
    },
    {
      title: faker.name.title(),
      body:
      faker.lorem.paragraph(),
      author: faker.name.firstName() + " " + faker.name.lastName(),
      img:
        "https://www.countypress.co.uk/resources/images/10017354.jpg?display=1&htype=0&type=responsive-gallery",
    },
  ];

  return (
    <div className="posts-container">
      {blogPosts.map((post, i) => (
        <Post key={uuid()} i={i} post={post} />
      ))}
    </div>
  );
};

export default Posts;
