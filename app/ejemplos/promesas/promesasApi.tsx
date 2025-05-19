import { ITipoContenidoAudiovisual } from "@/src/data/tiposContenidoAudiovisual";
import { useState } from "react";
import { ActivityIndicator, Button, Text, View } from "react-native";

export default function PromesasApi() {
  const [isConsultado, setIsConsultado] = useState<boolean>(false);
  const [tipos, setTipos] = useState<ITipoContenidoAudiovisual[]>([]);

  async function obtenerTiposAsync() {
    setIsConsultado(true);
    try {
      const response = await fetch("http://10.7.70.150:8081/tipos");
      if (!response.ok) {
        throw new Error("NOT OK");
      }
      const data = await response.json();
      setTipos(data);
    } catch (error) {
      alert(`FALLO ${error}`);
      console.log("ERROR", error);
    } finally {
      setIsConsultado(false);
    }
  }

  function obtenerTipos() {
    setIsConsultado(true);

    fetch("http://10.7.70.150:8081/tipos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("NOT OK");
        }
        return response.json();
      })
      .then((data) => {
        setTipos(data);
      })
      .catch((error) => {
        alert(`FALLO ${error}`);
        console.log("ERROR", error);
      })
      .finally(() => {
        setIsConsultado(false);
      });
  }

  return (
    <View style={{ padding: 10, gap: 15 }}>
      <Button title="Obtener tipos" onPress={obtenerTiposAsync} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Tipos de contenido
        </Text>
        {isConsultado ? (
          <ActivityIndicator animating size={60} color="purple" />
        ) : null}
      </View>

      {tipos.map((tipo) => (
        <View style={{ gap: 10 }}>
          <View
            key={tipo.id}
            style={{ padding: 10, backgroundColor: "yellow" }}
          >
            <Text>{tipo.plural}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
