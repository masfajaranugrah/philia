import Navbar from '../components/common/Navbar';
import Banner from '../components/common/Wahana/Banner';
import Maps from '../components/common/Maps';
import Card from '../components/common/Wahana/Card';
import Footer from '../components/common/Footer';
import Whatsapp from './Whatsapp';
 

function Wahana() {
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
    <Maps/>
   <Card/>
   <Whatsapp/>
    <Footer/>
    </div>
  )
}

 


  
 export default Wahana