// components/ArticleCard.tsx

import Image from "next/image"
import Link from "next/link"
import { Share2 } from "lucide-react"

interface ArticleCardProps {
    title: string
    description: string
    image: string
    href: string
    author?: string
    date?: string
    category?: string
    readTime?: string
}

export default function ArticleLeft({
    title,
    description,
    image,
    href="#",
    author = "نام نویسنده",
    date = "1404/06/16",
    category = "دیجیتال مارکتینگ",
    readTime = "۶ دقیقه مطالعه",
}: ArticleCardProps) {
    return (
        <Link
            href={href}
            className="block border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 bg-white"
        >
            <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="w-full h-48 object-cover"
            />

            <div className="p-4 space-y-3">
                {/* برچسب دسته‌بندی */}
                <span className="inline-block bg-gray-100 text-gray-600 text-xs rounded px-2 py-0.5">
                    {category}
                </span>

                {/* تاریخ و زمان مطالعه */}
                <div className="text-xs text-green-600 font-semibold">
                    {date} · {readTime}
                </div>

                {/* عنوان مقاله */}
                <h2 className="font-bold text-sm leading-6 line-clamp-2">
                    {title}
                </h2>

                {/* خلاصه مقاله */}
                <p className="text-xs text-gray-600 line-clamp-2">
                    {description}
                </p>

                {/* نویسنده و اشتراک‌گذاری */}
                <div className="flex justify-between items-center pt-2 border-t mt-2">
                    <span className="text-xs text-gray-500 pt-2">{author}</span>
                    <button
                        type="button"
                        className="flex items-center gap-1 text-xs text-gray-500 hover:text-black pt-2"
                        onClick={(e) => {
                            e.preventDefault()
                            alert("لینک اشتراک‌گذاری اینجاست") // یا share modal باز کن
                        }}
                    >
                        اشتراک‌گذاری
                        <Share2 className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </Link>
    )
}
