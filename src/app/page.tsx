import Image from "next/image";

export default function Home() {
  return (
 <div>
  <nav className="bg-slate-400 h-16">
  </nav>
  <div className="flex justify-evenly font-sans items-center mt-28">
    <div>
      <h1 className="flex justify-center text-4xl font-bold">Welcome To Our Website</h1>
      <p className="flex justify-center text-2xl my-5 -ml-7 text-justify">Lorem Ipsum is simply dummy text of <br /> the printing and typesetting industry. <br /> Lorem Ipsum has been the industrys <br /> standard</p>
      <button className="bg-black text-white py-3 px-10">Contact US</button>
    </div>
    <div>
      <Image src={"/picture/black.jfif"} alt="picture" height={1000} width={500} className="w-[24rem] h-[22rem]"></Image>
    </div>
  </div>
 </div>  
  );
}
