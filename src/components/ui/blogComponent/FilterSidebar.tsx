"use client"

import { Button } from "@/components/ui/button"

const categories = ["همه", "دیجیتال مارکتینگ", "محتوا و کپی‌رایتینگ", "ابزارها و پلتفرم‌ها ", "تحلیل و داده"]

interface Props {
    selected: string
    onSelect: (category: string) => void
}

export const FilterSidebar = ({ selected, onSelect }: Props) => {
    return (
        <div className="space-y-2">
            <div className="flex gap-2 flex-wrap sm:flex-nowrap">
                {categories.map((cat) => (
                    <Button
                        key={cat}
                        variant={selected === cat ? "default" : "outline"}
                        onClick={() => onSelect(cat)}
                    >
                        {cat}
                    </Button>
                ))}
            </div>
        </div>
    )
}
