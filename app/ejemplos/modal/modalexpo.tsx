import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function ModalExpo() {
  const { back } = useRouter();
  return (
    <View style={{ padding: 10, gap: 15 }}>
      <Text>EXPO MODAL</Text>
      <Button title="Cerrar modal" onPress={back} />
    </View>
  );
}
