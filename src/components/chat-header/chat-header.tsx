import { UserInfo } from '@/types'
import Image from 'next/image'
import React from 'react'

interface ChatHeaderProps {
  currentConversationUser: UserInfo
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ currentConversationUser }) => {
  return (
    <div className="py-4 px-6 bg-white flex justify-between items-center border-b-2">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex-shrink-0">
          <Image
            width={35}
            height={20}
            src={currentConversationUser.avatar}
            className="object-cover w-full h-full rounded-full"
            alt={currentConversationUser.name}
          />
        </div>
        <h2 className="text-lg font-bold">{currentConversationUser.name}</h2>
      </div>
    </div>
  )
}

export default ChatHeader
