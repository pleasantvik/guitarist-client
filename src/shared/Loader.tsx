import { CircularProgress } from "@mui/material";

function Loader() {
  return (
    <div className="flex justify-center items-center w-full ">
      <CircularProgress />
    </div>
  );
}

export default Loader;
