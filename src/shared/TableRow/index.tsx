// import { IBySold } from "@/interfaces/product.model";

const TableRow = ({ product }: any) => {
  const { model, available, createdAt } = product;
  return (
    <div className="flex flex-row">
      <div className="grid grid-cols-3  gap-20 items-center uppercase tracking-normal font-semibold py-6 px-10 border-b-2 border-r">
        <div>{createdAt}</div>
        <div>{model}</div>
        <div>{available}</div>
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

// interface IProductProp {
//   product: IBySold;
// }

export default TableRow;
