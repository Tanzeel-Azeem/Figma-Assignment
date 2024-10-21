import React from "react";
import Image from "next/image";

const Cards = () => {
  return (
    <div>
      <br />
      <br />
      <h1 className="ml-8 font-serif underline mt-5">Couch:</h1>

      <div className="flex items-center gap-x-8">
        <div>
          {/* ============1================= */}
          <Image src="/images/sofa-a.jpg" alt="" width={300} height={230} />
          <div className="ml-12">
            <h2 className="ml-7">Orange Sofa</h2>
            <p className="ml-7">
              Price:<del>7000</del>
              <ins>
                <b>5000</b>
              </ins>
            </p>
            <button className="ml-12 p-2 rounded-xl bg-orange-300 hover:bg-orange-500 duration-300">
              Buy Now
            </button>
          </div>
        </div>
        {/* =================2===================== */}
        <div>
          <Image className="bg-none hover:scale-150" src="/images/sofa-b.webp" alt="" width={250} height={230} />
          <div className="ml-12">
            <h2 className="ml-5">White Sofa</h2>
            <p className="ml-4">
              Price:<del>12000</del>
              <ins>
                <b>9000</b>
              </ins>
            </p>
            <button className="ml-9 p-2 rounded-xl bg-orange-300 hover:bg-orange-500 duration-300">
              Buy Now
            </button>
          </div>
        </div>
       
        {/* ==========3======= */}
        <div className="">
          <Image src="/images/sofa-e.jfif" alt="" width={300} height={230} />
          <div className="ml-12">
            <h2 className="ml-5">Dark Blue Sofa</h2>
            <p className="ml-8">
              Price:<del>10000</del>
              <ins>
                <b>8000</b>
              </ins>
            </p>
            <button className="ml-14 p-2 rounded-xl bg-orange-300 hover:bg-orange-500 duration-300">
              Buy Now
            </button>
          </div>
        </div>
        {/* =====================4=============== */}
        <div>
          <Image
            src="/images/sofa-i.webp"
            alt=""
            width={250}
            height={230}
          />
          <div className="ml-12">
            <h2>Dark Grey Sofa</h2>
            <p className="ml-6">
            
              Price:<del>9000</del>
              <ins>
                <b>7000</b>
              </ins>
            </p>
            <button className="ml-12 p-2 rounded-xl bg-orange-300 hover:bg-orange-500 duration-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>

     
      </div>
    
  );
};

export default Cards;
