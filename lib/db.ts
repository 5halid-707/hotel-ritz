import { Booking, rooms } from './data'

const store: { bookings: Booking[] } = {
  bookings: [],
}

export function getAllRooms() {
  return rooms
}

export function getRoomById(id: string) {
  return rooms.find(r => r.id === id) || null
}

export function createBooking(data: Omit<Booking, 'id' | 'createdAt' | 'status'>): Booking {
  const booking: Booking = {
    ...data,
    id: `BKG-${Date.now()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`,
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  }
  store.bookings.push(booking)
  return booking
}

export function getBookingById(id: string): Booking | null {
  return store.bookings.find(b => b.id === id) || null
}

export function getBookingsByEmail(email: string): Booking[] {
  return store.bookings.filter(b => b.guestEmail === email)
}

export function cancelBooking(id: string): boolean {
  const booking = store.bookings.find(b => b.id === id)
  if (booking) {
    booking.status = 'cancelled'
    return true
  }
  return false
}

export function checkAvailability(roomId: string, checkIn: string, checkOut: string): boolean {
  const roomBookings = store.bookings.filter(
    b => b.roomId === roomId && b.status !== 'cancelled'
  )
  for (const b of roomBookings) {
    if (checkIn < b.checkOut && checkOut > b.checkIn) {
      return false
    }
  }
  return true
}
