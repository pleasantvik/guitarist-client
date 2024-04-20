import { queryParamsHelper } from "@/config/query-params";
import { useBySoldQuery } from "@/services/product.service";
import { showToast } from "@/utils/toastConfig";
import { useEffect } from "react";

import FieldInput from "@/shared/FieldInput";
import FieldLabel from "@/shared/FieldLabel";
import TableHeader from "@/shared/TableHeader";
import TableRow from "@/shared/TableRow";
import { CircularProgress } from "@mui/material";

export default function Product() {
  const getProductParams = queryParamsHelper({
    sortBy: "price",
    order: "asc",
  });
  const { data, isError, isLoading } = useBySoldQuery(getProductParams);
  const products = data?.products;

  useEffect(() => {
    if (isError) {
      showToast({
        msg: "Oops, something went wrong",
        type: "ERROR",
      });
    } else {
      showToast({
        msg: "Product Loaded successfully",
        type: "SUCCESS",
      });
    }
  }, [isError]);

  isLoading && <CircularProgress />;

  return (
    <div className="m-6">
      <div>
        <FieldLabel htmlFor="products" className="font-bold p-2 m-6 text-lg">
          Products
        </FieldLabel>
      </div>

      <FieldInput
        type="text"
        placeholder="Enter Product Model"
        name="search"
        className="p-2 m-6 w-full border-solid border-2 rounded-lg px-4 py-2 text-md transition-all duration-500 placeholder:text-stone-700 focus:outline-none  sm:w-64 sm:focus:w-72"
      />

      <div>
        <table className="table-auto">
          <TableHeader />
          {products?.map((product, i) => (
            <TableRow key={i} product={product} />
          ))}
        </table>
      </div>
    </div>
  );
}
