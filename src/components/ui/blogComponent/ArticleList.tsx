// components/ArticleList.tsx
interface Article {
    id: number
    title: string
    summary: string
    category: string
}

export const ArticleList = ({ articles }: { articles: Article[] }) => {
    return (
        <div className="space-y-6">
            {articles.map((article) => (
                <div key={article.id} className="p-4 border rounded-xl shadow-sm">
                    <h3 className="font-bold text-xl">{article.title}</h3>
                    <p className="text-sm text-muted-foreground">{article.summary}</p>
                </div>
            ))}
        </div>
    )
}
