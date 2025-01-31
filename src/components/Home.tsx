import Image from "next/image";
import pcc from "../images/pcc.jpg";

export default function Home() {
    return (
    <div className="flex h-full w-full">
    <div className="bg-white w-1/2 justify-items-center content-center">
      <h1 className="text-4xl mb-6 main-green-text">
        <b>HELLO!</b> I AM
        <b className="text-yellow-400"> GABRIEL IONUT BOCANCEA!</b>
      </h1>
      <h1 className="text-4xl mb-6 main-green-text bg-yellow-400">
        <b>
          <i>SOFTWARE ENGINEER</i>
        </b>
      </h1>
    </div>
    <div className="w-1/2 justify-center content-center main-green-background">
      <Image src={pcc} alt="" className="w-full h-full object-contain" />
    </div>
  </div>
  )
}