import * as React from "react";

import './ActionToggle.scss';

export interface IActionToggleProps {
  children: React.ReactNode;
}

const ActionToggle = ({ children }: IActionToggleProps) => {
  const [visible, setState] = React.useState(false);
  const toggle = () => setTimeout(() => setState(!visible));

  return (
    <div className="action__toggle" onClick={toggle}>
      <i className="action__toggle--icon fas fa-bars" />
      {
        visible
          ? <div className="action__toggle--container">
            {children}
          </div>
          : null
      }
    </div>
  )
}

export default ActionToggle;