import MessageContainer from "../../components/Messages/MessageContainer";
import Sidebar from "../../components/Sidebar/Sidebar";

const Home = () => {
  return (// h-[450px]
    <div className="flex w-full md:w-auto h-full md:h-[550px] rounded-lg overflow-hidden px-4 py-6 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;
