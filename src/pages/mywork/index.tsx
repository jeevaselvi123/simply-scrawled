import { Card } from "@mui/material";
import fs from "fs/promises";
import Image from "next/image";
import path from "path";

export default function mywork({ imagePaths }: { imagePaths: string[] }) {
  return (
    <div>
      <Card className="py-8 px-12 m-5">
        <div className="font-serif text-lg text-center break-words font-normal pb-4 ">
          Simply scrawled was created as an endeavour to showcase my passion for
          writing, lettering and my love for giving hand-made, personalized
          gifts. Simply scrawled was created as an endeavour to showcase my
          passion for writing, lettering and my love for giving hand-made,
          personalized gifts. Simply scrawled was created as an endeavour to
          showcase my passion for writing, lettering and my love for giving
          hand-made, personalized gifts.
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {imagePaths.map((path, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-lg"
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "100%",
              }}
            >
              <Image
                src={path}
                alt={`Image ${index}`}
                objectFit="cover"
                layout="fill"
              />
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export async function getServerSideProps() {
  const imgDirectory = path.join(process.cwd(), "public/img");
  const imageFiles = await fs.readdir(imgDirectory);
  const imagePaths = imageFiles
    .filter((file) => /\.(jpg|jpeg|png)$/i.test(file))
    .map((file) => `/img/${file}`);

  return {
    props: {
      imagePaths,
    },
  };
}
