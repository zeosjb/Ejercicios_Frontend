import { Image, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejercicios para Frontend</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.subtitle}>Ejercicio 1</Text>
      <View style={{ marginBottom: 20, marginLeft: 15, marginRight: 15 }}>
        <Text>
          Integrar un componente que simule la vista del perfil de X. (Seguir
          el ejemplo de la imagen)
        </Text>
        <Text>Debe integrar lo siguiente:</Text>
        <Text>• Una imagen generica</Text>
        <Text>• El nombre del perfil</Text>
        <Text>• Usuario con @</Text>
        <Text>• Numero de seguidores</Text>
        <Text>• Numero de seguidos</Text>
        <Text>• Una breve descripcion</Text>
        <Text>• Un boton que diga Seguir</Text>
        <Text>• Integrar los datos desde un archivo .json</Text>
      </View>
      <Image
        source={{
          uri: "https://img.freepik.com/free-vector/flat-design-tweet-mockup_23-2149213895.jpg?semt=ais_hybrid&w=740&q=80",
        }}
        style={{ width: "80vw", height: 200 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
