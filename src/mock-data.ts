import { UserMessages } from './types'

export const users = [
  { avatar: '/alice.png', name: 'Alice Lee', id: 'alice' },
  { avatar: '/bob.png', name: 'Bob Cox', id: 'bob' },
  { avatar: '/sam.png', name: 'Sam Wong', id: 'sam' },
  { avatar: '/anna.png', name: 'Anna Cheng', id: 'anna' },
]

export const messages: {
  [senderId: string]: UserMessages
} = {
  alice: {
    bob: [
      { sender: 'alice', text: 'Hi, Bob!', timestamp: 1617645255000 },
      { sender: 'bob', text: 'Hello!', timestamp: 1617645256000 },
    ],
    anna: [],
  },
  bob: {
    alice: [
      { sender: 'alice', text: 'Hi!', timestamp: 1617645257000 },
      { sender: 'bob', text: 'Hello!', timestamp: 1617645258000 },
    ],
    sam: [],
  },
  sam: {
    james: [{ sender: 'sam', text: 'Hi, I am Sam!', timestamp: 1617645260000 }],
    bob: [],
  },
  anna: {
    // alice: [],
  },
}
