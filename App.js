import { Button, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const styled = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#004080",
	},
	text: {
		color: "white",
	},
	change: {
		flexDirection: "row",
	},
	space: {
		margin: "5px",
		padding: "10px",
	},
});

export default function App() {
	return (
		<View style={styled.container}>
			<Text style={styled.text}>This is the Home Page</Text>
			<View style={styled.change}>
				<MyButton text="Button 1" />
				<MyButton text="Button 2" />
			</View>
		</View>
	);
}

const MyButton = ({ text }) => {
	return (
		<View>
			<TouchableOpacity
				style={styled.space}
				onPress={() => {
					console.log("I was Pressed again");
				}}
			>
				{text}
			</TouchableOpacity>
		</View>
	);
};
