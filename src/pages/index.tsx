import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import BackgroundSource from "../../public/b.png";
import LogoSource from "../../public/logo.svg";

export default function Home() {
  const serviceText = [
    "Hand Lettered With Love",
    "Hand Lettered Products and Services",
  ];

  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % serviceText.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className=" w-full flex flex-row justify-between m-auto p-4">
        <div className="w-1/2 flex flex-col my-auto">
          <div>
            <Image
              className="items-end"
              src={LogoSource}
              alt="Simply Scrawled"
              width={400}
            />
          </div>
          <div>
            <Typography
              variant="h5"
              className="animate-typing overflow-hidden whitespace-nowrap font-mono font-medium"
            >
              {serviceText[index]}
            </Typography>
          </div>
          <div>
            <HorizontalRuleIcon className="w-10 h-8" />
            <HorizontalRuleIcon className="w-10 h-8" />
            <HorizontalRuleIcon className="w-10 h-8" />
          </div>
        </div>
        <div className="w-1/2">
          <Image
            className="h-auto max-w-full"
            src={BackgroundSource}
            alt="Background Scrawled"
            width={400}
          />
        </div>
      </div>
    </>
  );
}
