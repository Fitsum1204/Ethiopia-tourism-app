import { Link } from 'react-router-dom';
import './about.styles.css'
const About = () => {
  return (
    <div className="about">
      <h1 className='title'>About Us</h1>
      <p className='text'>
        We specialize in providing unforgettable experiences in Ethiopia, from breathtaking
        landscapes to rich cultural heritage.
      </p>
      <Link to="/">
        <button className='btn'>Back to Home</button>
      </Link>
    </div>
  );
}

export default About;
