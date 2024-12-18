const GenderCheckbox = ({ onCheckBoxChange, selectedGender }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="form-control w-fit">
        <label className="label cursor-pointer">
          <span className="label-text mr-6 text-white">Male</span>
          <input type="checkbox" className="checkbox" checked={selectedGender === "Male"} onChange={() => onCheckBoxChange("Male")} />
        </label>
      </div>
      <div className="form-control w-fit">
        <label className="label cursor-pointer">
          <span className="label-text mr-2 text-white">Female</span>
          <input type="checkbox" className="checkbox" checked={selectedGender === "Female"} onChange={() => onCheckBoxChange("Female")} />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
