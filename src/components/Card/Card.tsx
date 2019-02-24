import * as React from 'react';

import './Card.scss';

export interface ICardProps {
  children: React.ReactNode;
}

const Card = ({ children }: ICardProps) => {
  return (
    <section className="card">
      {children}
    </section>
  );
};

export default Card;
