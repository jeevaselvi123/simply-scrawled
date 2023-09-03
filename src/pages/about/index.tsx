import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import ConnectWithoutContactOutlinedIcon from "@mui/icons-material/ConnectWithoutContactOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import GrassOutlinedIcon from "@mui/icons-material/GrassOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedeemOutlinedIcon from "@mui/icons-material/RedeemOutlined";
import { Card, Divider } from "@mui/material";

export default function about() {
  return (
    <div className="w-full justify-center">
      <Card className="py-8 px-12 m-5">
        <div className="font-serif text-lg text-center break-words font-normal ">
          Simply scrawled was created as an endeavour to showcase my passion for
          writing, lettering and my love for giving hand-made, personalized
          gifts. Simply scrawled was created as an endeavour to showcase my
          passion for writing, lettering and my love for giving hand-made,
          personalized gifts. Simply scrawled was created as an endeavour to
          showcase my passion for writing, lettering and my love for giving
          hand-made, personalized gifts.
        </div>
        <div className=" flex">
          <div className="flex">
            <div className="flex-col p-6 w-full justify-center items-center flex-grow">
              <Card className="p-4 shadow-md h-30" style={{ height: "100%" }}>
                <div className="flex flex-row text-xl">
                  <FavoriteBorderOutlinedIcon className="mr-2" />
                  <h3 className="font-semibold"> Hand-lettered with love</h3>
                </div>
                <Divider className="p-2" />
                <p className="py-3">
                  All items are unique, hand-lettered and cannot be exactly
                  replicated. Items shown below are things I&apos;ve done in the
                  past, and are just to give you some ideas. I hope you get
                  inspired to come up with the perfect customized gift for your
                  friends, family or even yourself!
                </p>
              </Card>
            </div>
            <div className="flex-col p-6 w-full justify-center items-center flex-grow">
              <Card className="p-4 shadow-md h-30" style={{ height: "100%" }}>
                <div className="flex flex-row text-xl">
                  <RedeemOutlinedIcon className="mr-2" />
                  <h3 className="font-semibold">Personalized Luxury Gifting</h3>
                </div>
                <Divider className="p-2" />
                <p className="py-3">
                  Turn any gift into something extra special. Add a name, a
                  custom-quote or anything else you want!
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <ul className="list-disc list-inside break-words">
                    <li>Jeweller Boxes & Makeup</li>
                    <li>Pouches</li>
                    <li>Phone Cases</li>
                  </ul>
                  <ul className="list-disc list-inside break-words">
                    <li>T-Shirts</li>
                    <li>Champagne glasses</li>
                    <li>Quirky Fridge Magnets, Coffee Mugs</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex">
            <div className="flex-col p-6 w-full justify-center items-center flex-grow">
              <Card className="p-4 shadow-md h-30" style={{ height: "100%" }}>
                <div className="flex flex-row text-xl">
                  <ConnectWithoutContactOutlinedIcon className="mr-2" />
                  <h3 className="font-semibold">Contact</h3>
                </div>
                <Divider className="p-2" />
                <p className="py-3">
                  To place an order, please email me at mail id given below and
                  I&apos;ll get back to you as soon as I can. Head to my
                  instagram page below to see products, fun practice videos,
                  tutorials, bloopers and more!
                </p>
                <div className="flex justify-between mb-2">
                  <div className="flex flex-row">
                    <AlternateEmailOutlinedIcon />
                    <p className="ml-2 font-semibold">
                      simplyscrawled.2021@gmail.com
                    </p>
                  </div>

                  <div className="flex flex-row">
                    <InstagramIcon />
                    <p className="ml-2 font-semibold">
                      <a href="https://www.instagram.com/simplyscrawled/">
                        simplyscrawled
                      </a>
                    </p>
                  </div>
                </div>
              </Card>
            </div>
            <div className="flex-col p-6 w-full justify-center items-center flex-grow">
              <Card className="p-4 shadow-md h-30" style={{ height: "100%" }}>
                <div className="flex flex-row text-xl">
                  <GrassOutlinedIcon className="mr-2" />
                  <h3 className="font-semibold">Custom Home Decor</h3>
                </div>
                <Divider className="p-2" />
                <p className="py-3">
                  Home is where the heart is! Spruce up your space and flaunt
                  your decor with custom pieces that match your style. These
                  also make perfect gifts for housewarming celebrations
                </p>
                <ul className=" list-disc list-inside break-words">
                  <li> Wooden and Acrylic Signs</li>
                  <li>Name Plates</li>
                  <li> Canvas Pieces and Posters</li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
