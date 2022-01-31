import "../App.css";

export default function About() {
  return (
    <div className="flex w-full sm:h-screen h-full px-10" id="about">
      <div className="text-white rounded-l-lg px-8 pb-10">        
        <h2 className="sm:text-7xl text-5xl font-pirata text-center mb-10">ABOUT</h2>
        <p className="flex justify-center mt-2 font-germania sm:text-2xl text-lg w-3/4 text-center mx-auto ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel
          dolor sed tortor viverra convallis. Mauris blandit sed nibh at
          viverra. Integer eros felis, ultricies nec ex ac, ultricies mollis
          neque. Nunc eu ex nec lacus mattis sagittis eu at ex. Suspendisse a
          arcu vitae arcu cursus placerat non vel justo. Praesent ut mauris sit
          amet neque aliquet ultricies. Maecenas rutrum diam sit amet augue
          mattis rutrum. Integer lobortis venenatis est nec pulvinar. Nam
          gravida magna pharetra risus lacinia dapibus. Praesent nec turpis
          euismod, gravida mi ut, consequat enim.
        </p>
      </div>
    </div>
  );
}
