'use client'
import ChatBoxActions from '@/components/chat-actions-box/chat-actions-box'
import { users } from '@/mock-data'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { UserType } from '../types'

const CreateChatPage = () => {
  const router = useRouter()
  const [user, setUser] = useState<UserType | null>(null)

  useEffect(() => {
    const user = users.find((user) => user.id === localStorage.getItem('id'))
    if (!user) {
      localStorage.removeItem('id')
      router.push('/')
    } else {
      setUser(user)
    }
  }, [])

  const handleSend = () => {
    console.log('Not initialized because of the missing test state management')
    localStorage.removeItem('id')
    router.push('/')
  }

  if (!user) return null
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-md">
          <input
            type="text"
            placeholder="Enter Username"
            className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <ChatBoxActions onSend={() => handleSend()} />
        </div>
      </div>
    </>
  )
}

export default CreateChatPage
