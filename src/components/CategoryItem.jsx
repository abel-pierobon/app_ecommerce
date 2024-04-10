import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "../constants/colors";
import Card from "./Card";
const categoryItem = ({ category }) => {
    return (
        <Card style={styles.container}>
            <Text style={styles.list}>{category.marca}</Text>
        </Card>
    );
};

export default categoryItem;

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
