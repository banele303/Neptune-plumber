
import Image from "next/image";


export default function Logo() {
  return (
    <div className="flex flex-row md:pt-[2rem] rounded-[2rem] md:px-[2rem] md:ml-[4rem] ">
      <div className="container mx-auto h-[4rem] w-[4rem] md:h-[6rem] md:w-[6rem] pl-2 ">
        <Image
          src="/img/neptune-logo.png" // the image file should be in the public folder
          alt="southflow marketing agency no contract image"
          width={50} // the original image width
          height={50} // the original image height
          layout="responsive" // this will make the image responsive
          quality={100} // this will reduce the image size and improve performance
        />
      </div>
    
    </div>
  );
}


