import { EllipsisVertical } from "lucide-react";

interface Props {}

function DataTable({}: Props) {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>
              <div className="font-bold">Hart Hagerty</div>
            </td>
            <td>hart@gmail.com</td>
            <td>*****</td>
            <td className="font-bold">USER</td>
            <th>
              <button className="btn btn-ghost p-2.5 rounded-full">
                <EllipsisVertical size={18} />
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
