import React, { useState } from "react";
import { View, Text, FlatList, TextInput, Modal } from "react-native";
import { useTasks, useAddTask, useToggleTask } from "../hooks/useTasks";
import TaskItem from "../components/TaskItem";
import styles from './TaskScreen.style';
import Button from '../components/Button';

const TaskScreen = () => {
  const [newTask, setNewTask] = useState<string>("");
  const [newDescription, setNewDescription] = useState<string>("");
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const { data: tasks, isLoading, isError } = useTasks();
  const addTaskMutation = useAddTask();
  const toggleTaskMutation = useToggleTask();

  const addTask = () => {
    if (newTask.trim().length > 0) {
      addTaskMutation.mutate({ title: newTask, description: newDescription });
      setNewTask("");
      setNewDescription("");
    }
  };

  const toggleTask = (id: number) => {
    toggleTaskMutation.mutate(id);
  };

  const openModal = (task: any) => {
    setSelectedTask(task);
  };

  const closeModal = () => {
    setSelectedTask(null);
  };

  if (isLoading) return <Text>Loading...</Text>;
  if (isError) return <Text>Error occurred</Text>;

  return (
    <View   style={styles.mainContainer} >
      <TextInput
         style={styles.input} 
        placeholder="New Task"
        value={newTask}
        onChangeText={text => setNewTask(text)}
      />
      <TextInput
         style={styles.input} 
        placeholder="Task Description"
        value={newDescription}
        onChangeText={text => setNewDescription(text)}
      />
   
      <Button title="Add New Task" onPress={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TaskItem task={item} toggleTask={toggleTask} onPress={() => openModal(item)} />}
      />
      <Modal  visible={selectedTask !== null} onRequestClose={closeModal}>

 
        {selectedTask && (
          <View style={styles.modalContainer}>
                 <Text style={styles.modalMainTitle}>Task Details</Text>
            <Text>Title: {selectedTask.title}</Text>
            <Text>Description: {selectedTask.description}</Text>
            <Text>Status: {selectedTask.completed ? "Completed" : "Incomplete"}</Text>
            <Button title="Close" onPress={closeModal} />
          </View>
        )}
      </Modal>
    </View>
  );
};

export default TaskScreen;
