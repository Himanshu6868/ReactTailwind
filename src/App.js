import ChatButton from "./components/ChatButton";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Footer from "./components/footer";

function App() {
  const cardsData = [
    {
      image: "/card-icon.svg",
      title: "Getting Started",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus lorem ut lorem luctus.",
      banner: "New",
    },
    {
      image: "/card-icon.svg",
      title: "Getting Started",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus lorem ut lorem luctus.",
    },
    {
      image: "/card-icon.svg",
      title: "Getting Started",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus lorem ut lorem luctus.",
      banner: "Updated",
    },
    {
      image: "/card-icon.svg",
      title: "Getting Started",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus lorem ut lorem luctus.",
    },
    {
      image: "/card-icon.svg",
      title: "Getting Started",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus lorem ut lorem luctus.",
    },
    {
      image: "/card-icon.svg",
      title: "Getting Started",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla maximus lorem ut lorem luctus.",
    },
  ];

  return (
    <div>
      <Navbar />
      <Home />
      <ChatButton />
      <div className="my-16">
        <h2 class="sm:text-4xl text-2xl text-center  font-semibold title-font mb-6">
          Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center px-6 lg:px-28 ">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
              banner={card.banner}
            />
          ))}
        </div>
      </div>
      <div className="border-dotted border-b-4 border-grey-500 sm:my-32 my-10"></div>
      <Footer />
    </div>
  );
}

export default App;
