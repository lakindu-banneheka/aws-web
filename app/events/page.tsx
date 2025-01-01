'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react'

const events = [
  {
    id: 1,
    title: "AWS Cloud Fundamentals Workshop",
    date: "March 15, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Computer Lab 1, Faculty of Science",
    description: "Learn the basics of AWS cloud services and get hands-on experience with EC2 and S3.",
    image: "/event-1.jpg",
    category: "Workshop",
    registrationLink: "#"
  },
  {
    id: 2,
    title: "Cloud Career Day",
    date: "March 20, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Main Auditorium",
    description: "Meet industry professionals and learn about career opportunities in cloud computing.",
    image: "/event-2.jpg",
    category: "Career",
    registrationLink: "#"
  },
  // Add more events as needed
]

export default function Events() {
  return (
    <div className="bg-gray-50 min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join us for exciting workshops, seminars, and networking events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full card-hover">
                <div className="relative h-48 w-full">
                  <Image
                    src={event.image}
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  <div className="absolute top-4 right-4 bg-[#FF9900] text-white px-3 py-1 rounded-full text-sm">
                    {event.category}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                  <CardDescription>
                    <div className="flex items-center text-sm text-gray-500 mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <Clock className="w-4 h-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mt-1">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <Button asChild className="w-full">
                    <Link href={event.registrationLink}>
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <h2 className="text-2xl font-bold mb-4">Past Events</h2>
          <p className="text-gray-600">
            Check out our previous events and workshops on our{' '}
            <Link href="#" className="text-[#FF9900] hover:underline">
              YouTube channel
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  )
}

