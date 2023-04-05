import React from "react";
import { MainLayout } from "../../components/Layout";
import { ChatView } from "../../components/_view/ChatView";

export default function ChatPage({ socket }: any) {
  return (
    <MainLayout>
      <ChatView />
    </MainLayout>
  );
}
