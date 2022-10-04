import { useEffect } from "react";

export const Message = () => {
  useEffect(() => {
    const OnMouseMove = ({ x, y }) => {
      const coords = { x, y };
      console.log(coords);
    };
    window.addEventListener("mousemove", OnMouseMove);

    return () => {
      window.removeEventListener("mousemove", OnMouseMove);
    };
  }, []);

  return (
    <>
      <p>Usuario ya Existe</p>
    </>
  );
};
