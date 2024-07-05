import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, MENU } from "@/constants";
import { useUserGlobalStore } from "@/store/useUserGlobalStore";

const CustomHeader = ({ navigation, title }: any) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { signOut, user } = useUserGlobalStore();
  // Toggle menu visibility
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuPress = () => {
    toggleMenu();
  };

  const handleMenuItemPress = (menuItem: string) => {
    if (menuItem === MENU.SIGN_OUT) {
      signOut();
    }
    console.log(`Menu item pressed: ${menuItem}`);
    toggleMenu();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity
        onPress={handleMenuPress}
        style={styles.profileContainer}
      >
        <View style={styles.profileImage}>
          <Ionicons name='person-circle-sharp' size={40} color={"white"} />
        </View>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={menuVisible}
        onRequestClose={() => {
          toggleMenu();
        }}
      >
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.menuContainer}>
          <Text style={styles.userName}>{user?.name}</Text>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress(MENU.SETTING)}
          >
            <Text>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress(MENU.PROFILE)}
          >
            <Text>Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={() => handleMenuItemPress(MENU.SIGN_OUT)}
          >
            <Text>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    backgroundColor: "#f0f0f0",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  menuContainer: {
    position: "absolute",
    top: 60,
    right: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 8,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
});

export default CustomHeader;
