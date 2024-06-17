import { useRouter } from "next/navigation";

const HomeButton = () => {
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };
  return (
    <>
      <button onClick={handleHome}>Home</button>
    </>
  );
};
export default HomeButton;
