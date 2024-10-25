import WithAxios from "./WithAxios";
import WithTenstack from "./WithTenstack";

export default function GetData() {
  return (
    <div>
      <WithAxios />

      <WithTenstack />
    </div>
  );
}
