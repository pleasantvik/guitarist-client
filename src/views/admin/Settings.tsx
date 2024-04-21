/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomTable from "@/shared/Table/CustomTable";

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

const Settings = () => {
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
  return (
    <div>
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
    </div>
  );
};

export default Settings;
