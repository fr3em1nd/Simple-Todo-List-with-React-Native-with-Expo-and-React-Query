import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type Props = {
  task: { id: number; title: string; description: string; completed: boolean };
  toggleTask: (id: number) => void;
  onPress: () => void;
};

const TaskItem: React.FC<Props> = ({ task, toggleTask, onPress }) => {
  return (
    
      <View style={{ flexDirection: "row", padding: 16, alignItems: "center" }}>
        <Text>{task.title}</Text>
        <TouchableOpacity onPress={() => toggleTask(task.id)}><Text>Mark as done / not done</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => onPress()}><Text>VIEW DETAILS</Text></TouchableOpacity>
        {task.completed && <Text style={{ marginLeft: 8 }}>✅</Text>}
      </View>
   
  );
};

export default TaskItem;
