import * as React from 'react';

import './Card.scss';

export interface ICardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: ICardProps) => {
  const classNames = ['card', className];
  return (
    <section className={classNames.join(' ')}>
      {children}
    </section>
  );
};

export default Card;
