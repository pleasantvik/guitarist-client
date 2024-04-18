import FieldInput from "@/shared/FieldInput";
import FieldLabel from "@/shared/FieldLabel";
import TableHeader from "@/shared/TableHeader";
import TableRow from "@/shared/TableRow";

export default function Product() {
  return (
    <div className="m-6">
      <div>
        <FieldLabel htmlFor="product" className="font-bold p-2 m-6 text-lg">
          Products
        </FieldLabel>
      </div>

      <FieldInput
        type="text"
        placeholder="Enter your search keywords"
        name="search"
        className="w-full border-solid border-2 p-2 m-6"
      />

      <div>
        <table className="border-solid border-2 text-base rounded-lg p-2 m-6">
          <TableHeader />
          <TableRow />
        </table>
      </div>
    </div>
  );
}
