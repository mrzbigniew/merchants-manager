import * as React from 'react';
import './Header.scss';

export interface IHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const Header = ({ children, className }: IHeaderProps) => {
  const classNames = ['header', className];
  return (
    <nav className={classNames.join(' ')}>
      {children}
    </nav>
  );
};

export default Header;
