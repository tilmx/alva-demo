import * as React from "react";

export interface ChildrenProps {
  children?: React.ReactNode;
}

export const Children: React.SFC<ChildrenProps> = props => {
  return (
    <div>
      Are there children?
      {props.children ? 'Yes' : 'No'}
      {props.children}
    </div>
  );
};

