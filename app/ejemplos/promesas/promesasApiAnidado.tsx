import { API_URL } from "@/src/common/constants";
import { IContenidoAudiovisual } from "@/src/data/contenidosAudiovisuales";
import { ITipoContenidoAudiovisual } from "@/src/data/tiposContenidoAudiovisual";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  ScrollView,
  Text,
  View,
} from "react-native";

export default function promesasApiAnidado() {
  const [isConsultandoContenidos, setIsConsultandoContenidos] =
    useState<boolean>(false);
  const [contenidos, setContenidos] = useState<IContenidoAudiovisual[]>([]);
  const [isConsultandoTipos, setIsConsultandoTipos] = useState<boolean>(false);
  const [tipos, setTipos] = useState<TiposDict>({});

  useEffect(() => {
    obtenerContenidos();
    obtenerTipos();
  }, []);

  async function obtenerTipos() {
    setIsConsultandoTipos(true);
    try {
      const tiposDict = await getTipos();
      setTipos(tiposDict);
    } catch (error) {
      alert(`FALLO ${error}`);
      console.log("ERROR", error);
    } finally {
      setIsConsultandoTipos(false);
    }
  }

  async function obtenerContenidos() {
    setIsConsultandoContenidos(true);
    try {
      const contenidos = await getContenidos();
      setContenidos(contenidos);
    } catch (error) {
      alert(`FALLO ${error}`);
      console.log("ERROR", error);
    } finally {
      setIsConsultandoContenidos(false);
    }
  }

  return (
    <View style={{ padding: 10, gap: 15 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Contenidos</Text>
        {isConsultandoContenidos || isConsultandoTipos ? (
          <ActivityIndicator animating size={60} color="purple" />
        ) : null}
      </View>

      <ScrollView>
        {contenidos.map((contenido) => (
          <View key={contenido?.id?.toString()} style={{ gap: 10 }}>
            <View style={{ padding: 10 }}>
              <Text>{contenido.nombre}</Text>
              <Text>{tipos?.[contenido.tipoId]?.singular ?? "-"}</Text>
              <Text>{contenido.generos.join(",")}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

async function getContenidos(): Promise<IContenidoAudiovisual[]> {
  const responseContenidos = await fetch(`${API_URL}/contenidos`);
  if (!responseContenidos.ok) {
    throw new Error("Error al obtener contenidos");
  }
  const contenidos: IContenidoAudiovisual[] = await responseContenidos.json();
  return contenidos;
}

async function getTipos(): Promise<TiposDict> {
  const responseTipos = await fetch(`${API_URL}/tipos`);
  if (!responseTipos.ok) {
    throw new Error("Error al obtener tipos");
  }
  const tipos: ITipoContenidoAudiovisual[] = await responseTipos.json();

  // hacemos un diccionario de tipos
  let tiposDict: TiposDict = {};
  for (const tipo of tipos) {
    // Ejemplo tipo={ id: 1, singular: "serie", plural: "series" }
    tiposDict[tipo.id] = tipo;
  }

  return tiposDict;
}

type TiposDict = Record<number, ITipoContenidoAudiovisual>;
