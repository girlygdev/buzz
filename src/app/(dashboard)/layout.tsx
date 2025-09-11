// src/app/private/layout.tsx
import { ReactNode } from 'react'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'
import UserLayout from '@/components/layout.tsx/UserLayout' // your existing layout

export default async function PrivateLayout({ children }: { children: ReactNode }) {
  const supabase = await createClient()
  const {data: { user }} = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  return <UserLayout>{children}</UserLayout>
}
