type Audience = {
  id: string;
  item: string;
};

export default function LearningAudience({
  audience,
}: {
  audience: Audience[];
}) {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='font-bold text-2xl'>مخاطبان</h1>
      <p>
        این دوره برای افرادی طراحی شده است که می‌خواهند با استفاده از ابزارهای
        نوین و هوش مصنوعی، فرآیند تحقیق و انتخاب کلمات کلیدی را به سطح بالاتری
        ارتقا دهند. مخاطبان اصلی این دوره شامل:
      </p>
      <ul className='flex flex-col gap-4'>
        {audience.map((item) => (
          <li key={item.id} className='flex items-center justify-start gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
            >
              <path
                d='M6.25 3.00049C4.45507 3.00049 3 4.45556 3 6.25049V17.7505C3 19.5454 4.45508 21.0005 6.25 21.0005H17.75C19.5449 21.0005 21 19.5454 21 17.7505V6.25049C21 4.45556 19.5449 3.00049 17.75 3.00049H6.25ZM16.2802 9.78083L11.2802 14.7806C10.9873 15.0735 10.5124 15.0735 10.2196 14.7806L8.21576 12.7768C7.92287 12.4839 7.92287 12.009 8.21576 11.7161C8.50865 11.4232 8.98353 11.4232 9.27642 11.7161L10.7499 13.1896L15.2196 8.72015C15.5125 8.42726 15.9873 8.42727 16.2802 8.72017C16.5731 9.01307 16.5731 9.48794 16.2802 9.78083Z'
                fill='#34C759'
              />
            </svg>
            <span>{item.item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
