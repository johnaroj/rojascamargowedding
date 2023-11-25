"use client";
import { storage, ID } from "@/appwrite";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import PhotoAlbum from "react-photo-album";
import PhotoImage from "./PhotoImage";
import { greatVibes } from "../styles/fonts";
import { FaHeart } from "react-icons/fa";

const getImages = async () => {
  const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];
  const heightList = [
    800, 1620, 720, 721, 1620, 607, 608, 720, 1549, 1620, 694, 720, 1440, 1620,
    810, 610, 160, 810, 720, 1440,
  ];

  const response = await storage.listFiles(
    process.env.NEXT_PUBLIC_APPWRITE_UPLOAD_BUCKET_ID!
  );
  const images = await Promise.all(
    response.files.map((file) => {
      let height = heightList[Math.floor(Math.random() * heightList.length)];
      return {
        src: storage.getFilePreview(file.bucketId, file.$id, 1080, height).href,
        width: 1080,
        height: height,
        srcSet: breakpoints.map((breakpoint) => {
          const h = Math.round((1080 / height) * breakpoint);

          return {
            src: storage.getFilePreview(
              file.bucketId,
              file.$id,
              breakpoint,
              height
            ).href,
            width: breakpoint,
            height,
          };
        }),
      };
    })
  );
  return images;
};

const Upload = () => {
  const ref = useRef<HTMLInputElement>(null);

  const [success, setSuccess] = useState(false);
  const [imageList, setImageList] = useState<
    {
      src: string;
      width: number;
      height: number;
      //srcSet: { src: string; width: number; height: number }[];
    }[]
  >();

  useEffect(() => {
    getImages().then((images) => setImageList(images));
  }, []);

  const handleClick = () => {
    ref.current?.click();
  };

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.currentTarget.files ?? []);
    const uploaded = await Promise.all(
      files.map((file) =>
        storage.createFile(
          process.env.NEXT_PUBLIC_APPWRITE_UPLOAD_BUCKET_ID!,
          ID.unique(),
          file
        )
      )
    );
    if (uploaded.length > 0) {
      getImages().then((images) => setImageList(images));
    }
  };
  //console.log(imageList);
  return (
    <div className="min-h-screen flex flex-col pt-10 max-w-6xl px-10 mx-auto items-center">
      <div className="pt-20 flex flex-col justify-center items-center">
        <h6 className="uppercase text-[#B76E78] text-md mb-3 font-semibold tracking-widest">
          Upload
        </h6>
        <h1 className={`${greatVibes.className} text-4xl`}>
          Help us memorize our day
        </h1>
        <div className="flex items-center justify-center space-x-5">
          <div className="w-[60px] h-0.5 bg-[#B76E78]"></div>
          <FaHeart className="animate-bounce" />
          <div className="w-[60px] h-0.5 bg-[#B76E78]"></div>
        </div>
      </div>
      <div className="mb-4 pt-6 flex flex-col justify-center items-center">
        <button
          onClick={handleClick}
          className="bg-black hover:bg-indigo-dark text-white text-xl font-bold py-4 px-4 w-full inline-flex justify-center"
        >
          <span>Click to upload </span>
        </button>
        <input
          onChange={handleChange}
          className="cursor-pointer absolute block opacity-0 pin"
          type="file"
          multiple
          ref={ref}
        />
      </div>
      <div className="w-full">
        <PhotoAlbum
          layout="rows"
          photos={imageList ?? []}
          renderPhoto={PhotoImage}
          defaultContainerWidth={1200}
          sizes={{
            size: "calc(100vw - 40px)",
            sizes: [
              { viewport: "(max-width: 299px)", size: "calc(100vw - 10px)" },
              { viewport: "(max-width: 599px)", size: "calc(100vw - 20px)" },
              { viewport: "(max-width: 1199px)", size: "calc(100vw - 30px)" },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default Upload;
