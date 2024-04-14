import PicUpload from "@/shared/PicUpload";
import { useAppSelector } from "@/store";
import { useFormik } from "formik";

const Dashboard = () => {
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
    <div className="bg-primary-faint flex flex-col gap-2">
      <span>{currentUser?.data?.user?.firstname}</span>
      <span>{currentUser?.data?.user?.lastname}</span>
      <PicUpload picValue={(pic) => handlePicValue(pic)} />
      <form onSubmit={addProduct.handleSubmit}>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Dashboard;
