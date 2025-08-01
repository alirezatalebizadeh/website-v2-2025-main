'use client';

import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useModalStore } from '@/stores/modal-store';
import { LoginForm, SignupForm } from '@/components/auth';

const OverlayModal: React.FC = () => {
  const { isOpen, type, closeModal } = useModalStore();

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogTitle className='hidden'>
        {type === 'login' && (
          <div className='text-center'>
            <h1 className='text-2xl font-semibold'>ورود به نکست اسکیل</h1>
          </div>
        )}
        {type === 'signup' && (
          <div className='text-center'>
            <h1 className='text-2xl font-semibold'>ثبت نام در نکست اسکیل</h1>
          </div>
        )}
      </DialogTitle>
      <DialogContent>
        {type === 'login' && <LoginForm />}
        {type === 'signup' && <SignupForm />}
      </DialogContent>
    </Dialog>
  );
};

export default OverlayModal;
