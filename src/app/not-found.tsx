'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

const NotFoundPage = () => {
  const router = useRouter()
  const [count, setCount] = useState(5)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((count) => count - 1)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (count === 0) {
      router.push('/')
    }
  }, [count, router])

  return (
    <div className="flex items-center justify-center h-screen text-center">
      <div>
        <h1 className="text-4xl mb-4">404</h1>
        <h2 className="text-2xl mb-4">Page not found!</h2>
        <p className="text-lg">Redirecting to homepage in {count} seconds...</p>
      </div>
    </div>
  )
}

export default NotFoundPage
