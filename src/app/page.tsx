import Image from "next/image";
import Register from "../components/auth/Register";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-24">
      <Register />
    </div>
  );
}
