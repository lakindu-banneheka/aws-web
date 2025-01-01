'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, Users, FileText, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()
  const stats = [
    { label: 'Total Events', value: '12', icon: Calendar, color: 'text-blue-500' },
    { label: 'Team Members', value: '24', icon: Users, color: 'text-green-500' },
    { label: 'Blog Posts', value: '8', icon: FileText, color: 'text-purple-500' },
    { label: 'Achievements', value: '15', icon: Award, color: 'text-yellow-500' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium text-gray-500">
                  {stat.label}
                </CardTitle>
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6">
        {/* Recent Events */}
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Recent Events</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: 'AWS Workshop', date: '2024-03-15', status: 'Upcoming' },
                { name: 'Cloud Computing Seminar', date: '2024-03-10', status: 'Completed' },
                { name: 'Networking Event', date: '2024-03-05', status: 'Completed' },
              ].map((event, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <div>
                    <div className="font-medium">{event.name}</div>
                    <div className="text-sm text-gray-500">{event.date}</div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      event.status === 'Upcoming'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => router.push('/admin/dashboard/events/new')}
              >
                <Calendar className="w-4 h-4 mr-2" />
                Add New Event
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => router.push('/admin/dashboard/team/new')}
              >
                <Users className="w-4 h-4 mr-2" />
                Add Team Member
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => router.push('/admin/dashboard/content/new')}
              >
                <FileText className="w-4 h-4 mr-2" />
                Create Blog Post
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

