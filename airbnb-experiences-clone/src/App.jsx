import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./App.css";
import data from "./data.jsx";

export default function App() {
  // <Hero />
  const cards = data.map((item) => {
    return (
      <Card
        key = {item.id}
        item = {item}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <section className="cards-list">
        {cards}
      </section>
      
    </div>
  );
}
