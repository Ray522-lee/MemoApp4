import { View, Text, StyleSheet } from "react-native";

interface Props {
  children: string;
}

const CircleButton = (props: Props): JSX.Element => {
  const { children } = props;
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonlabel}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#467FD3",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    bottom: 40,
    shadowColor: "#000000",
    shadowOpacity: 0.25,
    shadowRadius: 8, // IOS限定の影をつけるプロパティ
    shadowOffset: { width: 0, height: 8 },
    elevation: 8, // Andoroid用の影をつけるプロパティ
  },

  circleButtonlabel: {
    color: "#ffffff",
    fontSize: 40,
    lineHeight: 48,
  },
});

export default CircleButton;
