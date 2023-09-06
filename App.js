import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const changeText = (newGoal) => {
    setGoal(newGoal);
  };

  const addGoal = () => {
    setGoals((currGoals) => [...currGoals, goal]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          onChangeText={changeText}
          onSubmitEditing={addGoal}
        />
        <Button title="Add Goal" onPress={addGoal} />
      </View>
      <View style={styles.goalsContainer}>
        <Text>Your Goals:</Text>
        {goals.map((g) => (
          <View key={g} style={styles.goalItem}>
            <Text style={styles.goalText}>{g}</Text>
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: "70%",
    borderRadius: 6,
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
  },
});
