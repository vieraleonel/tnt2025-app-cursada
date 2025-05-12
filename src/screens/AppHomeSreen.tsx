import { Href, Link, Stack } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";

export function AppHomeScreen() {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "Inicio" }} />
      <PixdexBanner />
      <ScrollView contentContainerStyle={{ gap: 20 }}>
        <AccesoRapidoCard
          titulo="useState"
          descripcion="Ejemplos simple con use state"
          ruta="/ejemplos/usestate"
        />
        <AccesoRapidoCard
          titulo="modal"
          descripcion="Navegación de estilo modal"
          ruta="/ejemplos/modal"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

function PixdexBanner() {
  return (
    <Link href="/pixdex">
      <View>
        <TextPressStart2P>Pixdex</TextPressStart2P>
      </View>
    </Link>
  );
}
const pixdexBannerStyles = StyleSheet.create({
  box: {
    backgroundColor: "#000",
  },
});

interface IAccesoRapidoCardProps {
  titulo: string;
  descripcion: string;
  ruta: Href;
}
function AccesoRapidoCard({
  titulo,
  descripcion,
  ruta,
}: IAccesoRapidoCardProps) {
  return (
    <Link href={ruta}>
      <View>
        <Text>{titulo}</Text>
        <Text>{descripcion}</Text>
      </View>
    </Link>
  );
}
