'use client'
import { useState, FormEvent, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { users, messages } from '@/mock-data'

const getFirstConvoPartner = (username: string) => {
  const userMessages = messages[username]
  if (userMessages) {
    return Object.keys(userMessages)[0]
  } else {
    return null
  }
}

const Login = () => {
  useEffect(() => {
    const authedUser = localStorage.getItem('id')
    if (authedUser) {
      const firstConvoPartner = getFirstConvoPartner(authedUser)
      if (firstConvoPartner) {
        router.push(`chat/${firstConvoPartner}`)
      } else {
        router.push(`chat/create`)
      }
    }
  }, [])

  const router = useRouter()
  const [username, setUserName] = useState('')

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()

    const user = users.find((user) => user.id === username)
    if (user) {
      localStorage.setItem('id', user.id)
      const firstConvoPartner = getFirstConvoPartner(username)
      if (firstConvoPartner) {
        router.push(`chat/${firstConvoPartner}`)
      } else {
        router.push(`chat/create`)
      }
    } else {
      alert('User not found, try "alice" or "bob"')
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form className="p-6 bg-white rounded shadow-md" onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUserName((e.target as HTMLInputElement).value)}
          className="w-full p-2 mb-4 border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full p-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Join the chat!
        </button>
      </form>
    </div>
  )
}

export default Login
