// app/blog/page.tsx
"use client"

import { ArticleCard } from "@/components/ui/blogComponent/ArticleCard"
import { ArticlePFavorietsCard } from "@/components/ui/blogComponent/ArticleFavoriesCard"
import { FilterSidebar } from "@/components/ui/blogComponent/FilterSidebar"
import { Offering } from "@/components/ui/blogComponent/Offering"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"


const allArticles = [
    {
        id: "1",
        title: "بازاریابی در مقابل برندینگ",
        excerpt: "فرق برندینگ و بازاریابی در چیست؟ این مقاله به بررسی تفاوت‌های مهم می‌پردازد...",
        authorName: "علی اسفندی",
        publishedAt: "۲ مرداد ۱۴۰۳",
        readTime: "۴ دقیقه",
        category: "دیجیتال مارکتینگ",
    },
    {
        id: "2",
        title: "روانشناسی رنگ‌ها در تبلیغات",
        excerpt: "چگونه انتخاب رنگ می‌تواند احساسات مخاطب را تحت تأثیر قرار دهد؟",
        authorName: "زهرا رضایی",
        publishedAt: "۳ مرداد ۱۴۰۳",
        readTime: "۳ دقیقه",
        category: "محتوا و کپی‌رایتینگ",
    },
    {
        id: "3",
        title: "تحلیل داده در بازاریابی محتوا",
        excerpt: "با ابزارهای تحلیل داده آشنا شوید و بازدهی محتوای خود را افزایش دهید.",
        authorName: "سارا کریمی",
        publishedAt: "۴ مرداد ۱۴۰۳",
        readTime: "۵ دقیقه",
        category: "تحلیل و داده",
    },
]

const favoriteArticles = [
    {
        title: "بازاریابی محتوا چیست و چرا اهمیت دارد؟",
        excerpt: "پایه‌ای‌ترین مفهوم مارکتینگ که هر کسب‌وکاری باید بداند",
        author: "مصطفی کاشف‌زمانه",
        authorImage: "/icon/26.png",
        publishedAt: "۱۴۰۳/۰۶/۲۰",
        readTime: "۶ دقیقه مطالعه",
    },
    {
        title: "نقش تجربه کاربری در افزایش فروش آنلاین",
        excerpt: "چطور UI/UX خوب باعث تبدیل بازدیدکننده به مشتری می‌شود؟",
        author: "علی فتحی",
        authorImage: "/icon/26.png",
        publishedAt: "۱۴۰۳/۰۵/۱۸",
        readTime: "۴ دقیقه مطالعه",
    },
    {
        title: "۵ اشتباه رایج در استراتژی شبکه‌های اجتماعی",
        excerpt: "چیزهایی که اکثر برندها باید فوراً اصلاح کنند",
        author: "زهرا احمدی",
        authorImage: "/icon/26.png",
        publishedAt: "۱۴۰۳/۰۴/۳۰",
        readTime: "۵ دقیقه مطالعه",
    },
    {
        title: "سئو تکنیکال چیست؟ راهنمای مبتدی تا پیشرفته",
        excerpt: "از crawlability تا schema markup، همه‌چیز اینجاست",
        author: "حسین رضایی",
        authorImage: "/icon/26.png",
        publishedAt: "۱۴۰۳/۰۳/۱۵",
        readTime: "۷ دقیقه مطالعه",
    },
    {
        title: "تولید محتوای ویدئویی با موبایل",
        excerpt: "با کمترین ابزار، بهترین نتیجه را بگیرید",
        author: "فاطمه قاسمی",
        authorImage: "/icon/26.png",
        publishedAt: "۱۴۰۳/۰۲/۱۰",
        readTime: "۳ دقیقه مطالعه",
    },
    {
        title: "راهنمای کامل ساخت لندینگ‌پیج موثر",
        excerpt: "همه‌چیز درباره صفحات فرود که واقعا تبدیل می‌کنند",
        author: "سینا مرادی",
        authorImage: "/icon/26.png",
        publishedAt: "۱۴۰۳/۰۱/۲۲",
        readTime: "۸ دقیقه مطالعه",
    },
    {
        title: "ایمیل مارکتینگ مرده نیست!",
        excerpt: "دلیل اینکه هنوز ROI بالاتری از اکثر روش‌ها دارد",
        author: "مهدی سلطانی",
        authorImage: "/icon/26.png",
        publishedAt: "۱۴۰۳/۰۱/۱۰",
        readTime: "۴ دقیقه مطالعه",
    },
]



export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState("همه")

    const filteredArticles =
        selectedCategory === "همه"
            ? allArticles
            : allArticles.filter((a) => a.category === selectedCategory)

    return (
        <>
            <h2 className='text text-3xl text-[#121213] font-bold text-center mt-6'>مجله نکست اسکیل</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 p-6 max-w-7xl mx-auto">
                <main className="col-span-2 flex flex-col gap-6">
                    <FilterSidebar selected={selectedCategory} onSelect={setSelectedCategory} />
                    <div className="grid gap-4 grid-cols-1">
                        {filteredArticles.map((article) => (
                            <ArticleCard key={article.id} {...article} />
                        ))}
                    </div>

                </main>
                <aside className="">
                    <div className="flex flex-col gap-8">
                        <h2 className='text text-base text-[#33CC99] font-bold text-right'>محبوب‌ترین ها</h2>

                        {favoriteArticles.map((article, index) => (
                            <ArticlePFavorietsCard key={index} {...article} />
                        ))}
                        <Button className="flex items-center text-[#121213] text-base max-w-fit mt-4 bg-white">
                            <Link href="/login">مشاهده همه مطالب</Link>
                            <ArrowLeft />
                        </Button>
                    </div>

                    <div className="my-5">
                        <h2 className='text text-base text-[#33CC99] font-bold text-right'>مطالب پیشنهادی ها</h2>
                        <Offering selected={selectedCategory} onSelect={setSelectedCategory} />
                    </div>
                </aside>
            </div>
        </>

    )
}
