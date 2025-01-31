import Navbar from '../components/common/Navbar';
import Banner from '../components/common/Banner';
import What from '../components/common/What';
import Rasa from '../components/common/Rasa';
import Maps from '../components/common/Maps';
import People from '../components/common/People';
import Kunjungan from '../components/common/Kunjungan';
import Footer from '../components/common/Footer';
 

function Home() {
  const styles = {
    appContainer: {
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      backgroundImage: "url('./assets/images/bg.png')", // Sesuaikan path sesuai lokasi gambar Anda
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom center',
      backgroundSize: 'cover',
      transition: 'background-size 0.3s ease-in-out',
    },
  };

  // Media query untuk mobile
  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    styles.appContainer.backgroundSize = 'contain'; // Jika mobile, gambar lebih kecil
  }
  return (
    <div style={styles.appContainer}>
      <Navbar/>
    <Banner/>
 <What/>
 <Rasa/>
 <Maps/>
 <People/>
 <Kunjungan/>
 <Footer/>
    </div>
  )
}

 

 export default Home