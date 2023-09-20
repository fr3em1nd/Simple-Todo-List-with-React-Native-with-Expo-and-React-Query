import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from './TaskItem.style';
type Props = {
  task: { id: number; title: string; description: string; completed: boolean };
  toggleTask: (id: number) => void;
  onPress: () => void;
};

const TaskItem: React.FC<Props> = ({ task, toggleTask, onPress }) => {
  return (
    
      <View style={styles.mainContainer} >
          <TouchableOpacity onPress={() => toggleTask(task.id)}><Text> {task.completed ? "🔳":"🔲"}</Text></TouchableOpacity>
        <Text>{task.title}</Text>
      
        <TouchableOpacity onPress={() => onPress()}><Text>👀</Text></TouchableOpacity>
        {task.completed && <Text style={{ marginLeft: 8 }}>✅</Text>}
      </View>
   
  );
};

export default TaskItem;
