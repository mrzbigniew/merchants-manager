import * as React from "react";

import './Logo.scss';

const Logo = ({ label }: { label: string }) => {
  return (
    <h1 className="logo">
      {label}
    </h1>
  );
};

export default Logo;

