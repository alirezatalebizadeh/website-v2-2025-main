import Link from "next/link"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Image from "next/image"


interface ArticleCardProps {
    id: string
    title: string
    excerpt: string
    authorName: string
    authorAvatar?: string
    publishedAt: string
    readTime: string
}

export const ArticleCard = ({
    id,
    title,
    excerpt,
    authorName,
    authorAvatar,
    publishedAt,
    readTime,
}: ArticleCardProps) => {


    return (
        <div className="flex flex-col gao-2 p-4 border-b-2 border-[#DBDBDC]  shadow-sm space-y-3 bg-white">
            {/* //!auther and sharing button*/}
            <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                        <Image src="/icon/26.png" className="rounded-full" width={24} height={24} alt="اشتراک گذاری" />
                        <AvatarFallback>{authorName[0]}</AvatarFallback>
                    </Avatar>
                    <span className="text-[#656566] font-medium text-2xs"> {authorName}</span>
                </div>

                <Button className="bg-[#F6F6F6]">
                    <Image src="/icon/Share.png" width={24} height={24} alt="اشتراک گذاری" />
                    اشتراک گذاری
                </Button>
            </div>

            {/* //!title*/}
            <Link href={`/blog/${id}`} className="block hover:underline text-black">
                <h2 className="font-bold text-lg text-[#121213]">{title}</h2>
            </Link>

            {/* //!summary */}
            <p className="text-sm text-gray-600 leading-relaxed">{excerpt}</p>

            {/* //! sharing date*/}
            <div className="text-xs text-emerald-600 font-medium">
                {publishedAt} • {readTime}
            </div>
        </div>
    )
}
