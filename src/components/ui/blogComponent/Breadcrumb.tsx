
import { Home } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Breadcrumb() {
    const items = [
        { label: "خانه", href: "/", icon: <Home className="w-6 h-6" /> },
        { label: "مجله", href: "/mag" },
        { label: "محبوب‌ترین‌ها", href: "/mag/popular" },
    ]

    return (
        <nav className="w-full text-sm" dir="rtl">
            <ol className="flex items-center space-x-reverse space-x-1 text-gray-700">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-1">
                        {index !== 0 && (
                            <Image src="/icon/left-favarietes.png" className="text-gray-400 " height={24} width={24} alt="" />
                        )}
                        <Link href={item.href} className="flex items-center gap-1 hover:underline">
                            {item.icon && item.icon}
                            <span className="text-[#121213] text-xl">{item.label}</span>
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    )
}
