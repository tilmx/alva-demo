import * as React from "react";


export interface DemoProps {
  /** @default BLABLABLA */
  example: string;
  foo: string;
  bla: boolean;
}

/** 
 * @name Demo C
 * @indicator example
 */

export const Demo: React.SFC<DemoProps> = props => {
  return (
    <div>
      Hello World {props.example}
    </div>
  );
};
