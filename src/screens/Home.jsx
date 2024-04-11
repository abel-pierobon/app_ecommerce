import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import category from "../Data/category.json";
import CategoryItem from "../components/CategoryItem";

const Home = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={category.sort()}
                keyExtractor={(item) => item.toString()}
                renderItem={({item}) => <CategoryItem category={item}/>}
                style={styles.flatlist}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        marginTop: 30,
        flexDirection:'column',
        
    },
    flatlist: {
        width: "45%", 
        marginTop: 20,
        marginHorizontal:"10%"
    },
});
