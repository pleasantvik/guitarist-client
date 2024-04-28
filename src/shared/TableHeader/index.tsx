const TableHeader = () => {
  const thCss = "text-left text-base py-3 border-r px-2";
  return (
    <thead>
      <tr className="border border-solid border-l-0 border-r-0">
        <th className={thCss}>Created</th>
        <th className={thCss}>Model</th>
        <th className={thCss}>Available</th>
        <th className={thCss}>Frets</th>
        <th className={thCss}>Price</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
