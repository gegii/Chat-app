'use client'

import { UserInfo } from '@/types'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

interface CurrentUserDetailsProps {
  currentUser: UserInfo
}

const CurrentUserDetails: React.FC<CurrentUserDetailsProps> = ({
  currentUser,
}) => {
  const router = useRouter()

  const handleLogOut = () => {
    localStorage.removeItem('id')
    router.push('/')
  }

  return (
    <div className="p-4 flex items-center justify-between bg-white border-t-2">
      <div className="flex items-center space-x-2">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex-shrink-0">
          <Image
            width={35}
            height={20}
            src={currentUser.avatar}
            className="object-cover w-full h-full rounded-full"
            alt={currentUser.name}
          />
        </div>
        <p className="font-medium">{currentUser.name}</p>
      </div>
      <button
        className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
        onClick={handleLogOut}
      >
        Logout
      </button>
    </div>
  )
}

export default CurrentUserDetails
