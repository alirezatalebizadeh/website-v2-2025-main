import ArticleFavorietesCard from "./ArticleFavorietesCard"


const articles = Array.from({ length: 9 }, (_, i) => ({
    title: "۰ تا ۱۰۰ برندینگ: چگونه هویت ماندگاری در ذهن مشتریان ایجاد کنیم",
    description: "۶۳ درصد از مشتریان ترجیح می‌دهند از برندهایی خرید کنند که آن‌ها را می‌شناسند...",
    image: "/images/image-blog-favorietes.png",
    href: "/articles/1",
    author: "مصطفی کشاورز‌نژاد",
    date: "۱۴۰۴/۰۶/۱۶",
    readTime: "۶ دقیقه مطالعه",
    category: "دوره دیجیتال مارکتینگ"
}))

export default function MagazineGrid() {
    return (
        <div className="flex flex-col gap-6 mt-6">

            {/* //! first row*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {articles.slice(0, 2).map((article, index) => (
                    <ArticleFavorietesCard key={index} {...article} />
                ))}
            </div>

            {/* //! second row*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {articles.slice(2).map((article, index) => (
                    <ArticleFavorietesCard key={index + 2} {...article} />
                ))}
            </div>

        </div>
    )
}
