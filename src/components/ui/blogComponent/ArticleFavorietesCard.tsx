import Image from "next/image"
import Link from "next/link"
import { Share2 } from "lucide-react"
import { Button } from "../button"
import { Avatar } from "../avatar"

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

export default function ArticleFavorietesCard({
    title,
    description,
    image,
    href,
    author,
    date,
    category = "دیجیتال مارکتینگ",
    readTime = "۶ دقیقه مطالعه",
}: ArticleCardProps) {
    return (
        <Link
            href={href}
            className="block relative border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 bg-white"
        >
            <Image
                src={image}
                alt={title}
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-xl"
            />

            <div className="p-4 space-y-3">
                {/* برچسب دسته‌بندی */}
                <span className="absolute right-3 top-40 bg-[#00000099] text-white text-xs rounded px-2 py-0.5">
                    {category}
                </span>

                {/* //! date and time's read */}
                <div className="text-base text-[#32CD99] font-bold">
                    {date} · {readTime}
                </div>

                {/* //! title*/}
                <h2 className="font-bold text-2xl text-[#121213] leading-10 ">
                    {title}
                </h2>

                {/* //! summary */}
                <p className="text-xl leading-9 text-[#525253] ">
                    {description}
                </p>

                {/* نویسنده و اشتراک‌گذاری */}
                <div className="flex justify-between items-center pt-2 border-t mt-2">
                    <div className="flex items-center gap-2">
                        <Avatar className="w-6 h-6">
                            <Image src="/icon/26.png" className="rounded-full" width={24} height={24} alt="اشتراک گذاری" />
                        </Avatar>
                        <span className="text-xs text-gray-500 pt-2"> {author}</span>
                    </div>
                    <Button className="bg-[#F6F6F6]">
                        <Image src="/icon/Share.png" width={24} height={24} alt="اشتراک گذاری" />
                        اشتراک گذاری
                    </Button>
                </div>
            </div>
        </Link>
    )
}
