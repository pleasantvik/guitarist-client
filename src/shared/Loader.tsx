import { CircularProgress } from "@mui/material";

function Loader() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <CircularProgress />
    </div>
  );
}

export default Loader;
