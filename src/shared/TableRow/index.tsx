// import CustomButton from "../CustomButton";

const TableRow = () => {
  return (
    <div className="flex flex-row">
      <div className="grid grid-cols-3  gap-20 items-center uppercase tracking-normal font-semibold py-6 px-10 border-b-2 border-r">
        <div> X days ago</div>
        <div>Banshee 6 extreme</div>
        <div>16</div>
      </div>
      {/* <div>
        <CustomButton className="text-red-900" variant="contained">
          Remove
        </CustomButton>
        <CustomButton className="text-cyan-800" variant="contained">
          Edit
        </CustomButton>
      </div> */}
    </div>
  );
};

export default TableRow;
