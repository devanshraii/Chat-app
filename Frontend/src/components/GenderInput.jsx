const GenderInput = () => {
  return (
    <div className="flex gap-4">
      <div className="form-control">
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Male</span>
          <input
            type="radio"
            name="gender"
            className="border-slate-900 radio"
          />
        </label>
      </div>
      <div>
        <label className="label gap-2 cursor-pointer">
          <span className="label-text">Female</span>
          <input
            type="radio"
            name="gender"
            className="border-slate-900 radio"
          />
        </label>
      </div>
    </div>
  );
};

export default GenderInput;
