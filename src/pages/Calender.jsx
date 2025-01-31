import Navbar from '../components/common/Navbar';
import Banner from '../components/common/Callender/Banner';
  import Footer from '../components/common/Footer';
import CalendarEvent from '@/components/common/Callender/CalendarEvent';
 

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
    <CalendarEvent/>
     <Footer/>
    </div>
  )
}

 

 export default About