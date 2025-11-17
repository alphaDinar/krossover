import { Customer } from "./customer"
import { Payment } from "./payment"

export type ReservationRoom = {
  id: string,
  name: string,
  bedrooms: number,
  img: string,
  price: number,
}

export type Reservation = {
  id: string,
  uid: string,
  customer: Customer,
  startTime: number | null,
  startTimePrompt: number | null,
  isPrompted: boolean,
  endTime: number,
  totalCost: number,
  room: ReservationRoom,
  pay: Payment,
  timestamp: number,
}


const reservationList: Reservation[] = [
  {
    id: 'r1',
    uid: 'u1',
    customer: { id: '1', username: 'john_doe', contact: '1234567890', email: 'john@example.com' },
    startTime: 1695552000,
    startTimePrompt: 1695550000,
    isPrompted: true,
    endTime: 1695595200,
    totalCost: 300,
    room: { id: 'room1', name: 'Ocean View Suite', bedrooms: 2, img: 'https://example.com/room1.jpg', price: 150 },
    pay: { status: true, link: 'https://payment.example.com/ref1', ref: 'ref1' },
    timestamp: 1695550000,
  },
  {
    id: 'r2',
    uid: 'u2',
    customer: { id: '2', username: 'jane_smith', contact: '0987654321', email: 'jane@example.com' },
    startTime: 1695652000,
    startTimePrompt: 1695650000,
    isPrompted: false,
    endTime: 1695695200,
    totalCost: 450,
    room: { id: 'room2', name: 'Mountain View Deluxe', bedrooms: 3, img: 'https://example.com/room2.jpg', price: 250 },
    pay: { status: false, link: 'https://payment.example.com/ref2', ref: 'ref2' },
    timestamp: 1695650000,
  },
  {
    id: 'r3',
    uid: 'u3',
    customer: { id: '3', username: 'alice_wonder', contact: '2345678901', email: 'alice@example.com' },
    startTime: 1695752000,
    startTimePrompt: 1695750000,
    isPrompted: true,
    endTime: 1695795200,
    totalCost: 500,
    room: { id: 'room3', name: 'City Center Loft', bedrooms: 1, img: 'https://example.com/room3.jpg', price: 180 },
    pay: { status: true, link: 'https://payment.example.com/ref3', ref: 'ref3' },
    timestamp: 1695750000,
  },
  {
    id: 'r4',
    uid: 'u4',
    customer: { id: '4', username: 'bob_martin', contact: '3456789012', email: 'bob@example.com' },
    startTime: 1695852000,
    startTimePrompt: 1695850000,
    isPrompted: false,
    endTime: 1695895200,
    totalCost: 200,
    room: { id: 'room4', name: 'Lakefront Cabin', bedrooms: 2, img: 'https://example.com/room4.jpg', price: 120 },
    pay: { status: false, link: 'https://payment.example.com/ref4', ref: 'ref4' },
    timestamp: 1695850000,
  },
  {
    id: 'r5',
    uid: 'u5',
    customer: { id: '5', username: 'charlie_jones', contact: '4567890123', email: 'charlie@example.com' },
    startTime: 1695952000,
    startTimePrompt: 1695950000,
    isPrompted: true,
    endTime: 1695995200,
    totalCost: 350,
    room: { id: 'room5', name: 'Penthouse Suite', bedrooms: 4, img: 'https://example.com/room5.jpg', price: 400 },
    pay: { status: true, link: 'https://payment.example.com/ref5', ref: 'ref5' },
    timestamp: 1695950000,
  }
];