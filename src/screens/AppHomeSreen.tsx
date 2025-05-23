import { Href, Link, Stack } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextPressStart2P } from "@/src/components/TextPressStart2P";
import { FontAwesome6 } from "@expo/vector-icons";
import { pixdexColors } from "../common/constants";

export function AppHomeScreen() {
  return (
    <SafeAreaView edges={["top"]} style={appHomeStyles.container}>
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
        <AccesoRapidoCard
          titulo="Promesas - Asincronismo - Simple"
          descripcion="Syntaxis y formas de usar"
          ruta="/ejemplos/promesas/promesas"
        />
        <AccesoRapidoCard
          titulo="Promesas - API"
          descripcion="Interacción típica con API"
          ruta="/ejemplos/promesas/promesasApi"
        />
        <AccesoRapidoCard
          titulo="Promesas - API - Anidado"
          descripcion=""
          ruta="/ejemplos/promesas/promesasApiAnidado"
        />
        <AccesoRapidoCard
          titulo="Promesas - API - Suspense"
          descripcion=""
          ruta="/ejemplos/promesas/promesasApiSuspense"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const appHomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5,
    paddingTop: 10,
    gap: 10,
  },
});

function PixdexBanner() {
  return (
    <Link href="/pixdex">
      <View style={pixdexBannerStyles.box}>
        <TextPressStart2P style={pixdexBannerStyles.title}>
          Pixdex
        </TextPressStart2P>
        <FontAwesome6 name="chevron-right" size={25} color="white" />
      </View>
    </Link>
  );
}
const pixdexBannerStyles = StyleSheet.create({
  box: {
    backgroundColor: pixdexColors.fondo,
    padding: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    width: "100%",
  },
  title: {
    color: "white",
    fontSize: 20,
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
