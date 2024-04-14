import Header from "@/Layout/components/Header";
import Featured from "@/components/home/Featured";
import { queryParamsHelper } from "@/config/query-params";
import { useBySoldQuery } from "@/services/product.service";
import SlimBlock from "@/shared/SlimBlock";
import CardBlock from "@/shared/product/CardBlock";
import { showToast } from "@/utils/toastConfig";
import { useEffect } from "react";

const slimPromotion = {
  img: "/images/featured/featured_home_3.jpg",
  title: "Up to 40%  off",
  subtitle: "In second hand guitar",
  btn: "Shop Now",
  linkTo: "/shop",
};
const HomePage = () => {
  const queryBySoldParams = queryParamsHelper({
    limit: 4,
    sortBy: "price",
    order: "asc",
  });
  const queryByDateParams = queryParamsHelper({
    limit: 4,
    sortBy: "date",
    order: "asc",
  });
  //  const [queryParams, setQueryParams] = useState("");

  //  const updateQueryParams = useCallback(() => {
  //    setQueryParams(
  //      queryParamsHelper({
  //        page: term !== "" ? 1 : valuer.current_page,
  //        search: term,
  //        device_status:
  //          filterForm.getValues("device_status").length > 0
  //            ? filterForm.getValues("device_status")
  //            : undefined,
  //        type:
  //          filterForm.getValues("type").length > 0
  //            ? filterForm.getValues("type")
  //            : undefined,
  //      })
  //    );
  //  }, [term, valuer.current_page, filterForm]);

  //  useEffect(() => {
  //    updateQueryParams();
  //  }, [term, valuer.current_page, updateQueryParams]);

  //  const { data: terminals, isLoading } = useGetAllTerminalsQuery(queryParams);
  const { data: bySold, isSuccess } = useBySoldQuery(queryBySoldParams);
  const { data: byDate } = useBySoldQuery(queryByDateParams);

  useEffect(() => {
    if (isSuccess) {
      showToast({
        msg: "success",
        type: "SUCCESS",
      });
    }
  }, [isSuccess]);

  return (
    <div className="overflow-hidden">
      <Header />
      <Featured />
      {bySold && (
        <CardBlock items={bySold?.products} title="Best Selling guitar" />
      )}

      <SlimBlock items={slimPromotion} />
      {byDate && (
        <CardBlock items={byDate?.products} title="Latest Selling guitar" />
      )}
    </div>
  );
};

export default HomePage;
