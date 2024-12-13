import { useEffect, useState } from "react";
import axios from "axios";

const Conversation = ({ name, img }) => {
  const [emoji, setEmoji] = useState();
  const [randomNum, setRandomNum] = useState(0);
  const [singleEmoji, setSingleEmoji] = useState();
  const [loaded, setLoaded] = useState(false);

  const getEmojis = async () => {
    await axios
      .get("https://api.api-ninjas.com/v1/emoji?group=activities", {
        headers: { "X-Api-Key": "I6SsRT/4fGTiYhRJuKQxbg==a04ryQPvb3h0Bbyd" },
        timeout: 4000,
      })
      .then((res) => {
        if (res.status == 200) setLoaded(true);
        setEmoji(res.data);
      })
      .catch((err) => console.error(err));
    if (loaded) {
      setRandomNum(Math.floor(Math.random() * emoji.length));
      return setSingleEmoji(emoji[randomNum].image);
    }
  };

  // useEffect(() => {
  //   getEmojis();
  // }, []);
  return (
    <div>
      <div className="flex justify-between items-center transition-all duration-300 cursor-pointer border border-transparent hover:border hover:border-primary from-purple-700/40 to-cyan-700/20 hover:bg-gradient-to-tr px-2 py-1.5 rounded-lg">
        <div className="flex items-center">
          <div className="avatar online mr-4">
            <div className="w-10 md:w-14 rounded-full">
              <img src={img} />
            </div>
          </div>
          <h1 className="text-white text-sm md:text-base font-bold">{name}</h1>
        </div>
        {/* {singleEmoji !== undefined ? (
          <img className="w-6" src={singleEmoji} alt="Emojis :)" />
        ) : (
          ""
        )} */}
      </div>
      <span className="divider w-[80%] mx-auto my-1"></span>
    </div>
  );
};

export default Conversation;
