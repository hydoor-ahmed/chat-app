const GenderCheckbox = () => {
  return (
    <div>
      <select className="select select-bordered w-full max-w-sm mt-4">
        <option disabled selected>
          Select Your Gender
        </option>
        <option>Male</option>
        <option>Female</option>
      </select>
    </div>
  );
};

export default GenderCheckbox;
