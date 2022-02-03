import "../App.css";
import { SiTwitter, SiDiscord } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="text-center text-white">
      <div className="flex flex-column justify-center">
        <a href="https://twitter.com/NNFoxesclub" className="w-40 h-16">
          {/* <img
            src="../img/twitter.png"
            alt="twitter"
          /> */}
          <SiTwitter className="h-12 w-12"/>
        </a>
        <a href="https://discord.gg/x3SFme3kH5" className="w-10 h-16">
          {/* <img
            src="../img/discord.png"
            alt="discord"
          /> */}
          
          <SiDiscord className="h-12 w-12"/>
        </a>
      </div>
      <div className="text-center pb-7 pt-2 font-roboto">
        © Copyright 2022 NoName FoxesClub NFT Collection
      </div>
    </footer>
  );
}
