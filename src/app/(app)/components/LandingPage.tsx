"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import BookCard from './BookCard'
import { books } from '@/app/data/books'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

export type Book = {
    _id: string;
    title: string;
    description: string;
    coverImage: string;
    file: string;
    author: string,
};


const LandingPage = () => {
    const session = useSession()
    return (
        <main className="py-8">
            <section className="relative mx-auto max-w-5xl py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-8 text-center"
                >
                    <h1 className="bg-gradient-to-r from-neutral-900 to-neutral-600 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl lg:text-7xl dark:from-neutral-50 dark:to-neutral-300 max-lg:px-4">
                        Connect, Share and Trade Your Favourite Reads...
                    </h1>
                    <p className="max-w-2xl text-lg text-muted-foreground max-sm:px-1">
                        Join our community of book lovers. Discover new books, share your favorites, and connect with fellow readers.
                    </p>
                    <div className="flex gap-4">
                        <Link href={session.status === 'authenticated' ? '/books' : `/signin`}>
                            <Button size="lg" className="rounded-full">
                                Get Started
                            </Button>
                        </Link>
                        <Link href='/books'>
                            <Button size="lg" variant="outline" className="rounded-full">
                                Browse Books
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </section>

            <section className="pt-20 pb-10 px-4">
                <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">Featured Books</h2>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {books.map((book, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <BookCard book={book} />
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </main>
    )
}

export default LandingPage