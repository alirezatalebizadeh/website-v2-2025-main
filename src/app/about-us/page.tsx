'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { getTeamMembers } from '@/modules/aboutUs/api/teamMembers';
import comments from '@/lib/dummyData/commentsData.json';
const AboutUs = () => {
  const ourBeliefsContent = [
    {
      imageSrc: '/images/our-beliefs-1.png',
      title: 'یادگیری مشارکتی',
      description: 'جامعه‌ای از یادگیرندگان که از یکدیگر حمایت می‌کنند',
    },
    {
      imageSrc: '/images/our-beliefs-2.png',
      title: 'محتوای حرفه‌ای',
      description: 'تمام آموزش‌ها توسط متخصصان با تجربه تدریس می‌شود',
    },
    {
      imageSrc: '/images/our-beliefs-3.png',
      title: 'دسترسی رایگان',
      description: 'هیچ هزینه‌ای برای دسترسی به آموزش‌های اصلی دریافت نمی‌کنیم',
    },
    {
      imageSrc: '/images/our-beliefs-4.png',
      title: 'عدالت آموزشی',
      description: 'همه افراد حق دسترسی به آموزش‌های با کیفیت را دارند',
    },
  ];

  const ourHistoryContent = [
    {
      dotColor: '#059669',
      title: 'شناسایی مشکل',
      description:
        'متوجه شدیم که آموزش‌های با کیفیت بازاریابی معمولاً گران هستند و برای بسیاری از افراد قابل دسترس نیستند. این موضوع باعث ایجاد شکاف در دسترسی به دانش می‌شد.',
    },
    {
      dotColor: '#2563EB',
      title: 'تشکیل تیم',
      description:
        'گروهی از متخصصان بازاریابی و توسعه‌دهندگان با هدف مشترک ایجاد عدالت آموزشی دور هم جمع شدند و تصمیم گرفتند این مشکل را حل کنند.',
    },
    {
      dotColor: '#9333EA',

      title: 'راه‌اندازی پلتفرم',
      description:
        'NextSkill با اولین دوره رایگان خود آغاز به کار کرد و به تدریج با اضافه شدن مدرسان و محتوای بیشتر، به پلتفرمی جامع تبدیل شد.',
    },
    {
      dotColor: '#059669',
      title: 'رشد و توسعه',
      description:
        'امروز NextSkill میزبان هزاران یادگیرنده است و همچنان با هدف گسترش دسترسی به آموزش‌های با کیفیت در حال رشد و پیشرفت است.',
    },
  ];

  const [teams, setTeams] = useState<MembersByTeam>({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const data: MembersByTeam = await getTeamMembers();
        setTeams(data);
        setLoading(false);
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch About Us data:', error);
      }
    }

    fetchData();
  }, []);

  if (loading || !teams) {
    return <div>Loading...</div>; // You can replace with a spinner
  }
  return (
    <section className='container gap-[104px] mx-auto flex flex-col items-center justify-center max-w-full overflow-x-hidden'>
      <section className='main-content flex flex-col justify-center items-center gap-16 bg-[#10B981] bg-opacity-5  py-12 w-screen'>
        <div className='flex flex-col justify-center items-center gap-6'>
          <h1 className='text-5xl font-extrabold'>یادگیری بدون محدودیت!</h1>
          <p className='font-medium align-middle text-2xl max-w-[1280]'>
            در نکست ‌اسکیل به سراغ حرف‌های ناگفته‌ای می‌رویم که از تجربه زاده
            شده‌اند و احتمالاً در کتاب‌ها پیدا نمی‌شوند. ما میزبان افرادی هستیم
            که هر کلمه‌ از صحبت‌هایشان، می‌تواند جرقه‌ای برای پرواز شما باشد!
          </p>
        </div>
        <Image
          src='/images/about-us.png'
          alt='About Us'
          width={1540}
          height={406}
        />
        <p className='text-2xl font-extrabold max-w-[1000]'>
          نکست‌اسکیل آمده است تا محتوای آموزشی باکیفیت و دست اوّل را از افراد
          واقعاً متخصص به دست آنان که باید، برساند و علت وجودی خود را برداشتن
          گام‌هایی کوچک ولی مستمر، برای تحقق عدالت آموزشی می‌داند.
        </p>
      </section>
      <section className='our-mission flex justify-center items-center'>
        <div>
          <h1 className='text-3xl font-medium pb-8'>ماموریت ما</h1>
          <p className='text-2xl font-normal max-w-[800]'>
            ما بر این باوریم که هیچ فردی نباید به دلیل محدودیت‌های مالی یا
            جغرافیایی از دسترسی به آموزش باکیفیت محروم شود. ما می‌خواهیم تا
            همزمان با ارائه آموزش‌های تخصصی و باکیفیت، فرصت‌های برابر و
            زمینه‌ساز پیشرفت را برای همه فراهم کنیم.
          </p>
        </div>
        <Image
          src='/images/our-mission.png'
          alt='our mission'
          width={550}
          height={300}
        />
      </section>
      <section className='our-beliefs flex flex-col items-center gap-16 max-w-[1100]'>
        <h1 className='font-bold text-4xl'>اصول و باورهای NextSkill</h1>
        <div className='flex gap-8'>
          {ourBeliefsContent.map((item) => (
            <div key={item.title} className='flex flex-col items-center gap-3'>
              <Image
                src={item.imageSrc}
                alt={item.title}
                width={64}
                height={64}
              />
              <h2 className='font-bold text-xl'>{item.title}</h2>
              <p className='text-[#4B5563]'>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className='NextSkill-history flex flex-col items-center gap-6'>
        <h1 className='text-4xl font-bold'>چگونه NextSkill متولد شد</h1>
        <div className='flex flex-col items-center gap-4'>
          {ourHistoryContent.map((item) => (
            <div key={item.title} className='flex flex-col items-center gap-4'>
              <div
                className={`bg-[${item.dotColor}] border-[16px] border-[${item.dotColor}] border-opacity-25 w-12 h-12 rounded-full`}
              ></div>
              <div className='flex flex-col items-center gap-3'>
                <h2 className='text-xl font-bold'>{item.title}</h2>
                <p className='text-xl text-[#4B5563]'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className='our-team flex flex-col items-center gap-12 w-[1440] '>
        <div className='flex flex-col items-center gap-3'>
          <h1 className='font-bold text-4xl'>تیم نکست اسکیل</h1>
          <p className='text-lg text-[#4B5563]'>
            مدرسان NextSkill از میان حرفه‌ای‌ترین افراد حوزه بازاریابی انتخاب
            شده‌اند که سال‌ها تجربه عملی در شرکت‌های معتبر دارند
          </p>
        </div>
        <Tabs
          defaultValue={Object.keys(teams)[0]}
          className='flex flex-col items-center'
        >
          <TabsList className='bg-[#F1F1F1] gap-3'>
            {Object.keys(teams).map((team) => (
              <TabsTrigger
                className='data-[state=active]:bg-white'
                value={team}
                key={team}
              >
                {team}
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.keys(teams).map((team) => (
            <TabsContent
              value={team}
              key={team}
              className='grid grid-cols-3 gap-4 data-[state=inactive]:hidden'
              dir='rtl'
            >
              {teams[team].map((member) => (
                <Card
                  className='flex-row p-3 bg-[#0000000D] border-none w-[450px] '
                  key={member.documentId}
                >
                  <Image
                    src={member.avatar?.url}
                    alt={`${member.firstName} ${member.lastName}`}
                    width={160}
                    height={160}
                    className='rounded-2xl w-[160] h-[160]'
                  />
                  <div className='flex flex-col gap-2'>
                    <h1 className='font-bold text-2xl'>
                      {member.firstName} {member.lastName}
                    </h1>
                    <p className='text-lg text-primary'>{member.role}</p>
                    <div className='links flex flex-col justify-end items-start h-full gap-1'>
                      {member.links &&
                        member.links.map(
                          (link) =>
                            link.value && (
                              <Button variant='outline' className='w-30'>
                                <Link
                                  href={link.value}
                                  key={link.key}
                                  className='flex gap-2 justify-center items-center'
                                >
                                  <Image
                                    src={`/icon/socialMedia/${link.key}.svg`}
                                    alt={link.key}
                                    width={24}
                                    height={24}
                                  />
                                  {link.key}
                                </Link>
                              </Button>
                            ),
                        )}
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <section className='our-business flex flex-col items-center gap-6 bg-[#32CD99] bg-opacity-10 w-screen p-12 box-border'>
        <h1 className='text-4xl font-bold'>چگونه خودمان را نگه می‌داریم؟</h1>
        <p className='text-3xl font-extrabold text-primary max-w-screen-xl'>
          NextSkill از طریق فروش برخی دوره‌های تخصصی و پیشرفته، درآمد کسب می‌کند
          تا بتواند آموزش‌های اصلی را به صورت رایگان ارائه دهد. این مدل کسب‌وکار
          به ما اجازه می‌دهد که هم پایدار باشیم و هم به ماموریت اصلی‌مان وفادار
          بمانیم.
        </p>
      </section>
      <section className='comments flex flex-col gap-4 max-w-[1100]'>
        <h1 className='text-3xl font-bold'>از نکست‌اسکیل چه می‌گویند</h1>
        <p className='text-2xl text-[#525253]'>
          پشتوانه و دلگرمی نکست‌اسکیل، فقط حمایت و حس خوب از طرف شماست!
        </p>
        <div
          className='flex flex-col flex-wrap gap-6 h-screen max-h-max'
          dir='rtl'
        >
          {comments.map((comment) => (
            <Card className='px-6 h-fit rounded-2xl w-1/3' key={comment.id}>
              <Image
                src='/icon/quote.svg'
                alt='quoteIcon'
                width={32}
                height={32}
              />
              <p className='font-medium'>{comment.content}</p>
              <div className='user-info flex items-center gap-3'>
                <Image
                  src={comment.profileUrl}
                  alt={comment.fullName}
                  width={64}
                  height={64}
                />
                <div>
                  <h1 className='text-primary font-bold'>{comment.fullName}</h1>
                  <p className='text-sm text-[#525253]'>{comment.position}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <section className='CTA flex flex-col items-center gap-6 bg-[#059669] w-screen p-16'>
        <h1 className='text-4xl font-bold text-white'>
          آماده‌اید تا سفر یادگیری‌تان را آغاز کنید؟
        </h1>
        <p className='text-xl text-white'>
          به جامعه NextSkill بپیوندید و از آموزش‌های رایگان و با کیفیت ما
          بهره‌مند شوید
        </p>
        <div className='buttons flex gap-4'>
          <Button className='bg-white px-8 py-2'>ثبت نام رایگان</Button>
          <Button className='bg-white px-8 py-2'>مشاهده دوره‌ها</Button>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
