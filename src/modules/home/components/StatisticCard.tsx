'use client';
import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

type StatisticCardProps = {
  value: number;
  label: string;
};

export default function StatisticCard({ value, label }: StatisticCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = value / (1000 / 16); // 60fps approx.
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        clearInterval(timer);
        setCount(value);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <Card className='bg-white shadow-sm'>
      <CardContent className='flex flex-col items-center gap-4'>
        <div className='text-3xl md:text-4xl font-bold text-emerald-600 mb-2'>
          {count}
        </div>
        <div className='text-gray-600'>{label}</div>
      </CardContent>
    </Card>
  );
}
