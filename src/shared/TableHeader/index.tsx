const TableHeader = () => {
  return (
    <div className="grid grid-cols-3  gap-20 items-center uppercase tracking-normal font-semibold py-6 px-10 border-b-2 border-r">
      <div>created</div>
      <div>model</div>
      <div>available</div>
    </div>
  );
};

export default TableHeader;

// import Box from "@mui/material/Box";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";

// const columns: GridColDef<(typeof rows)[number]>[] = [
//   { field: "id", headerName: "ID" },
//   {
//     field: "firstName",
//     headerName: "First name",
//     editable: true,
//   },
//   {
//     field: "lastName",
//     headerName: "Last name",
//     editable: true,
//   },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     editable: true,
//   },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// export default function DataGridDemo() {
//   return (
//     <Box className="h-4 w-full">
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 2,
//             },
//           },
//         }}
//         pageSizeOptions={[2]}
//         checkboxSelection
//         disableRowSelectionOnClick
//       />
//     </Box>
//   );
// }
