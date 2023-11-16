import styles from "./QrScanScr.styles";

import { StyleSheet, Dimensions, View, Text, Pressable } from "react-native";
import { Card } from "../../components";
import React from "react";
import { useEffect, useState, useRef } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import {
  styleTextoTipo3,
  styleTextoTipo5,
  colors,
} from "../../constants/constants";
import {
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
} from "@expo/vector-icons";

const QrScanScr = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [scanComponentVisible, setScanComponentVisible] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [scannedMessage, setScannedMessage] = useState("");
  const barCodeScannerRef = useRef(null);


  //Accion que hago al obtener el QR escaneado.
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);

    setScannedMessage(
      `Se escaneo Bar code type ${type}, data ${data} QR Payment sera implementado a futuro en esta aplicacion`
    );
    setMessageVisible(true);
    setScanComponentVisible(false);
    
  };

 
  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };

   
    getBarCodeScannerPermissions();
  }, []);

  const activeScan = () => {
    setMessageVisible(false);

    setScanComponentVisible(true);
  };

  return (
    <>
      <Card>
        <Pressable style={{ flexDirection: "row" }}>
          <Ionicons
            name="qr-code-outline"
            size={24}
            color={colors.favoritesButtonFontColor}
            alignSelf={"center"}
          />
          <Text
            style={{
              ...styleTextoTipo3,
              marginLeft: 10,
              marginVertical: 2,
              fontSize: 22,
              alignSelf: "center",
            }}
          >
            {" "}
            QR PAYMENT{" "}
          </Text>
        </Pressable>
        <Text style={{ ...styleTextoTipo5, fontSize: 16, marginVertical: 10 }}>
          Escanee el codigo QR del comercio o persona para enviarle dinero
          mediante el sistema QR PAYMENT.
        </Text>
      </Card>

      {hasPermission === null && (
        <Card>
          <Text>Activar Permisos.</Text>
        </Card>
      )}
      {hasPermission === false && (
        <Card>
          <Pressable
            style={{ flexDirection: "row" }}
            onPress={() => activeScan()}
          >
            <FontAwesome5 name="exclamation" size={24} color="black" />
            <Text
              style={{
                ...styleTextoTipo3,
                marginLeft: 10,
                marginVertical: 2,
                fontSize: 18,
                alignSelf: "center",
              }}
            >
              ACTIVAR PERMISOS
            </Text>
          </Pressable>
          <Text
            style={{ ...styleTextoTipo5, fontSize: 16, marginVertical: 10 }}
          >
            Presione para activar los permisos y acceder a escanear codigo QR.
          </Text>
        </Card>
      )}

      {scanComponentVisible ? (
        <View style={{ flex: 1 }}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={{
              ...StyleSheet.absoluteFillObject,
              height: Dimensions.get("window").height * 0.7,
              width: Dimensions.get("window").width,
            }}
            type="back"
            ref={barCodeScannerRef}
          />

          <View style={styles2.overlay}>
            <Text style={styles2.overlayText}>
              Coloca el código de barras en el área
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.QrButton}>
          <MaterialCommunityIcons
            name="qrcode-scan"
            size={140}
            color={"white"}
            onPress={() => activeScan()}
          />
          <Text style={{ styleTextoTipo3, color: "white", fontWeight: "bold" }}>
            Presionar para escanear
          </Text>
        </View>
      )}

      {scanned && setScanned(false)}

      {messageVisible && (
        <Card>
          <Pressable style={{ flexDirection: "row" }}>
            <FontAwesome5 name="exclamation" size={24} color="black" />
            <Text
              style={{
                ...styleTextoTipo3,
                marginLeft: 10,
                marginVertical: 2,
                fontSize: 18,
                alignSelf: "center",
              }}
            >
              FUNCIONALIDAD EN DESARROLLO{" "}
            </Text>
          </Pressable>
          <Text
            style={{ ...styleTextoTipo5, fontSize: 16, marginVertical: 10 }}
          >
            {scannedMessage}
          </Text>
        </Card>
      )}
    </>
  );
};

export default QrScanScr;

//

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    color: "white",
    fontSize: 16,
  },
});
