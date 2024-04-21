/* eslint-disable @typescript-eslint/no-explicit-any */
import PicUpload from "@/shared/PicUpload";
import CustomTable from "@/shared/Table/CustomTable";
import { useAppSelector } from "@/store";
import { useFormik } from "formik";

const Category_Table_Head = [
  {
    accessor: "category_name",
    label: "Category Name",
  },
  {
    accessor: "products",
    label: "Products",
  },
  {
    accessor: "status",
    label: "Status",
  },
  {
    accessor: "action",
    label: "Action",
  },
];

const Category_Mock_Data = [
  {
    category_name: "Rice",
    products: "45788",
  },
  {
    category_name: "Vegetable",
    products: "488",
  },
  {
    category_name: "Grains",
    products: "28",
  },
  {
    category_name: "Fruits",
    products: "488",
  },
];

const Dashboard = () => {
  const createData = ({ category_name, products }: any) => {
    return {
      category_name,
      products,

      action: <p className="flex items-center gap-2 ">Edit</p>,
    };
  };

  const dataResult = Category_Mock_Data.map(({ category_name, products }) =>
    createData({
      category_name,
      products,
    })
  );
  const addProduct = useFormik({
    initialValues: {
      images: [] as string[],
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const currentUser = useAppSelector((state) => state.user);
  const handlePicValue = (pic: string) => {
    const picArray = addProduct.values.images;

    picArray.push(pic);
    addProduct.setFieldValue("images", picArray);
  };

  console.log(addProduct.values);
  return (
    <>
      <div className="bg-primary-faint flex flex-col gap-2">
        <span>{currentUser?.data?.user?.firstname}</span>
        <span>{currentUser?.data?.user?.lastname}</span>
        <PicUpload picValue={(pic) => handlePicValue(pic)} />
        <form onSubmit={addProduct.handleSubmit}>
          <button>Submit</button>
        </form>
      </div>

      <div className="mt-4 gap-36">
        <CustomTable
          results={dataResult}
          tableHeads={Category_Table_Head}
          handleChangePage={() => {}}
          isLoading={false}
          page={1}
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default Dashboard;
