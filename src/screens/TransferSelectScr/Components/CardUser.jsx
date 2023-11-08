import { Text, View, Pressable, Image } from "react-native";
import React from "react";
import { ButtonIcons } from "../../../components/index";
import { useDispatch } from "react-redux";
import { selectUser, addFavoriteToContact } from "../../../features/datosSlice";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { colors } from "../../../constants/constants";

const CardUser = (props) => {
  const dispatch = useDispatch();

  return (
    <Pressable
      style={styles.cardUserContainer}
      onPress={() => {
        dispatch(selectUser(props.userID));
        props.navigation.navigate("TransferScr");
      }}
    >
      <Image src={props.profilePic} style={styles.profilePic} />
      <View>
        <Text style={styles.nameText}>
          {props.firstName} {props.lastName}
        </Text>
        <Text>CVU {props.cvu}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonIcons
          style={styles.botones}
          component={
            <AntDesign
              name="user"
              size={colors.favoriteButtonSize}
              color={colors.favoritesButtonFontColor}
            />
          }
          componentTitle={""}
          functionComponent={() => {
            dispatch(selectUser(props.userID));
            props.navigation.navigate("ProfileScr");
          }}
          buttonColor={colors.favoritesButtonColor}
          buttonBorderColor={"white"}
          buttonType="circle"
        />
        <ButtonIcons
          component={
            <MaterialCommunityIcons
              name="heart-outline"
              size={colors.favoriteButtonSize}
              color={colors.favoritesButtonFontColor}
            />
          }
          componentTitle={""}
          functionComponent={() => dispatch(addFavoriteToContact(props.userID))}
          buttonColor={colors.favoritesButtonColor}
          buttonBorderColor={"white"}
          buttonType="circle"
        />
      </View>
    </Pressable>
  );
};
export default CardUser;
