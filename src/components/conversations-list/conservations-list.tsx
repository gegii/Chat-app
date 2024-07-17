import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { UserType } from '@/app/chat/types'

interface ConversationsListProps {
  chats: any
  users: UserType[]
  currentConversationId: string
}

const ConservationsList = ({
  chats,
  users,
  currentConversationId,
}: ConversationsListProps) => {
  const router = useRouter()
  return (
    <div className="relative w-full h-full bg-gray-100 p-4 group">
      <h2 className="font-bold text-lg mb-4">Chat History</h2>
      <div className="space-y-4">
        {Object.keys(chats).map((chat, index) => {
          const user = users.find((user: UserType) => user.id === chat)
          const isCurrentConversation = chat === currentConversationId
          if (!user) return null
          return (
            <div
              key={index}
              className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer ${
                isCurrentConversation ? 'bg-gray-300' : 'hover:bg-gray-300'
              }`}
              onClick={() => {
                router.push(`/chat/${chat}`)
              }}
            >
              <div className="w-10 h-10 bg-blue-500 rounded-full flex-shrink-0">
                <Image
                  width={35}
                  height={20}
                  src={user.avatar}
                  className="object-cover w-full h-full rounded-full"
                  alt={user.name}
                />
              </div>
              <p className="font-medium text-sm">{user.name}</p>
            </div>
          )
        })}
      </div>
      <div
        onClick={() => {
          router.push('/chat/create')
        }}
        className="absolute bottom-4 right-4 hidden group-hover:flex items-center justify-center w-10 h-10 bg-gray-800 text-white rounded-full cursor-pointer"
      >
        <button>+</button>
      </div>
    </div>
  )
}

export default ConservationsList
