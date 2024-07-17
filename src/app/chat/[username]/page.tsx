'use client'
import ConservationsList from '@/components/conversations-list/conservations-list'
import ChatBoxActions from '@/components/chat-actions-box/chat-actions-box'
import MessagesBox from '@/components/messages-box/messages-box'
import ChatHeader from '@/components/chat-header/chat-header'
import CurrentUserDetails from '@/components/current-user-details/current-user-details'
import { users, messages as initialMessages } from '@/mock-data'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { UserType } from '../types'
import { MessageType } from '@/types'

const ChatPage = ({ params }: { params: { username: string } }) => {
  const router = useRouter()
  const [user, setUser] = useState<UserType | null>(null)
  const [messages, setMessages] = useState(initialMessages)

  useEffect(() => {
    const user = users.find((user) => user.id === localStorage.getItem('id'))
    if (!user) {
      localStorage.removeItem('id')
      router.push('/')
    } else {
      setUser(user)
    }
  }, [])

  const userMessages = user?.id && messages[user.id]

  const currentConversationUser = users.find(
    (user) => user.id === params.username
  )

  const handleSend = (text: string) => {
    if (!user?.id || !params.username) return
    const userId = user.id
    setMessages((prevMessages) => {
      const userMessages = prevMessages[userId] || {}
      return {
        ...prevMessages,
        [userId]: {
          ...userMessages,
          [params.username]: [
            ...(userMessages[params.username] || []),
            {
              sender: userId,
              text,
              timestamp: Date.now(),
            },
          ],
        },
      }
    })
  }

  if (!user) return null
  return (
    <div className="flex h-full">
      <div className="w-1/4 bg-gray-100 flex flex-col h-full">
        <div className="flex-grow overflow-y-auto max-h-[calc(100%-3rem)]">
          {userMessages && (
            <ConservationsList
              chats={userMessages}
              users={users}
              currentConversationId={params.username}
            />
          )}
        </div>
        <CurrentUserDetails currentUser={user} />
      </div>

      <div className="w-3/4 flex flex-col justify-between">
        {currentConversationUser && (
          <ChatHeader currentConversationUser={currentConversationUser} />
        )}

        <div className="overflow-y-auto">
          {userMessages &&
            userMessages[params.username]?.map(
              (msg: MessageType, idx: number) => (
                <MessagesBox key={idx} message={msg} currentUser={user} />
              )
            )}
        </div>

        <div className="border-t-2 border-gray-200">
          <ChatBoxActions onSend={(text) => handleSend(text)} />
        </div>
      </div>
    </div>
  )
}

export default ChatPage
