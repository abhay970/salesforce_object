// import "./InstanceTable.css";
import { Link } from "react-router-dom";
const InstanceTable = ({ columns, data, redirect }) => {
  return (
    <div className="table-box">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>
              <input type="checkbox" />
            </th>
            {columns.map((ele) => (
              <th key={ele.label}>{ele.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((obj, index) => (
            <tr key={obj.id}>
              <td>{index + 1}</td>
              <td>
                <input type="checkbox" />
              </td>
              {columns.map((ele) => (
                <td key={ele.fieldName}>
                  {ele.fieldName.includes("name") ? (
                    <Link to={`/${redirect}/${obj[ele.fieldName]}`}>
                      {obj[ele.fieldName]}
                    </Link>
                  ) : (
                    obj[ele.fieldName]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InstanceTable;