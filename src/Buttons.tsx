import {Button} from "./Button";

export const Buttons = () => {
    const foo1 = (text: string) => {
        console.log(text)
    }
    const foo2 = (text: string) => {
        console.log(text)
    }

    return (
        <div>
            <Button callBack={()=>foo1('Im VASYA')}>First Button</Button>
            <Button callBack={()=>foo2('Im IVAN')}>Second Button</Button>
        </div>
    );
};