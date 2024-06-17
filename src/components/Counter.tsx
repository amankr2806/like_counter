import { counterActions } from "@/store";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "@/store";

interface CounterProps {
  userId: number;
}

const Counter: React.FC<CounterProps> = ({ userId }) => {
  const counterVal = useSelector(
    (state: RootState) => state.counter.counterVal[userId] || 0
  );

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment(userId));
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement(userId));
  };

  const handleReset = () => {
    dispatch(counterActions.reset(userId));
  };

  return (
    <>
      <AiFillLike size={50} onClick={handleIncrement} />
      <BiSolidDislike size={50} onClick={handleDecrement} />
      <button onClick={handleReset}>Reset</button>
      <h3>"The Current count is:{counterVal}</h3>
    </>
  );
};

export default Counter;
