import Image from "next/image"
import Link from "next/link"

interface ArticlePreviewProps {
    title: string
    excerpt: string
    author: string
    authorImage: string
    publishedAt: string
    readTime: string
}

export const ArticlePFavorietsCard = ({
    title,
    excerpt,
    author,
    authorImage,
    publishedAt,
    readTime,
}: ArticlePreviewProps) => {
    return (
        <div className="space-y-2">
            <h2 className="text-base text-[#121213] hover:underline font-bold leading-8">
                <Link href={"/blog/4"}>{title}</Link>
            </h2>
            <p className="text-muted-foreground text-xs text-[#525253] leading-8">{excerpt}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                <Image
                    src={authorImage || "26.png"}
                    alt={author}
                    width={32}
                    height={32}
                    className="rounded-full"
                />
                <div className="flex flex-col">
                    <span className="text-xs text-[#656566]">{author}</span>
                    <span className="text-[12px] text-[#656566]">
                        {publishedAt} · {readTime}
                    </span>
                </div>
            </div>
        </div>
    )
}
