'use client';

import { useEffect, useState } from 'react';
import { getLearningItems } from '@/modules/learning/api/learning';
import LearningCard from './LearningCard';
import { learningToCardProps } from '@/modules/learning/utils/learning';
import { FilterSelect } from '@/components/shared/FilterSelect';

type Props = {
  type: 'webinar' | 'course' | 'ejaze';
};
const levelOptions = [
  { value: 'all', label: 'همه سطوح' },
  { value: 'beginner', label: 'مبتدی' },
  { value: 'intermediate', label: 'متوسط' },
  // { value: "advanced", label: "پیشرفته" },
];

const categoryOptions = [
  { value: 'all', label: 'همه دسته‌ها' },
  { value: 'برنامه‌نویسی', label: 'برنامه‌نویسی' },
  { value: 'طراحی', label: 'طراحی' },
];

const sortOptions = [
  { value: 'createdAt:desc', label: 'جدیدترین' },
  { value: 'createdAt:asc', label: 'قدیمی‌ترین' },
  { value: 'price:asc', label: 'ارزان‌ترین' },
  { value: 'price:desc', label: 'گران‌ترین' },
];

export default function LearningList({ type }: Props) {
  const [items, setItems] = useState<LearningCardProps[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState<string>('createdAt:desc');

  // Filters (basic example — you can enhance this)
  const [level, setLevel] = useState<string>();
  const [category, setCategory] = useState<string>();

  const fetchItems = async () => {
    try {
      console.log('Fetching with filters:', { type, level, category, sort });
      setLoading(true);

      const { items, pagination } = await getLearningItems({
        type,
        level,
        category,
        page,
        pageSize: 12,
        sort,
      });

      setItems(items.map(learningToCardProps));
      setTotalPages(pagination.pageCount);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, [type, level, category, page]);

  return (
    <section>
      {/* FILTERS */}
      <div className='flex justify-between mb-6'>
        <div className='flex justify-start items-center gap-4'>
          <span className='font-bold'>فیلترها:</span>
          <FilterSelect
            value={level || ''}
            onChange={(val) => setLevel(val || undefined)}
            options={levelOptions}
            placeholder='سطح'
          />

          <FilterSelect
            value={category || ''}
            onChange={(val) => setCategory(val || undefined)}
            options={categoryOptions}
            placeholder='دسته‌بندی'
          />
        </div>
        <div className='flex justify-start items-center gap-4'>
          <span className='font-bold'>مرتب سازی بر اساس:</span>
          <FilterSelect
            value={sort}
            onChange={(val) => setSort(val)}
            options={sortOptions}
            placeholder='مرتب‌سازی'
          />
        </div>
      </div>

      {/* CARDS */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4'>
        {loading ? (
          <p>در حال بارگذاری...</p>
        ) : (
          items.map((item) => (
            <LearningCard
              key={item.documentId}
              {...item}
              slug={item.slug}
              type={item.type}
            />
          ))
        )}
      </div>

      {/* PAGINATION */}
      <div className='flex justify-center gap-2 mt-8'>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-4 py-2 rounded border ${
              i + 1 === page
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
