
            import React, { useEffect, useState, useRef } from 'react';
            import Navbar from '../components/common/Navbar';
            import Banner from '../components/common/Banner';
            import What from '../components/common/What';
            import Rasa from '../components/common/Rasa';
            import Maps from '../components/common/Maps';
            import People from '../components/common/People';
            import Kunjungan from '../components/common/Kunjungan';
            import Footer from '../components/common/Footer';
            import { isMobile, isTablet } from 'react-device-detect';
            import axios from 'axios';
import Whatsapp from './Whatsapp';
            
            function Home() {
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
            
              const [ipAddress, setIpAddress] = useState('');
              const hasSentData = useRef(false); // Ref untuk memeriksa apakah data sudah terkirim
            
              // Mendapatkan alamat IP pengunjung
              useEffect(() => {
                const fetchIpAddress = async () => {
                  try {
                    const response = await axios.get('https://api.ipify.org?format=json'); // Mendapatkan IP pengunjung
                    setIpAddress(response.data.ip);
                  } catch (error) {
                    console.error('Error fetching IP address:', error);
                  }
                };
            
                fetchIpAddress();
              }, []);
            
              // Media query untuk mobile
              const isMobileDevice = window.innerWidth <= 768;
              if (isMobileDevice) {
                styles.appContainer.backgroundSize = 'contain';
              }
            
              const device = isMobileDevice ? 'Mobile' : isTablet ? 'Tablet' : 'Desktop';
            
              // Mengirim data perangkat dan IP ke backend Laravel
              useEffect(() => {
                const sendDeviceData = async () => {
                  if (ipAddress && !hasSentData.current) { // Pastikan data hanya dikirim sekali
                    try {
                      await axios.post('http://192.168.1.22:8000/api/track-visitor', {
                        device,
                        ip_address: ipAddress, // Kirimkan IP address yang diperoleh
                      });
                      hasSentData.current = true; // Tandai data sudah terkirim
                    } catch (error) {
                      console.error('Error sending device data:', error);
                    }
                  }
                };
            
                sendDeviceData();
              }, [ipAddress, device]); // Mengirimkan data jika ipAddress atau device berubah
            
              return (
                <div style={styles.appContainer}>
                    <Navbar /> 
                  <Banner />
                  <What /> 
                  <Rasa />
                  <Maps />
                  <People />
                 <Kunjungan /> 
                 <Whatsapp/>
                  <Footer /> 
                </div>
              );
            }
            
            export default Home;
            