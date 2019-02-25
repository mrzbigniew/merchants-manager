import * as React from 'react';

export interface IMainProps {
  children: React.ReactNode;
  className?: string;
}

const Main = ({ children, className }: IMainProps) => {
  return (
    <main className={className}>
      {children}
    </main>
  )
}

export default Main;
