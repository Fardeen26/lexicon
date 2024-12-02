"use client"

import { Book } from '@/types'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const BookCard = ({ book }: { book: Book }) => {
    return (
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link href={`/book/${book._id}`}>
                <Card className="overflow-hidden min-h-[85vh] max-h-[93vh] max-[1285px]:h-[72vh] max-sm:h-fit">
                    <CardHeader className="p-0">
                        <div className="aspect-[3/4] overflow-hidden">
                            <Image
                                src={book.coverImage}
                                alt={`${book.title} cover`}
                                width={800}
                                height={800}
                                className="size-full transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="p-6">
                        <h3 className="text-xl font-semibold tracking-tight">{book.title}</h3>
                        <p className="text-sm text-muted-foreground">{book.author}</p>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                        <Link href={`/book/${book._id}`} className="w-full">
                            <Button variant="secondary" className="w-full">
                                Read more
                            </Button>
                        </Link>
                    </CardFooter>
                </Card>
            </Link>
        </motion.div>
    )
}

export default BookCard