import {
  View,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import React from "react";
type ModalProps = {
  modalVisibility: boolean;
  modalClose: () => void;
  children: React.ReactNode;
};
export default function CustomModal({
  modalClose,
  children,
  modalVisibility,
}: ModalProps) {
  return (
    <Modal
      animationType='none'
      transparent={true}
      visible={modalVisibility}
      onRequestClose={modalClose}
    >
      <TouchableWithoutFeedback onPress={modalClose}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>{children}</View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
});
