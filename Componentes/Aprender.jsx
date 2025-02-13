import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet,ImageBackground } from "react-native";
import { Audio } from 'expo-av';
import { Ionicons } from '@expo/vector-icons'; // Para usar íconos

const Aprender = () => {
  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(""); // Mantener solo el nombre del archivo actual


  
  const audioBanks = [
    { name: 'CHI_E_LEI', source: require('../assets/audios/aprender/CHI_E_LEI.mp3') },
    { name: 'CHI_E_LUI', source: require('../assets/audios/aprender/CHI_E_LUI.mp3') },
    { name: 'COME_STAI', source: require('../assets/audios/aprender/COME_STAI.mp3') },
    { name: 'COME_TI_CHIAMI', source: require('../assets/audios/aprender/COME_TI_CHIAMI.mp3') },
    { name: 'DI_DOVE_SEI', source: require('../assets/audios/aprender/DI_DOVE_SEI.mp3') },
    { name: 'LA_MIA_FAMIGLIA_E_MOLTO_GRANDE', source: require('../assets/audios/aprender/LA_MIA_FAMIGLIA_E_MOLTO_GRANDE.mp3') },
    { name: 'MI_CHIAMO', source: require('../assets/audios/aprender/MI_CHIAMO.mp3') },
    { name: 'LEI_E_MIA_MAMA', source: require('../assets/audios/aprender/LEI_E_MIA_MAMA.mp3') },
    { name: 'LEI_E_MIA_SORELLA', source: require('../assets/audios/aprender/LEI_E_MIA_SORELLA.mp3') },
    { name: 'LUI_E_MIO_FRATELLO', source: require('../assets/audios/aprender/LUI_E_MIO_FRATELLO.mp3') },
    { name: 'LUI_E_MIO_PAPA', source: require('../assets/audios/aprender/LUI_E_MIO_PAPA.mp3') },
    { name: 'STO_BENE_GRAZIE', source: require('../assets/audios/aprender/STO_BENE_GRAZIE.mp3') },
    { name: 'DOVE_VIVI', source: require('../assets/audios/aprender/DOVE_VIVI.mp3') },
    { name: 'VIVO_IN_COLOMBIA', source: require('../assets/audios/aprender/VIVO_IN_COLOMBIA.mp3') },
    { name: 'VIVO_IN_UN_APPARTAMENTO', source: require('../assets/audios/aprender/VIVO_IN_UN_APPARTAMENTO.mp3') },
    { name: 'VIVO_IN_UNA_CASA', source: require('../assets/audios/aprender/VIVO_IN_UNA_CASA.mp3') },
    { name: 'DOVE_VIVONO_I_TUOI_GENITORI', source: require('../assets/audios/aprender/DOVE_VIVONO_I_TUOI_GENITORI.mp3') },
    { name: 'I_MEI_GENITORI_VIVONO_IN_COLOMBIA', source: require('../assets/audios/aprender/I_MEI_GENITORI_VIVONO_IN_COLOMBIA.mp3') },
    { name: 'SONO_DI', source: require('../assets/audios/aprender/SONO_DI.mp3') },
    // { name: 'VENGO_DA_LA_SVETZIA', source: require('../assets/audios/aprender/VENGO_DA_LA_SVETZIA.mp3') },
  ];

  // Función para formatear el nombre del audio
  const formatAudioName = (name) => {
    return name
      .replace(/_/g, ' ') // Reemplaza los guiones bajos por espacios
      .toLowerCase() // Convierte a minúsculas
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitaliza la primera letra de cada palabra
  };

  const playAudio = async (audio) => {
    try {
      const { sound } = await Audio.Sound.createAsync(audio.source); // Cargar el audio
      setSound(sound); // Guardar la referencia del sonido
      setCurrentAudio(audio.name); // Guardar el nombre del audio actual
      await sound.playAsync(); // Reproducir el audio
      setIsPlaying(true); // Cambiar el estado para indicar que está sonando
    } catch (error) {
      console.error('Error al reproducir el audio:', error); // Capturar y mostrar errores
    }
  };
  

  const togglePlayback = async () => {
    if (!sound) {
      // No hay un sonido cargado, seleccionar y reproducir un nuevo audio
      const randomIndex = Math.floor(Math.random() * audioBanks.length);
      const randomAudio = audioBanks[randomIndex];
      playAudio(randomAudio);
    } else {
      const status = await sound.getStatusAsync(); // Obtener estado actual del sonido
  
      if (status.isPlaying) {
        // Si está reproduciendo, pausar
        await sound.pauseAsync();
        setIsPlaying(false);
      } else if (status.positionMillis < status.durationMillis) {
        // Si está pausado y aún no ha terminado, reanudar
        await sound.playAsync();
        setIsPlaying(true);
      } else {
        // Si el audio terminó, reproducir uno nuevo
        const randomIndex = Math.floor(Math.random() * audioBanks.length);
        const randomAudio = audioBanks[randomIndex];
        playAudio(randomAudio);
      }
    }
  };
  
  const handlePlaybackStatusUpdate = (status) => {
    if (status.didJustFinish) {
      setIsPlaying(false); // Indicar que ya no hay audio en reproducción
      setCurrentAudio(""); // Limpiar el nombre del audio actual
      
      // Reproducir el siguiente audio después de 2 segundos
      setTimeout(() => {
        togglePlayback();
      }, 2000); // Espera 2 segundos antes de reproducir otro
    } else {
      setIsPlaying(status.isPlaying); // Actualizar isPlaying según el estado de reproducción
    }
  };
  

  

  
  

  useEffect(() => {
    if (sound) {
      sound.setOnPlaybackStatusUpdate(handlePlaybackStatusUpdate);
    }
  
    return () => {
      if (sound) {
        sound.unloadAsync(); // Detiene y libera los recursos del audio
        setIsPlaying(false);
        // setCurrentAudio("");
      }
    };
  }, [sound]);

  return (
    <ImageBackground
          source={require('../assets/images/background.jpg')}
          style={styles1.container}
          imageStyle={styles1.backgroundImage}
        >
    <View style={styles1.container}>
      <Text style={styles1.title}>Aprender Frases</Text>
      <View style={{ backgroundColor: 'rgba(120, 228, 129, 0.5)' }}>
      {currentAudio && <Text style={[styles1.subtitle, styles1.controlsContainer]}>{formatAudioName(currentAudio)}</Text>}
      <View style={styles1.controlsContainer}>
        
        <TouchableOpacity >
          <Ionicons name="play-back" size={60} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles1.button} onPress={togglePlayback}>
          <Ionicons name={isPlaying ? "pause-circle" : "play-circle"} size={60}  color={'#d7f3f7'}/>
        </TouchableOpacity>
        <TouchableOpacity >
          <Ionicons name="play-forward" size={60} color="red" />
        </TouchableOpacity>
        </View>
      </View>
    </View>
    </ImageBackground>
  );
};
const styles1 = StyleSheet.create({
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 20,
        textAlign: 'center',
      },
      button: {
        padding: 10,
        fontSize: 16,
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 10,
        width:200,
        textAlign:'center'
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        resizeMode: 'cover',
        //backgroundColor: 'rgba(120, 228, 129, 0.5)',  
    
      },
      backgroundImage: {
        opacity: 0.5, 
        resizeMode:'cover',
        transform: [
          { scale: 1 },  // Escalar la imagen un 10% más grande
        ],
      },
      
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
      },
  controlsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '30',
    borderRadius: 10, 
    padding: 10, 
    elevation: 0, 
  },
});

export default Aprender;
