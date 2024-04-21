import { queryParamsHelper } from "@/config/query-params";
import { useBySoldQuery } from "@/services/product.service";
import { showToast } from "@/utils/toastConfig";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import FieldInput from "@/shared/FieldInput";
import FieldLabel from "@/shared/FieldLabel";
import TableHeader from "@/shared/TableHeader";
import TableRow from "@/shared/TableRow";
import CustomButton from "@/shared/CustomButton";

export default function Product() {
  const getProductParams = queryParamsHelper({
    sortBy: "price",
    order: "asc",
  });
  const { data, isSuccess, isLoading } = useBySoldQuery(getProductParams);
  const products = data?.products;

  useEffect(() => {
    if (isSuccess) {
      showToast({
        msg: "Product Loaded successfully",
        type: "SUCCESS",
      });
    }
  }, [isSuccess]);

  isLoading && <CircularProgress />;

  return (
    <div className="relative flex flex-col shadow-lg mb-4 m-1">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full  max-w-full">
          <FieldLabel
            htmlFor="Products"
            className="font-semibold text-lg p-3 m-4 mt-8"
          >
            Products
          </FieldLabel>
        </div>
        <div>
          <FieldInput
            type="text"
            placeholder="Enter Product Model"
            name="search"
            className=" m-6 mb-2 w-full border-solid border-2 rounded-lg px-2 py-2 text-lg transition-all duration-500 placeholder:text-stone-700 focus:outline-none  sm:w-64 sm:focus:w-72"
          />
          <CustomButton
            className="uppercase ml-6 py-3 bg-slate-600 text-white border-slate-400"
            variant="outline"
          >
            reset search
          </CustomButton>
        </div>
      </div>

      <div className="block bg-transparent p-4 m-4 w-full overflow-x-auto">
        <table className="w-full table-fixed">
          <TableHeader />
          {products?.map((product: [], i: number) => (
            <TableRow key={i} product={product} />
          ))}
        </table>
      </div>
    </div>
  );
}
