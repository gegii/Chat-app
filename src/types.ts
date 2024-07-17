export type MessageType = {
  sender: string
  text: string
  timestamp: number
}

export type UserMessages = {
  [receiverId: string]: MessageType[]
}

export type UserInfo = { avatar: string; name: string; id?: string }
