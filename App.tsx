import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import TaskScreen from "./src/screens/TaskScreen";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TaskScreen />
    </QueryClientProvider>
  );
}