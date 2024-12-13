const MessageInput = () => {
  return (
    <div className="mt-1">
      {/* <input
        type="text"
        placeholder="Send a message"
        className="input input-bordered input-sm placeholder:text-[14px] md:placeholder:text-base md:input-md w-[90%] mx-auto"
      /> */}
      <label className="input input-bordered flex items-center gap-2">
        <input dir="auto" type="text" className="grow input" placeholder="Search" />
        <button className="cursor-pointer btn btn-neutral px-2 btn-sm"><i className='bx bx-send text-xl -rotate-[30deg]'></i></button>
      </label>
    </div>
  );
};

export default MessageInput;
