import Navbar from '../components/common/Navbar';
import According from '../components/common/Question/According';
import Banner from '../components/common/Question/Banner';
 import Footer from '../components/common/Footer';
 

function Questoin() {
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
    <According/>
    
    <Footer/>
    </div>
  )
}

 

 export default Questoin