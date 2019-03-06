import * as React from "react";

export interface TestProps {
  sample?: React.ReactElement<any>;
  sample2?: React.ReactElement<any>[];
  sample3?: JSX.Element;
  sample4?: JSX.Element[];
  /** 
   * @default
   * import * as React from 'react';
   * import { Demo } from './demo';
   * export default () => <Demo example="Hello, World!"/>
   */
  children?: React.ReactNode;
}

export const ReactElement: React.SFC<TestProps> = props => {
  return (
    <div>
      {props.sample}
      {props.sample2}
      {props.sample3}
      {props.sample4}
      {props.children}
    </div>
  );
};

