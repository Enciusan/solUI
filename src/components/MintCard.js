import "../App.css";


export default function MintCard() {
    return (
        <div className="sm:w-full w-full sm:h-full lg:mx-auto  px-8 rounded-3xl" id="mint">
            <h2 className="text-white lg:text-7xl text-5xl font-pirata text-center pt-10">
                MINT
            </h2>
            <div className="grid sm:grid-cols-2 grid-cols-1">
                <img
                    className="xl:flex hidden w-6/12 h-6/12 ml-20 md:my-28 my-60 rounded-lg "
                    src="../img/final2.jpeg"
                    alt="fox"
                />
                <div className="flex flex-col w-full h-full justify-center mt-14">
                    <div className="flex flex-row text-white sm:text-4xl text-2xl ml-10 font-germania text-start">
                        Date:
                        <div className="w-full px-10 h-full text-start pt-1 sm:text-2xl text-lg font-germania">
                            The mint date it will gonna be announce stay tunned.
                        </div>
                    </div>
                    <div className="flex flex-row text-white sm:text-4xl text-2xl ml-10 mt-20 font-germania text-start">
                        Price:
                        <div className="w-full px-10 h-full text-start pt-1 sm:text-2xl text-lg font-germania">
                            Price will be 0.5 for Whitelist and 0.75 for public sale.
                        </div>
                    </div>
                    <div className="flex flex-row text-white sm:text-4xl text-2xl ml-10 mt-20 font-germania text-start">
                        Where:
                        <div className="w-full px-10 h-full text-start pt-1 sm:text-2xl text-lg font-germania">
                            On mint day here it will appear a button for redirecting to the minting place.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
