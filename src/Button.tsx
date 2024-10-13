// @flow
import {ReactNode} from "react";

type Props = {
    callBack?: () => void
    children: ReactNode
};
export const Button = ({children, callBack}: Props) => {
   const onClickHandler = () => {
       if (callBack) {
           callBack()
       }
   }
    return (
        <button onClick={onClickHandler}>
            {children}
        </button>
    );
};