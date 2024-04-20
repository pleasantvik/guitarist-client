// import { IBySold } from "@/interfaces/product.model";
import { formatCurrency } from "@/utils/formatCurrency";

import CustomButton from "../CustomButton";

const TableRow = ({ product }: any) => {
  const tdCss = "text-base py-3 border-r px-2";

  const { model, available, createdAt, frets, price } = product;
  return (
    <tbody>
      <tr className="border border-solid border-l-0 border-r-0">
        <td className={tdCss}>{createdAt}</td>
        <td className={tdCss}>{model}</td>
        <td className={tdCss}>{available}</td>
        <td className={tdCss}>{frets}</td>
        <td className={tdCss}>{formatCurrency(price)}</td>

        <td className="flex flex-row border-b-0 border-t-0">
          <CustomButton variant="contained">Remove</CustomButton>
          <CustomButton className="min-w-44" variant="contained">
            Edit
          </CustomButton>
        </td>
        <td></td>
      </tr>
    </tbody>
  );
};

// interface IProductProp {
//   product: IBySold;
// }

export default TableRow;
