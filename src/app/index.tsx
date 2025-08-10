import React from "react";
import ReactDOM from "react-dom/client";
import { queryClient } from "@/shared/api/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import "./global styles/index.css";
import { ChatPage } from "@/pages/ChatPage";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChatPage />
    </QueryClientProvider>
  </React.StrictMode>
);
