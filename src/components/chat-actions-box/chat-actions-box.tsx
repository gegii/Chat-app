'use client'
import React, { useState } from 'react'

interface ChatBoxActionsProps {
  onSend: (message: string) => void
}

const ChatBoxActions: React.FC<ChatBoxActionsProps> = ({ onSend }) => {
  const [message, setMessage] = useState('')

  const handleSend = () => {
    onSend(message)
    setMessage('')
  }

  return (
    <div className="flex items-center justify-between p-4 bg-gray-200">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full px-3 py-2 text-sm text-gray-700 bg-white border rounded-lg focus:outline-none focus:shadow-outline"
        placeholder="Type your message here..."
      />
      <button
        onClick={handleSend}
        className="ml-4 px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:shadow-outline"
      >
        Send
      </button>
    </div>
  )
}

export default ChatBoxActions
