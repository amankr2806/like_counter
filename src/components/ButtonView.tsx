import { RootState } from "@/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

interface ButtonViewProps {
  userId: number;
}

const ButtonView: React.FC<ButtonViewProps> = ({ userId }) => {
  
  const router = useRouter();

 
  const handleClick = () => {
    
    router.push(`/${userId}`);
  };
  return (
    <>
      <button onClick={handleClick}>view</button>
    </>
  );
};

export default ButtonView;
