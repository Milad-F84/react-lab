import { useState } from 'react'
import Header from './Header.jsx'
import Banner from './Banner.jsx';
import Describe from './Describe.jsx';
import Card from './Card.jsx';


const cardData = [
  {
      title: "Life lessons with Katie Zaferes",
      image: "./assets/img/cards/card1",
      rating: 5,
      price: 136,
      count: 6,
      isOnline: false,
      country: "USA",
  },
  {
      title: "Learn wedding photography",
      image: "./assets/img/cards/card2",
      rating: 5,
      price: 125,
      count: 30,
      isOnline: true,
      country: "USA",
  },
  {
      title: "Group Mountain Biking",
      image: "./assets/img/cards/card3",
      rating: 4.8,
      price: 50,
      count: 2,
      isOnline: false,
      country: "USA",
  },
];

export default function App() {
  return(
    <div>
      <Header />
      <Banner />
      <Describe />
      <Card value = {cardData}/>
    </div>
  )
}
