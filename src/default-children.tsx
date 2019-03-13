import * as React from "react";

export interface DefaultChildrenProps {
    /**
	 * @name If False
	 *
	 * @default
	 * ```tsx
	 * import * as React from 'react';
	 * import { Demo } from './demo';
	 *
	 * export default () => (
	 *    <Demo />
	 * );
	 * ```
	 **/
	foo?: React.ReactNode;
	
	    /**
	 * @name If False
	 *
	 * @default
	 * ```tsx
	 * import * as React from 'react';
	 * import { Text } from '@meetalva/essentials';
	 *
	 * export default () => (
	 *    <Text text="helloooooo" />
	 * );
	 * ```
	 **/
    baa?: React.ReactNode;
}

/** 
 * @name DefaultChildren
 */
export const DefaultChildren: React.SFC<DefaultChildrenProps> = props => {
    return (
        <div>
            Huhu {props.foo} {props.baa}
        </div>
    );
};
