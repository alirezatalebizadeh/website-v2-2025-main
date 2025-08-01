'use client';

import { signup } from '@/lib/auth/signup';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { useModalStore } from '@/stores/modal-store';

export function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { openModal } = useModalStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await signup(name, email, password);
    setLoading(false);

    if (!res.ok) {
      setError('ثبت‌نام ناموفق بود');
    }
  };

  return (
    <div dir='rtl' className='space-y-6 w-full max-w-md mx-auto'>
      <div className='text-center'>
        <h1 className='text-2xl font-semibold'>ثبت نام در نکست اسکیل</h1>
        <p className='text-sm text-gray-500'>اولین قدم یادگیری خودتو بردار!</p>
      </div>

      <div className='space-y-4'>
        {/* Full name */}
        <div className='space-y-1'>
          <Label htmlFor='name'>نام و نام خانوادگی</Label>
          <Input
            id='name'
            placeholder='نام و نام خانوادگی خود را وارد کنید'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Email */}
        <div className='space-y-1'>
          <Label htmlFor='email'>ایمیل</Label>
          <Input
            id='email'
            type='email'
            placeholder='name@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className='space-y-1 relative'>
          <Label htmlFor='password'>رمز عبور</Label>
          <Input
            id='password'
            type={showPassword ? 'text' : 'password'}
            placeholder='رمز عبور خود را وارد کنید'
            className='pr-10'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className='absolute left-2 top-9 text-gray-500 hover:text-gray-700'
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
          <p className='text-xs text-gray-500 mt-1'>بین ۸ تا ۷۲ کاراکتر</p>
        </div>

        {/* Terms */}
        <p className='text-sm text-gray-600 text-center leading-relaxed'>
          با کلیک روی "ثبت‌نام رایگان"، شما با{' '}
          <a href='#' className='text-blue-600 hover:underline'>
            قوانین
          </a>{' '}
          و{' '}
          <a href='#' className='text-blue-600 hover:underline'>
            شرایط خدمات
          </a>{' '}
          موافقت می‌کنید.
        </p>

        {/* Submit */}
        <Button
          onClick={handleSubmit}
          className='w-full bg-green-500 hover:bg-green-600'
          disabled={loading}
        >
          {loading ? 'در حال ثبت‌نام...' : 'ثبت‌نام رایگان'}
        </Button>

        {/* Divider */}
        <div className='flex items-center justify-center text-sm text-gray-500'>
          یا
        </div>

        {/* Google Sign Up */}
        <Button
          variant='outline'
          className='w-full flex gap-2 justify-center items-center'
        >
          <img src='/google-icon.svg' alt='Google' className='w-4 h-4' />
          ثبت‌نام با گوگل
        </Button>

        {/* Link to Login */}
        <p className='text-center text-sm text-gray-600'>
          قبلاً ثبت‌نام کردی؟{' '}
          <span
            onClick={() => openModal('login')}
            className='text-blue-600 hover:underline'
          >
            ورود به سیستم
          </span>
        </p>
      </div>
    </div>
  );
}
