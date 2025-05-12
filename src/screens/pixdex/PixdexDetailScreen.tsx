import { contenidosAudiovisuales } from "@/src/data/contenidosAudiovisuales";

import { useLocalSearchParams } from "expo-router/build/hooks";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export function PixdexDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const contenido = contenidosAudiovisuales.find(
    (contenido) => contenido.id.toString() === id
  );

  return (
    <SafeAreaView>
      <Text>{contenido?.nombre ?? "NO ENCONTRAMOS EL CONTENIDO"}</Text>
    </SafeAreaView>
  );
}
