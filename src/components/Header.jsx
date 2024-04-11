import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../constants/colors";
Colors
const Header = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};
export default Header;
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.azul,
        padding: 10,
        width: "100%",
    },  
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
        color: 'white',
    }

});
