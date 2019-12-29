import { useSelector, useDispatch } from 'react-redux';

export const useActionCounter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();
    const increment = () =>
        dispatch({
            type: 'INCREMENT',
        });
    const decrement = () =>
        dispatch({
            type: 'DECREMENT',
        });
    return { count, increment, decrement };
}