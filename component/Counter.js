import { useActionCounter } from '../redux/action';

const Counter = () => {
    const { count, increment, decrement } = useActionCounter();
    return (
        <div>
            <h1>
                Count : <span>{count}</span>
            </h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Counter;