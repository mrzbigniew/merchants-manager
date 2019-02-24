import * as React from 'react';

import './Footer.scss';

export interface IFooterProps {
  children?: React.ReactNode
}

const Footer = ({ children }: IFooterProps) => {
  return (
    <footer className="footer">
      {children}
    </footer>
  );
};

export default Footer;
