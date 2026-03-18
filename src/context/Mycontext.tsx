import React, { type FC } from 'react'
import { createContext } from 'react'

interface MyContextType {
    count: number;
    increment: () => void;
    decrement: () => void;
}

export const Mycontext = createContext<MyContextType>   
({
    count:0,
    increment: () => {},    
    decrement: () => {}

});

interface MyProviderProps {
    children: React.ReactNode;
}
 const MyProvider: FC<MyProviderProps> = ({ children }) => {
    const [count, setCount] = React.useState(0);

    const increment = () => setCount(prev => prev + 1);
    const decrement = () => setCount(prev => prev - 1);

    return (
        <Mycontext.Provider value={{ count, increment, decrement }}>
            {children}
        </Mycontext.Provider>
    );
}
export default MyProvider