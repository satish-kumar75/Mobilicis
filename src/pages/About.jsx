import React, { useState } from "react";
import { assets } from "../assets/assets";

const About = () => {
  const [selectedPlace, setSelectedPlace] = useState("Tokyo");
  const [selectedCuisine, setSelectedCuisine] = useState("Sushi");

  const places = ["Tokyo", "Kyoto", "Osaka", "Nara"];

  const paragraphContent = {
    Tokyo:
      "🇯🇵 Japan, the land of the rising sun 🌅, is an island nation in East Asia. Tokyo, the capital city 🏙️, is a bustling metropolis known for its modernity and traditional culture. From the majestic Mount Fuji 🗻 to the serene temples of Kyoto, Japan offers a unique blend of natural beauty and rich heritage. Visitors can explore ancient castles 🏰, vibrant markets 🛍️, and tranquil gardens 🌸 while experiencing the warmth and hospitality of the Japanese people. Whether you're a foodie 🍣, history buff 📜, or nature lover 🌳, Japan has something for everyone. Come and discover the magic of Japan! ✨",
    Kyoto:
      "🎎 Kyoto, the ancient capital of Japan, is renowned for its historic temples ⛩️, traditional tea houses 🍵, and picturesque gardens 🌺. Visitors can immerse themselves in Japanese culture by participating in tea ceremonies, exploring historic districts, and admiring the breathtaking scenery 🌄. From the iconic Fushimi Inari Shrine to the serene Arashiyama Bamboo Grove, Kyoto offers a wealth of attractions for travelers of all ages. Whether you're a history buff, nature lover, or foodie, Kyoto has something for everyone. Come and experience the beauty and tranquility of this enchanting city! 🌿",
    Osaka:
      "🍜 Osaka, the vibrant heart of Japan, is famous for its street food 🍢, bustling markets 🎪, and lively nightlife 🌃. From the iconic Osaka Castle 🏯 to the bustling Dotonbori district, there is no shortage of things to see and do in this dynamic city. Visitors can also enjoy traditional puppet shows 🎭, sumo wrestling matches 🤼‍♂️, and cherry blossom festivals 🌸. Whether you're a foodie 🍱, history buff 📚, or culture enthusiast 🎎, Osaka has something for everyone. Come and experience the energy and excitement of this lively city! 💫",
    Nara: "🦌 Nara, the ancient capital of Japan, is a treasure trove of cultural heritage and natural beauty. Home to the iconic Todaiji Temple 🏛️ and friendly deer 🦌 roaming freely in Nara Park, this historic city offers a glimpse into Japan's rich past. Visitors can explore ancient temples ⛩️, lush gardens 🌳, and tranquil forests 🌲 while experiencing the warmth and hospitality of the local community. Whether you're a history buff 📜, nature lover 🍃, or animal enthusiast 🐾, Nara has something for everyone. Come and discover the magic of this enchanting city! 🌟",
  };

  const cuisines = {
    Sushi:
      "Sushi is a beloved Japanese dish consisting of bite-sized pieces of vinegared rice topped with fresh fish or other ingredients. Originating in ancient Japan, sushi has evolved into a culinary art form with various styles and preparations. Whether you prefer nigiri, maki, or sashimi, sushi offers a delightful combination of flavors and textures that tantalize the taste buds.",
    Ramen:
      "Ramen is a comforting noodle soup that has captured the hearts and taste buds of people worldwide. Made with wheat noodles served in a flavorful broth, ramen comes in endless regional variations, each boasting its own unique broth, toppings, and noodle texture. From rich and creamy tonkotsu ramen to tangy and spicy miso ramen, there's a ramen style to satisfy every craving.",
    Okonomiyaki:
      "Okonomiyaki, often referred to as 'Japanese savory pancakes,' is a popular street food dish originating from Osaka. This savory pancake is made from a batter of flour, eggs, shredded cabbage, and various ingredients such as pork belly, seafood, or vegetables. Cooked on a griddle and topped with savory sauces, bonito flakes, and seaweed flakes, okonomiyaki offers a satisfying combination of flavors and textures.",
    Sashimi:
      "Sashimi is a traditional Japanese dish consisting of thinly sliced raw fish or seafood served without rice. Known for its simplicity and purity, sashimi highlights the natural flavors and textures of the freshest ingredients. From delicate slices of tuna and salmon to exotic varieties like sea urchin and octopus, sashimi offers a culinary experience that celebrates the ocean's bounty.",
  };
  const cultureData = [
    {
      title: "Japan Culture",
      image: assets.culture,
      description:
        "Japan's culture is a rich tapestry woven with traditions, customs, and rituals passed down through generations. From tea ceremonies to kimono fashion, explore the depth and beauty of Japanese culture.",
    },
    {
      title: "Anime",
      image: assets.anime,
      description:
        "Anime is a vibrant and dynamic aspect of Japanese culture, captivating audiences worldwide with its diverse genres, compelling characters, and imaginative storytelling. Dive into the world of anime and discover its endless possibilities.",
    },
    {
      title: "Traditional Arts",
      image: assets.arts,
      description:
        "Experience the elegance and beauty of Japan's traditional arts, from intricate calligraphy and delicate ceramics to mesmerizing kabuki performances. Immerse yourself in the timeless traditions that have shaped Japanese culture for centuries.",
    },
    {
      title: "The Essence of Japan",
      image: assets.essence,
      description:
        "Discover the essence of Japan, where ancient traditions blend harmoniously with modern innovations. From the tranquil beauty of cherry blossoms to the bustling energy of Tokyo's neon-lit streets, explore the diverse landscapes and rich cultural heritage that define this captivating country.",
    },
    {
      title: "Festivals",
      image: assets.festivals,
      description:
        "Immerse yourself in the vibrant celebrations of Japanese festivals. From cherry blossom festivals to traditional dance performances and lantern-lit processions, experience the rich cultural heritage and festive spirit of Japan.",
    },
    {
      title: "Technology Hub",
      image: assets.tech,
      description:
        "Discover Japan's reputation as a global leader in technology and innovation. From cutting-edge robotics and electronic gadgets to high-speed trains and futuristic cities, Japan continues to push the boundaries of technological advancement.",
    },
  ];

  return (
    <div>
      <div>
        <img
          className="h-[90vh] w-full object-cover object-bottom relative"
          src={assets.japanBackground}
          alt="japan background"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className=" text-[200px] font-bold font-serif text-purple-heart-200 leading-none">
            JAPAN
          </h1>
          <p className="text-3xl text-purple-heart-300 leading-3 text-center uppercase">
            Unveiling the Land of the Rising Sun
          </p>
        </div>

        <div className="flex justify-between items-center px-9 absolute bottom-0 w-full">
          {places.map((place) => (
            <Place
              key={place}
              image={assets[place.toLowerCase()]}
              place={place}
              title={`GET INTO THE FUTURE IN ${place.toUpperCase()}`}
            />
          ))}
        </div>
      </div>
      <div className="flex items-center px-9 py-6 gap-10">
        <img className="rounded-xl" src={assets.japan} alt="Japan" />
        <div>
          <h2 className="text-7xl mb-7 text-purple-heart-950 uppercase font-semibold tracking-wide">
            Tales of Japan
          </h2>
          <p className="text-xl text-purple-heart-300">
            {paragraphContent[selectedPlace]}
          </p>
          <div className="flex gap-9 mt-9">
            {places.map((place) => (
              <span
                key={place}
                className={`text-3xl cursor-pointer ${
                  selectedPlace === place
                    ? "text-purple-heart-700 underline"
                    : ""
                }`}
                onClick={() => setSelectedPlace(place)}
              >
                {place}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center px-9 py-6 gap-10">
        <div>
          <h2 className="text-7xl mb-7 text-purple-heart-950 uppercase font-semibold tracking-wide">
            Japanese Cuisine
          </h2>
          <p className="text-xl text-purple-heart-300">
            {cuisines[selectedCuisine]}
          </p>
          <div className="flex gap-9 mt-9">
            {Object.keys(cuisines).map((cuisine) => (
              <span
                key={cuisine}
                className={`text-3xl cursor-pointer ${
                  selectedCuisine === cuisine
                    ? "text-purple-heart-700 underline"
                    : ""
                }`}
                onClick={() => setSelectedCuisine(cuisine)}
              >
                {cuisine}
              </span>
            ))}
          </div>
        </div>
        <img
          className="rounded-xl w-[507px] h-[658px] object-cover"
          src={assets.cuisine}
          alt=" Japanese Cuisine"
        />
      </div>

      <div className="mx-auto px-6 py-8">
        <h1 className="text-8xl text-center uppercase font-semibold text-purple-heart-950 mb-8">
          Explore Japanese Culture
        </h1>

        <div className="culture grid gap-8">
          {cultureData.map((data) => (
            <div className="bg-gradient-to-br from-purple-heart-800 via-purple-heart-950 to-transparent rounded-xl shadow-md p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl text-center font-semibold text-purple-heart-300 mb-4">
                  {data.title}
                </h2>
                <img
                  className="w-full object-cover rounded-md mb-4"
                  src={data.image}
                  alt="Japan Culture"
                />
                <p className="text-purple-heart-200 text-center">
                  {data.description}
                </p>
              </div>
              <button className="button">Explore More</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Place = ({ place, image, title, selected, handleClick }) => {
  return (
    <div className="flex items-center gap-4">
      <img src={image} alt={place} />
      <div>
        <p className="tracking-tighter text-purple-heart-200 font-semibold">
          {title}
        </p>
        <span className="font-medium">{place}</span>
      </div>
    </div>
  );
};

export default About;
