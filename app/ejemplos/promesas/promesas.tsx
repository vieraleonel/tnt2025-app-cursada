import {
  getPromise,
  isParPromise,
} from "@/src/screens/ejemplos/promesas/promesas-utils";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Promesas() {
  const [isConsultado, setIsConsultado] = useState<boolean>(false);
  const [resultado, setResultado] = useState<number>(0);

  function exito(res: number) {
    alert(`EXITO ${res}`);
    setResultado(1);
  }
  function fallo(error: any) {
    alert(`FALLO ${error}`);
    setResultado(2);
  }
  function finalmente() {
    setIsConsultado(false);
  }

  function ejecutarPromesa() {
    setIsConsultado(true);

    getPromise().then(exito).catch(fallo).finally(finalmente);
  }

  function ejecutarPromesaArrowFunc() {
    setIsConsultado(true);

    getPromise()
      .then((res) => {
        alert(`EXITO ${res}`);
        setResultado(1);
      })
      .catch((error) => {
        alert(`FALLO ${error}`);
        setResultado(2);
      })
      .finally(() => {
        setIsConsultado(false);
      });
  }

  async function paridadAsync() {
    setIsConsultado(true);
    try {
      const esPar = await isParPromise(2);
      alert(`Es par? ${esPar}`);
    } catch (error) {
      alert(`FALLO ${error}`);
    } finally {
      setIsConsultado(false);
    }
  }

  async function ejecutarPromesaAsync() {
    setIsConsultado(true);
    try {
      const res = await getPromise();
      alert(`EXITO ${res}`);
      setResultado(1);
    } catch (error) {
      alert(`FALLO ${error}`);
      setResultado(2);
    } finally {
      setIsConsultado(false);
    }
  }

  return (
    <View style={{ padding: 10, gap: 15 }}>
      <Button title="PROMESA" onPress={ejecutarPromesaAsync} />
      {isConsultado ? (
        <Text style={{ color: "blue", fontWeight: "bold", fontSize: 20 }}>
          CONSULTANDO...
        </Text>
      ) : null}

      {resultado === 0 ? (
        <Text style={{ color: "black", fontWeight: "bold", fontSize: 20 }}>
          NO ESTOY HACIENDO NADA
        </Text>
      ) : null}
      {resultado === 1 ? (
        <Text style={{ color: "green", fontWeight: "bold", fontSize: 20 }}>
          EXITO
        </Text>
      ) : null}
      {resultado === 2 ? (
        <Text style={{ color: "red", fontWeight: "bold", fontSize: 20 }}>
          FALLO
        </Text>
      ) : null}
    </View>
  );
}
