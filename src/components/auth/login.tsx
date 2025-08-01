'use client';

import { login } from '@/lib/auth/login';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { useModalStore } from '@/stores/modal-store';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { openModal } = useModalStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await login(email, password);
    setLoading(false);

    if (!res.ok) {
      setError('ورود ناموفق بود');
    }
  };

  return (
    <div dir='rtl' className='space-y-6 w-full max-w-md mx-auto'>
      <div className='text-center'>
        <h1 className='text-2xl font-semibold'>ورود به نکست اسکیل</h1>
        <p className='text-sm text-gray-500'>خوش برگشتی</p>
      </div>

      <div className='space-y-4'>
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
          <a
            href='#'
            className='text-sm text-blue-600 hover:underline block text-left'
          >
            رمز عبور خود را فراموش کردید؟
          </a>
        </div>

        <Button
          className='w-full bg-green-500 hover:bg-green-600'
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? 'در حال ورود...' : 'ورود'}
        </Button>

        <div className='flex items-center justify-center text-sm text-gray-500'>
          یا
        </div>

        <Button
          variant='outline'
          className='w-full flex gap-2 justify-center items-center'
        >
          <img src='/google-icon.svg' alt='Google' className='w-4 h-4' />
          ورود با گوگل
        </Button>

        <p className='text-center text-sm text-gray-600'>
          ثبت‌نام نکردی؟{' '}
          <span
            onClick={() => openModal('signup')}
            className='text-blue-600 hover:underline'
          >
            همین حالا ثبت‌نام کن
          </span>
        </p>
      </div>
    </div>
  );
}
