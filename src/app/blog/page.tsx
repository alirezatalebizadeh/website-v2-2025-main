import TopSection from '@/components/ui/blogComponent/TopSection'
import Image from 'next/image'
import React from 'react'

export default function Blog() {


    const dataComments = [
        {
            id: 1,
            text: '«از وقتی با نکست‌اسکیل آشنا شدم، نگرشم به یادگیری مارکتینگ کاملاً عوض شد. محتوایی که اینجا ارائه می‌شه نه فقط رایگانه، بلکه واقعاً کاربردیه. استادایی که دوره‌ها رو ارائه می‌دن تجربه‌ی واقعی از بازار دارن و این باعث می‌شه آموزش‌ها ملموس و واقعی باشن.',
            name: 'رضا صادقی',
            job: 'متخصص سئو دیجی‌کالا',
            avatar: '/icon/Alex Rivera.svg',
        },
        {
            id: 2,
            text: 'نکست‌اسکیل فقط یه سایت آموزشی نیست، واقعاً حس می‌کنی یه جامعه‌ست. جایی که آدمایی مثل خودت دارن یاد می‌گیرن، رشد می‌کنن و بدون پرداخت هیچ هزینه‌ای دارن آینده‌شونو می‌سازن. من تو چندتا وبینار شرکت کردم و هر بار چیزهای جدیدی یاد گرفتم که توی کارم واقعاً به دردم خوردن. به نظرم کاری که این تیم داره می‌کنه، یه نوع سرمایه‌گذاری بلندمدته برای جامعه.',
            name: 'امیر محمودی',
            job: 'دیجیتال مارکتر اسنپ‌شاپ',
            avatar: '/icon/Alex Rivera.svg',
        },
        {
            id: 3,
            text: 'اساتیدی که باهاشون کلاس داشتم، همشون تجربه‌ی واقعی بازار داشتن. اصلاً شبیه آموزشای تئوری دیگه نیست.',
            name: 'علی مرادی',
            job: 'دیجیتال مارکتینگ علی‌بابا',
            avatar: '/icon/Alex Rivera.svg',
        },
        {
            id: 4,
            text: 'ترکیب رایگان بودن و کیفیت حرفه‌ای آموزش‌ها واقعاً قابل تحسینه. احساس می‌کنم اینجا داره یه کار مهم اتفاق می‌افته.',
            name: 'امیر محمودی',
            job: 'دیجیتال مارکتر اسنپ‌شاپ',
            avatar: '/icon/Alex Rivera.svg',
        },
        {
            id: 5,
            text: 'برای کسی مثل من که اول راه یادگیری مارکتینگه، نکست‌اسکیل مثل یه مسیر مطمئن بود. مرحله‌به‌مرحله جلو رفتم.',
            name: 'امیر محمودی',
            job: 'دیجیتال مارکتر اسنپ‌شاپ',
            avatar: '/icon/Alex Rivera.svg',
        },
        {
            id: 6,
            text: 'حتی از خیلی از دوره‌های پولی‌ای که قبلاً خریده بودم بهتر بود. مهم‌تر از همه، رایگان بودنش برای من یه پیام روشن داشت: اینکه آموزش باکیفیت لزوماً نباید کالای لوکس باشه.',
            name: 'علی مرادی ',
            job: 'دیجیتال مارکتر اسنپ‌شاپ',
            avatar: '/icon/Alex Rivera.svg',
        },
    ]




    return (

        <div className=' px-6'>
            <div className='my-10 max-w-[1440px] mx-auto bg-white'>
                <TopSection title="آخرین وبینار‌ها" desc="وبینارهای مارکتینگ رایگان ما که توسط کارشناسان این حوزه ایجاد شده است، ببینید. " BtnTitle="همه وبینارها" />
            </div>
            <div className='my-10 max-w-[1440px] mx-auto bg-white'>
                <TopSection title="دوره‌ها" desc="بهترین دوره‌های مارکتینگ که شامل به‌روزترین آموزش های موجود در دنیا هستند را اینجا در نکست‌اسکیل پیدا کنید. " BtnTitle="همه دوره ها" />
            </div>
            <div className='my-10 max-w-[1440px] mx-auto bg-white'>
                <TopSection title="اساتید نکست‌اسکیل " desc="نکست‌اسکیل، جای افرادی است که تک‌تک کلماتشان، مسیر شما را تغییر می‌دهد! " />
            </div>
            <div className='my-10 max-w-[1440px] mx-auto bg-white'>
                <TopSection
                    title="همراه چه برند‌هایی ایستاده‌ایم"
                    desc="ما در کنار بزرگ‌ترین برندهای ایران، به رشد و توسعه شما اهمیت می‌دهیم."
                />
                <div className=' relative w-full h-[200px] '>
                    <picture>
                        <source media="(min-width: 640px)" srcSet="/images/brands.png" />
                        <Image
                            src="/images/brand-mobiles.png"
                            alt="برندهایی که با ما همکاری می‌کنند"
                            fill
                            className="object-contain"
                            sizes="(min-width: 640px) 100vw, 100vw"
                        />
                    </picture>
                </div>
            </div>

            {/* //!Start Comment Section */}
            <div className='my-10 max-w-[1440px] mx-auto bg-white'>
                <TopSection title="از نکست‌اسکیل چه می‌گویند" desc="پشتوانه و دلگرمی نکست‌اسکیل، فقط حمایت و حس خوب از طرف شماست!" />


                <div className='grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-[64px]'>
                    {dataComments.map((item) => (
                        <div
                            key={item.id}
                            className='rounded-[32px] p-[32px] flex flex-col justify-between gap-5 shadow '
                        >
                            <div>
                                <Image src="/icon/comment.svg" alt="نظرات مشتریان" width={32} height={32} />
                                <p className='font-xs font-medium text-[#555555]'>{item.text}</p>
                            </div>
                            <div className='h-[50px] flex gap-4 items-center'>
                                <Image src={item.avatar} className='rounded-full' alt={item.name} width={48} height={48} />
                                <div className='flex flex-col gap-1'>
                                    <h4 className='text-[#32CD99] font-bold font-sm'>{item.name}</h4>
                                    <span className='text-2xl font-normal text-[#525253]'>{item.job}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
            <div className='my-10 max-w-[1440px] mx-auto bg-white'>
                <TopSection title='آخرین مطالب بلاگ' desc='مسیر یادگیری خود را از اینجا آغاز کنید!' />
            </div>
        </div >
    )
}
