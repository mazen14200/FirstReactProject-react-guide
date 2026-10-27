import { useState } from 'react'

function Button2(props) {
    const [count, setCount] = useState(0);

    return (
        <>
             <button onClick={() => setCount(count + 1)}>
                {props.text} {count}
            </button>

            {props.children}
        </>
    );
}

export default Button2;

