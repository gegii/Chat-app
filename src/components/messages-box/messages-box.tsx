'use client'

import { MessageType, UserInfo } from '@/types'
import React from 'react'

interface MessageBoxProps {
  message: MessageType
  currentUser: UserInfo
}

const MessagesBox: React.FC<MessageBoxProps> = ({ message, currentUser }) => {
  const isSentByCurrentUser = message.sender === currentUser.id

  return (
    <div
      className={`flex ${
        isSentByCurrentUser ? 'justify-end' : 'justify-start'
      } my-2 mx-4`}
    >
      <div
        className={`py-2 px-4 rounded-lg ${
          isSentByCurrentUser
            ? 'bg-blue-500 text-white'
            : 'bg-gray-300 text-gray-700'
        } max-w-xs`}
      >
        <p>{message.text}</p>
        <p className="text-right text-xs text-gray-500">
          {new Date(message.timestamp).toLocaleString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false,
          })}
        </p>
      </div>
    </div>
  )
}

export default MessagesBox
