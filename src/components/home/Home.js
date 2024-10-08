import { Link } from 'react-router-dom';
import './home.styles.css';
import { useState, useEffect } from 'react';
import image1 from '../../assets/axum-ethiopia.jpg';
import image2 from '../../assets/lalibela-1-min.jpg';
import image3 from '../../assets/Eritale.jpg';
import image4 from '../../assets/Bale-Mountains-National-Park.jpg';
import image5 from '../../assets/Gondar-Castle.jpg';
import image6 from '../../assets/Babile-Elephant-Sanctuary.jpg';
import image7 from '../../assets/Lower-Omo-Valley1.jpg';

// Store the image URLs
const imageUrls = [image1, image2, image3, image4, image5, image6, image7];

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loadedImage, setLoadedImage] = useState(imageUrls[0]); // Start with the first image loaded

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % imageUrls.length;
      const nextImage = new Image(); // Preload the next image
      nextImage.src = imageUrls[nextIndex];

      nextImage.onload = () => {
        setCurrentImageIndex(nextIndex); // Only update when the image is loaded
        setLoadedImage(imageUrls[nextIndex]);
      };
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up the interval
  }, [currentImageIndex]);

  return (
    <div
      className="home"
      style={{
        backgroundImage: `url(${loadedImage})`,
      }}
    >
      <h1>Explore Ethiopia</h1>
      <p>Discover the beauty of Ethiopia's landscapes, history, and culture.</p>
      <Link to="/about">
        <button>Learn More</button>
      </Link>
    </div>
  );
};

export default Home;
