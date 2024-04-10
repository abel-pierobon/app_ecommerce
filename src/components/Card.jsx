import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";

const Card = ({children}) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
};
export default Card;
const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.azul,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
        marginBottom: 10,
        marginTop: 20,
    },
    list: {
        gap: 50,
        marginTop: 10,
        fontSize: 12,
        fontWeight: "bold",
        color: Colors.negro1,
        textAlign: "center",
        alignSelf: "center",
        textTransform: "uppercase",
        letterSpacing: 3,
        padding: 10,
    },
});
