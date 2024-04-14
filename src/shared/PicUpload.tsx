import { useFormik } from "formik";
import { useState } from "react";
import { picSchema } from "./validation";

import { useUploadImgMutation } from "@/services/product.service";

const PicUpload = ({ picValue }) => {
  const [loading, setLoading] = useState(false);
  const [uploadImg] = useUploadImgMutation();

  const formikImg = useFormik({
    initialValues: {
      pic: "",
    },
    validationSchema: picSchema,
    onSubmit: async (values) => {
      setLoading(true);
      console.log(values);

      const formData = new FormData();

      formData.append("file", values.pic);

      try {
        // const data = await axios.post("", formData, {
        //   headers: {
        //     "Content-Type": "multipart/form",
        //     Authorization: "",
        //   },
        // });

        const data = await uploadImg(formData);
        picValue(data?.data?.pic?.url);

        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <div>
      {loading && <h1>Loading</h1>}

      <form onSubmit={formikImg.handleSubmit}>
        <input
          type="file"
          onChange={(e) => {
            formikImg.setFieldValue("pic", e.target.files![0]);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default PicUpload;
