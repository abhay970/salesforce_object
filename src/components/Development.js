// import "./Development.css";
import { useEffect, useState } from "react";
// import LineChart from "./LineChart";
// import TestModal from "./TestModal";
import InstanceTable from "./InstanceTable";
const Development = () => {
  const [columns, setColumns] = useState([
    
  ]);
  const [data, setData] = useState([
     
  ]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000/getall/account", {
        method: "GET",
      });
      const resData = await response.json();
      const newArr = [];
      resData.forEach((ele) => {
        const obj = ele;
        const newObj = {};
        for (const key in obj) {
          if (typeof obj[key] === "object") {
            newObj[key] = obj[key].name;
          } else {
            newObj[key] = obj[key];
          }
        }
        newArr.push(newObj);
      });
      setData(newArr);
      const column = Object.keys(resData[0]).map((key) => {
        const newArr = key
          .split("_")
          .map((ele) => ele[0].toUpperCase() + ele.slice(1));
        return {
          label: newArr.join(" "),
          fieldName: key,
        };
      });
      // setColumns(column);
      const filteredColumns = column.filter(
        (_, index) => index > 0 && index < 6
      );
      setColumns(filteredColumns);
    };
    fetchData();
    //testing code
  }, []);
  return (
    <section className="Development">
      <InstanceTable columns={columns} data={data} />
      {/* <TestModal /> */}
      {/* <LineChart /> */}
    </section>
  );
};

export default Development;