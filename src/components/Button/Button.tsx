import * as React from 'react';

import './Button.scss';

export interface IButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className }: IButtonProps) => {
  const classNames = ['btn', className];
  return (
    <button className={classNames.join(' ')}>
      {children}
    </button>
  )
}

export default Button;
