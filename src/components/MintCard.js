import "../App.css";


export default function MintCard() {
    return (
        <div className="sm:w-full w-full sm:h-full lg:mx-auto py-4 px-8 rounded-3xl" id="mint">
            {/* <div class="w-16 overflow-hidden inline-block mb-6 ">
          <div class=" h-11 w-11 bg-zinc-800 rotate-45 transform origin-bottom-left absolute right-0 "></div>
        </div> */}
            <h2 className="text-white lg:text-7xl text-5xl font-pirata text-center pt-10">
                MINT
            </h2>
            <div className="flex flex-row">
                <img
                    className="xl:flex hidden w-96 h-96 ml-20 top-20 md:my-28 my-60 rounded-lg "
                    src="../img/final2.jpeg"
                    alt="fox"
                />
                <div className="relative flex flex-col lg:ml-40 ml-0 w-full h-screen top-28">
                    <div className="text-white sm:text-4xl text-2xl ml-10 font-germania text-start flex flex-row">
                        Date:
                        <div className="sm:relative flex flex-col w-full px-10 h-full text-center pt-1 sm:text-2xl text-lg font-germania">
                            ed tortor viverra convallis. Mauris blandit sed nibh at
                            viverra. Integer eros felis, ultricies nec ex ac, ultricies
                            mollis neque. Nunc eu ex nec lacus mattis sagittis eu at ex.
                            Suspendisse a arcu vitae
                        </div>
                    </div>
                    <div className="text-white sm:text-4xl text-2xl ml-10 mt-20 font-germania text-start flex flex-row">
                        Price:
                        <div className="w-full px-10 h-full text-center pt-1 sm:text-2xl text-lg font-germania">
                            ed tortor viverra convallis. Mauris blandit sed nibh at
                            viverra. Integer eros felis, ultricies nec ex ac, ultricies
                            mollis neque. Nunc eu ex nec lacus mattis sagittis eu at ex.
                            Suspendisse a arcu vitae
                        </div>
                    </div>
                    <div className="text-white sm:text-4xl text-2xl ml-10 mt-20 font-germania text-start flex flex-row">
                        Where:
                        <div className="w-full px-10 h-screen text-center pt-1 sm:text-2xl text-lg font-germania">
                            ed tortor viverra convallis. Mauris blandit sed nibh at
                            viverra. Integer eros felis, ultricies nec ex ac, ultricies
                            mollis neque. Nunc eu ex nec lacus mattis sagittis eu at ex.
                            Suspendisse a arcu vitae
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
