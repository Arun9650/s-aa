import Image from "next/image";
import Login from "~~/components/cards/Login";
import { Navbar } from "~~/components/navbar";

const AuthPage = () => {
  return (<div className="h-screen">
    <Navbar />
    <div className="grid grid-cols-6 h-5/6">
<div className="col-span-3 mx-auto w-full p-8">

      <Login />
</div>
      <div className="w-full h-full p-8 col-span-3">
          <div className="w-full flex items-center justify-center h-full bg-orange-500 rounded-3xl">
            <Image src={"/login.png"} alt="Login" width={400} height={400} />
          </div>
        </div>
    </div>
  </div> 
);
};

export default AuthPage;
