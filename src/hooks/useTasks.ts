

import { useQuery, useMutation, useQueryClient } from "react-query";
import * as taskService from "../api/taskService";

export const useTasks = () => {
  return useQuery("tasks", taskService.fetchTasks);
};

export const useAddTask = () => {
  const queryClient = useQueryClient();
  return useMutation(taskService.addTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });
};

export const useToggleTask = () => {
  const queryClient = useQueryClient();
  return useMutation(taskService.toggleTask, {
    onSuccess: () => {
      queryClient.invalidateQueries("tasks");
    },
  });
};
