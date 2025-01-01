'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Calendar, Users, Settings, LogOut, LayoutDashboard, FileText } from 'lucide-react'
import { useAuth } from '@/components/auth-context'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { user, logout, isLoading } = useAuth()
  const router = useRouter()

  // useEffect(() => {
    // if (!isLoading && !user) {
      // router.push('/admin/login')
    // }
  // }, [user, isLoading, router])

  // if (isLoading || !user) {
    // return null
  // }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-[#232F3E] text-white">
          <div className="p-4">
            <h2 className="text-xl font-bold">Admin Dashboard</h2>
          </div>
          <nav className="mt-8">
            <div className="px-4 space-y-2">
              {[
                { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
                { href: '/admin/dashboard/events', label: 'Events', icon: Calendar },
                { href: '/admin/dashboard/team', label: 'Team', icon: Users },
                { href: '/admin/dashboard/content', label: 'Content', icon: FileText },
                { href: '/admin/dashboard/settings', label: 'Settings', icon: Settings },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-2 text-gray-300 hover:text-white hover:bg-[#FF9900]/10 rounded-lg transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
          <div className="absolute bottom-4 left-4">
            <Button
              variant="ghost"
              className="text-gray-300 hover:text-white"
              onClick={() => {
                logout()
                router.push('/admin/login')
              }}
            >
              <LogOut className="w-5 h-5 mr-2" />
              Logout
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          <header className="bg-white border-b">
            <div className="px-6 py-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">
                  AWS Cloud Club Admin
                </h1>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">{user?.email}</span>
                </div>
              </div>
            </div>
          </header>

          <div className="p-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

