
import * as React from "react";

export interface DefaultChildrenProps {
    /**
	 * @name If False
	 *
	 * @default
	 * ```tsx
	 * import * as React from 'react';
	 * import { Text } from '@meetalva/essentials';
	 *
	 * export default () => (
	 *    <Text text="Lorem ipsum"/>
	 * );
	 * ```
	 **/
    children?: React.ReactNode;
}

/** 
 * @name DefaultChildren
 */
export const DefaultChildren: React.SFC<DefaultChildrenProps> = props => {
    return (
        <div>
        {props.children}
        </div>
    );
};
