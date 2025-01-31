import Navbar from '../components/common/Navbar';
import Banner from '../components/common/About/Banner';
import _About from '../components/common/About/_About';
import Card from '../components/common/About/Card';
import Footer from '../components/common/Footer';
 

function About() {
  const styles = {
    appContainer: {
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      backgroundImage: "url('./assets/images/bg.png')", 
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom center',
      backgroundSize: 'cover',
      transition: 'background-size 0.3s ease-in-out',
    },
  };

  
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    styles.appContainer.backgroundSize = 'contain';  
  }
  return (
    <div style={styles.appContainer}>
    <Navbar/>
    <Banner/>
    <_About/>
    <Card/>
    <Footer/>
    </div>
  )
}

 

 export default About