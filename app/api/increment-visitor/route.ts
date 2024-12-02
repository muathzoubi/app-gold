import { ref, increment, set } from 'firebase/database'
import { rtdb } from '@/lib/firebase'

export async function POST() {
  const visitorCountRef = ref(rtdb, 'visitorCount')
  await set(visitorCountRef, increment(1))
  return new Response(JSON.stringify({ success: true }), {
    headers: { 'Content-Type': 'application/json' },
  })
}

