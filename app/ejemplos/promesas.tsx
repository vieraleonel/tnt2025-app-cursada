import { useRouter } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Promesas() {
  const [promesa, setPromesa] = useState<number>(0);
  function exito() {
    setPromesa(2);
    console.log("EXITO");
  }
  function fallo() {
    setPromesa(3);
    console.log("ERROR");
  }
  function ejecutarPromesa() {
    setPromesa(1);
    fetch("https://www.gsjdkfahfdisjkah2384rh43jkhoogle.com/")
      .then(exito)
      .catch(fallo);
  }
  return (
    <View style={{ padding: 10, gap: 15 }}>
      <Button title="PROMESA" onPress={ejecutarPromesa} />
      <Text>
        {promesa === 0
          ? "NO ESTOY HACIENDO NADA"
          : promesa === 1
          ? "CONSULTANDO..."
          : promesa === 2
          ? "EXITO"
          : "FALLO"}
      </Text>
    </View>
  );
}
