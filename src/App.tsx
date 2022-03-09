import "./App.css";
import { useMemo, useState } from "react";

import Home from "./Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import MintCard from "./components/MintCard";
import Spacing from "./components/Spacing";
import BackTopButton from "./components/BackTopButton";
import Intro from "./components/Intro";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import { Route, Routes, Link, useLocation} from "react-router-dom";
import Roadmap2 from "./components/Roadmap2";
import Mint from "./pages/mint";
import Particle from "./components/Particle";

import * as anchor from "@project-serum/anchor";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
  getMathWallet,
} from "@solana/wallet-adapter-wallets";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";

import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";
import { ThemeProvider, createTheme, Slider } from "@material-ui/core";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const candyMachineId = process.env.REACT_APP_CANDY_MACHINE_ID
  ? new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID)
  : undefined;

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 60000; // milliseconds (confirm this works for your project)



const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  // const [isVisible, setIsVisible] = useState(false);

  const location = useLocation();

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSolletWallet(),
      getMathWallet(),
    ],
    []
  );

  // const mystyle = {background-image: url('./img/bgpattern.jpg')} as React.CSSProperties;

  return (
    <div>
      
         { location.pathname == "/mintUkr" &&
          <Routes>
            <Route path="/mintUkr" element={<Mint />} />
          </Routes>}

      {location.pathname == "/" &&
       
       <div className="w-full h-full bg-gradient-to-l from-[#a6b9fe] via-[#b9b0e9] to-pink-300">
         <Particle />
        <div className="flex flex-col md:w-full md:h-full ">   
          <Navbar />
          <Spacing /> 
          <Intro /> 
          <Spacing /> 
          <BackTopButton /> 
          <Spacing /> 
          <MintCard /> 
          <Spacing /> 
          <Roadmap2 /> 
          <Spacing /> 
          <Gallery /> 
          <Spacing /> 
          <Team /> 
          <Spacing /> 
          <About /> 
          <FAQ />  
          <Spacing /> 
          <Footer />          
        </div>
      </div>}
    </div>
  );
};

export default App;


/* <ThemeProvider theme={theme}>
            <ConnectionProvider endpoint={endpoint}>
              <WalletProvider wallets={wallets} autoConnect>
                <WalletDialogProvider>
                  <Home
                    candyMachineId={candyMachineId}
                    connection={connection}
                    startDate={startDateSeed}
                    txTimeout={txTimeout}
                    rpcHost={rpcHost}
                  />
                </WalletDialogProvider>
              </WalletProvider>
            </ConnectionProvider>
          </ThemeProvider> */