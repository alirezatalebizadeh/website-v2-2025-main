"use client"

import { Button } from "@/components/ui/button"

const categories = ["محتوا", "سیو", "تبلیغات انلاین", "ایمیل مارکتینگ", "برندسازی", "تبلیغات آنلاین", "بازاریابی دیجیتال", "سوشال مدیا", "تحلیل داده"]

interface Props {
    selected: string
    onSelect: (category: string) => void
}

export const Offering = ({ selected, onSelect }: Props) => {
    return (
        <div className="my-5">
            <div className="flex gap-2 flex-wrap">
                {categories.map((cat) => (
                    <Button
                        key={cat}
                        variant={selected === cat ? "default" : "outline"}
                        onClick={() => onSelect(cat)}
                        className="bg-[#F6F6F6]"
                    >
                        {cat}
                    </Button>
                ))}
            </div>
        </div>
    )
}
