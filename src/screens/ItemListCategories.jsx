import { StyleSheet, Text, View } from "react-native";
const ItemListCategories = () => {
    return (
        <View style={styles.container}>
            <Text>ItemListCategories</Text>
        </View>
    );
};
export default ItemListCategories;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: 30,
        flexDirection:'column',
        
    },
});
