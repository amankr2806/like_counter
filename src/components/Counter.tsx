import { counterActions } from "@/store";
import { AiFillLike } from "react-icons/ai";
import { BiSolidDislike } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "@/store";

const Counter = () => {
  const counterVal  = useSelector((state: RootState) => state.counter.counterVal);


  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleReset = () => {
    dispatch(counterActions.reset());
  };

  return (
    <>
      <AiFillLike size={50} onClick={handleIncrement} />
      <BiSolidDislike size={50} onClick={handleDecrement} />
      <button onClick={handleReset}>Reset</button>
      <h3>"The Current count is:{counterVal}"</h3>
    </>
  );
};

export default Counter;
