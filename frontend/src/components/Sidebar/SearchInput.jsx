const SearchInput = () => {
  return (
    <div className="flex justify-center items-center">
      <input type="text" placeholder="Search" className="input input-bordered w-full max-w-sm mr-4 input-sm md:input-md" />

      <button className="btn btn-square border border-primary btn-sm md:btn-md">
      <i className='bx bx-search text-md md:text-lg'></i></button>
    </div>
  )
};

export default SearchInput;