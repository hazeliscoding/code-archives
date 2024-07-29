import { useAuth, UserButton } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import React, { useEffect } from 'react';

const MyNotes = () => {
  const { userId } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      if (!userId) {
        redirect('/');
      }
    });
  }, [userId]);

  return (
    <div>
      <UserButton />
    </div>
  );
};

export default MyNotes;
