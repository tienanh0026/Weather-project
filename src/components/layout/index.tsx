import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <div className='h-screen bg-white'>{children}</div>;
}
