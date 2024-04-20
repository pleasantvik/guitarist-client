// import { IBySold } from "@/interfaces/product.model";

const TableRow = ({ product }: any) => {
  const { model, available, createdAt } = product;
  return (
    <tbody>
      <tr>
        <td>{createdAt}</td>
        <td>{model}</td>
        <td>{available}</td>
        {/* <div className="grid grid-cols-3  gap-20 items-center uppercase tracking-normal font-semibold py-6 px-10 border-b-2 border-r">
          <div></div>
          <div></div>
          <div></div>
        </div> */}
        {/* <div>
        <CustomButton className="text-red-900" variant="contained">
        Remove
        </CustomButton>
        <CustomButton className="text-cyan-800" variant="contained">
        Edit
        </CustomButton>
      </div> */}
      </tr>
    </tbody>
  );
};

// interface IProductProp {
//   product: IBySold;
// }

export default TableRow;
