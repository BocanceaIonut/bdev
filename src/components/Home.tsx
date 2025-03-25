import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row h-full w-full">
      <div className="bg-white w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center items-center md:items-start">
        <h1 className="text-2xl md:text-4xl mb-4 md:mb-6 main-green-text text-center md:text-left">
          <b>HELLO!</b> I AM
          <b className="text-yellow-400"> GABRIEL IONUT BOCANCEA!</b>
        </h1>
        <h1 className="text-2xl md:text-4xl mb-4 md:mb-6 main-green-text bg-yellow-400 p-2 text-center md:text-left">
          <b>
            <i>SOFTWARE ENGINEER</i>
          </b>
        </h1>
      </div>
      <div className="w-full md:w-1/2 md:h-screen justify-center content-center main-green-background p-4 md:p-0">
        <Image
          src={"/pcc.jpg"}
          alt="Profile picture"
          width={800}
          height={600}
          unoptimized
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
}
