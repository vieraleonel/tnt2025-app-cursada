import { ScrollView, StyleSheet, Text, View } from "react-native";
import { contenidosAudiovisuales } from "@/src/data/contenidosAudiovisuales";
import {
  IGeneroContenidoAudiovisual,
  generosContenidoAudiovisual,
} from "@/src/data/generosContenidoAudiovisual";
import {
  ITipoContenidoAudiovisual,
  tiposContenidoAudiovisual,
} from "@/src/data/tiposContenidoAudiovisual";

export function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {contenidosAudiovisuales.map((contenido) => (
        <Item
          key={contenido.id}
          contenido={contenido.nombre}
          tipoId={contenido.tipoId}
          generosId={contenido.generos}
        />
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1 },
});

interface IItemProps {
  contenido: string;
  tipoId: number;
  generosId: number[];
}
function Item({ contenido, tipoId, generosId }: IItemProps) {
  const tipoStr = getTipoPorId(tipoId).singular;
  // armo un string con el formato "genero1,genero2,..."
  const generosStr = generosId
    .map((id) => getGeneroPorId(id).nombre)
    .join(", ");

  return (
    <View style={itemStyles.container}>
      <Text>Nombre: {contenido}</Text>
      <Text>Tipo: {tipoStr}</Text>
      <Text>Generos: {generosStr}</Text>
    </View>
  );
}

const itemStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    padding: 10,
  },
});

/**
 * Busca un genero por su id y lo retorna. En caso de no encontrarlo, retorna un genero con el id consultado y nombre "-"
 * @param id number
 * @returns IGeneroContenidoAudiovisual
 */
function getGeneroPorId(id: number): IGeneroContenidoAudiovisual {
  const fallback = { id: id, nombre: "-" };
  return (
    generosContenidoAudiovisual.find((genero) => genero.id === id) ?? fallback
  );
}

/**
 * Busca un tipo por su id y lo retorna. En caso de no encontrarlo, retorna un tipo con el id consultado y nombre "-"
 * @param id number
 * @returns ITipoContenidoAudiovisual
 */
function getTipoPorId(id: number): ITipoContenidoAudiovisual {
  const fallback = { id: id, singular: "-", plural: "-" };
  return (
    tiposContenidoAudiovisual.find((contenido) => contenido.id === id) ??
    fallback
  );
}
