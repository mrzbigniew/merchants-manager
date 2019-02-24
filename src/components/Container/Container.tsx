import * as React from 'react';
import './Container.scss';

export interface IContainerProps {
  children: React.ReactNode,
  className?: string
}

const Container = ({ children, className = '' }: IContainerProps) => {
  const classNames: string[] = ['container', className].filter(item => item);
  return (
    <div className={classNames.join(' ')}>
      {children}
    </div>
  )
}

export default Container;