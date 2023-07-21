import { Button } from "antd";
import SearchAdmin from "../SearchBox/SearchAdmin";
import TableMovie from "./TableMovie";

const FormMovie = () => {
  const handleCreate = () => {};
  return (
    <div>
      <div>
        <Button onClick={handleCreate}>New Movie</Button>
        <SearchAdmin />
      </div>
      <TableMovie />
    </div>
  );
};

export default FormMovie;
