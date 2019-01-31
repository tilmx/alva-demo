import * as React from "react";

export interface TestProps {
  sample?: React.ReactElement<any>;
  sample2?: React.ReactElement<any>[];
  sample3?: JSX.Element;
  sample4?: JSX.Element[];
}

export const ReactElement: React.SFC<TestProps> = props => {
  return (
    <div>
      {props.sample}
      {props.sample2}
      {props.sample3}
      {props.sample4}
    </div>
  );
};

