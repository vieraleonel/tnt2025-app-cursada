import { Link, Stack } from "expo-router";
import { ReactNode, useState } from "react";
import {
  Button,
  Modal,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function EjemplosModalIndexScreen() {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  function mostrarModal() {
    setIsModalVisible(true);
  }

  function ocultarModal() {
    setIsModalVisible(false);
  }

  return (
    <View>
      <Button title="Modal React Native" onPress={mostrarModal} />

      <Link href="/ejemplos/modal/modalexpo">
        <View style={{ padding: 10, backgroundColor: "yellow" }}>
          <Text>Modal EXPO</Text>
        </View>
      </Link>

      <Text>PANTALLA!!!!!</Text>

      <ModalReactNative visible={isModalVisible} onModalClose={ocultarModal}>
        <Button title="Cerrar" onPress={ocultarModal} />
        <Text>ESTO ES PARTE DEL MODAL</Text>
      </ModalReactNative>
    </View>
  );
}

interface IModalReactNativeProps {
  visible: boolean;
  onModalClose: () => void;
  children: ReactNode;
}
function ModalReactNative({
  visible,
  onModalClose,
  children,
}: IModalReactNativeProps) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <TouchableWithoutFeedback onPress={onModalClose}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <TouchableWithoutFeedback>
            <View
              style={{
                width: "80%",
                height: 400,
                padding: 10,
                backgroundColor: "white",
              }}
            >
              {children}
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
