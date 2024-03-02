import React from "react";
import Card from "./components/Card";

const App = () => {
  const cardsData = [
    {
      title: "Event 1",
      description: "Description of the event",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Event 2",
      description: "Description of the event",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Event 3",
      description: "Description of the event",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Event 4",
      description: "Description of the event",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Event 5",
      description: "Description of the event",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Event 6",
      description: "Description of the event",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Event 7",
      description: "Description of the event",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      title: "Event 8",
      description: "Description of the event",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    // Agrega más objetos de datos para cada tarjeta según sea necesario
  ];

  return (
    <div className="App">
      <h1 className="title">Building Brighter Futures: Children's Role in Shaping Society</h1>
      <div className="card-container">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
