import "../App.css";

export default function Footer() {
  return (
    <footer className="text-center text-white">
      <div className="flex flex-column justify-center">
        <a href="https://twitter.com/NNFoxesclub" className="w-40 h-16">
          <img
            src="../img/twitter.png"
            alt="twitter"
          />
        </a>
        <a href="https://discord.gg/x3SFme3kH5" className="w-10 h-16">
          <img
            src="../img/discord.png"
            alt="discord"
          />
        </a>
      </div>
      <div className="text-center pb-10 pt-2">
        © Copyright 2022 NoName FoxesClub NFT Collection
      </div>
    </footer>
  );
}
