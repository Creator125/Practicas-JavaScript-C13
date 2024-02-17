import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Inicio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Acerca de</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.navItem}>
        <Text style={styles.navText}>Contacto</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    navBar: {
        backgroundColor: '#3498db', // Color de fondo del NavBar
        justifyContent: 'center', // Centrar verticalmente
        alignItems: 'center', // Centrar horizontalmente
        height: 60, // Altura del NavBar
        width: '100%', // Ancho que ocupa toda la pantalla
        position: 'absolute', // Posicionamiento absoluto para colocarlo en la parte superior
        top: 0, // Lo colocamos en la parte superior
      },
      navBarText: {
        color: '#fff', // Color del texto del NavBar
        fontSize: 20, // Tamaño del texto del NavBar
        fontWeight: 'bold', // Estilo del texto del NavBar
      },
});

export default NavBar;
