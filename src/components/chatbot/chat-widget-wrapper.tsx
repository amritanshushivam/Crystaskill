"use client"

import dynamic from "next/dynamic"

const ChatWidget = dynamic(
  () => import("@/components/chatbot/chat-widget").then(m => ({ default: m.ChatWidget })),
  { 
    ssr: false,
    loading: () => null  // Silent load - no placeholder UI to avoid layout shift
  }
)

export function ChatWidgetWrapper() {
  return <ChatWidget />
}
