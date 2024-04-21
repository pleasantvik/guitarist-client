/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { ITableProps } from "./interface";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { statusColor } from "@/utils/statusColor";
import AppTabEmptyState from "./EmptyTableState";

const CustomTable = ({
  handleChangePage,
  page,
  results,
  isLoading,
  isError,
  tableHeads,
  moreMenu,
  onClick,
  handleMenu,
  emptyIconMessage,
  emptyIconTitle,
  EmptyIcon,
  rowsPerPage,
  handleChangeRowsPerPage,
  total,
  showPagination,
}: ITableProps) => {
  const [currentPage] = useState(1);
  //   const handlePageChange = (page: number) => {
  //     setCurrentPage(page);
  //   };
  //   const dataLength = results?.length as number;
  const isSuccessfullyLoaded = !isLoading && !isError;
  const dataNotEmpty = !!results && results.length > 0;
  const isDataUndefined = results?.length === undefined;

  const itemsPerPage = 20; // Number of items to display per page

  // Calculate the indexes for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEntries = results?.slice(startIndex, endIndex);

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <div>
        <TableContainer>
          <Table
            stickyHeader
            arial-aria-label="stick table"
            sx={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TableHead>
              <TableRow>
                {tableHeads?.map((column) => (
                  <TableCell
                    // style={{ minWidth: column.minWidth }}
                    key={column.label}
                  >
                    {column.label}
                  </TableCell>
                ))}

                {moreMenu && (
                  <TableCell
                    sx={{
                      background: "#E4E8E2",
                      borderBottom: "border: 2px solid #E7E7ED",
                    }}
                  />
                )}
              </TableRow>
            </TableHead>
            <TableBody>
              {currentEntries?.map((rowData, idx) => {
                return (
                  <TableRow key={idx} onClick={() => onClick?.(rowData)}>
                    {tableHeads?.map(({ accessor }) => {
                      const dataToshow = rowData[accessor] || "---";
                      return (
                        <TableCell
                          key={accessor}
                          // className="py-5 text-lg xl:w-[400px]"
                          // classNameTableBodyCell={classNameTableBodyCell}
                        >
                          <span
                            className={statusColor(dataToshow)}
                            onClick={() => onClick?.(rowData)}
                          >
                            {dataToshow}
                          </span>
                        </TableCell>
                      );
                    })}
                    {moreMenu && (
                      <TableCell
                        sx={{
                          "&.MuiTableCell-root": {
                            padding: 0,
                          },
                        }}
                      >
                        <IconButton
                          onClick={(event: any) => handleMenu?.(event, rowData)}
                        >
                          {/* <MoreVert /> */}
                          {/* <img src={Imgs.menuDot} alt="menu dot" /> */}
                          ...
                        </IconButton>
                      </TableCell>
                    )}
                  </TableRow>
                );
              })}
            </TableBody>
            {isLoading && (
              <TableRow sx={{ "& td": { border: 0 } }}>
                <TableCell align="center" colSpan={7} rowSpan={7}>
                  {/* <ListShimmer length={itemsPerPage} /> */}
                  Loading...
                </TableCell>
              </TableRow>
            )}
            {!isDataUndefined && !dataNotEmpty && isSuccessfullyLoaded && (
              <AppTabEmptyState
                title={emptyIconTitle}
                message={emptyIconMessage}
                Illustration={EmptyIcon}
              />
            )}
          </Table>
        </TableContainer>

        {showPagination && (
          <div className=" flex items-end justify-center">
            <TablePagination
              rowsPerPageOptions={[10, 25, 100]}
              component="div"
              count={total || 0}
              rowsPerPage={rowsPerPage || 10}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        )}
      </div>
    </Paper>
  );
};

export default CustomTable;
