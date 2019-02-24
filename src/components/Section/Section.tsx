import * as React from 'react';

export interface ISectionProps {
  children: React.ReactNode,
  className: string;
}

const Section = ({ children, className }: ISectionProps) => {
  return (
    <section className={className}>
      {children}
    </section>
  );
};

export default Section;
