import { Player } from "@lottiefiles/react-lottie-player";
import chatting from "../../../assets/chatting.json";
import { Button } from "@material-tailwind/react";

const Banner = () => {
  return (
    <div
      className="bg-blend-overlay"
      style={{
        backgroundImage: "linear-gradient(to top, #a8edea 0%, #fed6e3 100%)",
      }}
    >
      <div>
        <div className="relative w-full h-full flex flex-col justify-center items-center overflow-hidden">
          <div className="pt-6 sm:pt-12 lg:pt-24 w-full flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
              <div className="p-5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <h1 className="py-5 text-2xl sm:text-5xl font-bold tracking-wide" style={{ backgroundImage: "linear-gradient(to right, #BC5B80, #E0636B)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Talk, laugh, and have fun!
                </h1>
                <h3 className="pb-2 text-sm md:text-lg font-semibold tracking-wide">
                  Fast, easy & unlimited messages, conference call services.
                  Discussing your moment and expressing your Thoughts.
                </h3>
                <p className="text-base tracking-wide">
                  Connect effortlessly with our user-friendly chat app. Stay in
                  touch with friends and family through real-time messaging,
                  emojis, and multimedia sharing. Download now to start
                  chatting!
                </p>

                <div className="mt-6 flex flex-col sm:flex-row items-center">
                  <a href="signIn"
                  >
                    <Button className="text-black font-extrabold border-2 border-[#917FB3] hover:bg-[#F8E8EE]" variant="outlined">Get Standard</Button>
                  </a>
                </div>
              </div>
            </div>

            <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden">
              <Player
                autoplay
                loop
                src={chatting}
                style={{ height: "300px", width: "300px" }}
                className="w-2/3 lg:w-full rounded"
              ></Player>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
