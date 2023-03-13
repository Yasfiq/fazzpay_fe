"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  LabelList,
  Tooltip,
  CartesianGrid,
} from "recharts";

const Chart = () => {
  let [datass, setDatass] = useState([
    { day: "Sat", income: 0 },
    { day: "Sun", income: 0 },
    { day: "Mon", income: 0 },
    { day: "Tue", income: 0 },
    { day: "Wed", income: 0 },
    { day: "Thu", income: 0 },
    { day: "Fri", income: 0 },
  ]);
  const data = [
    { day: "Sat", income: datass[0].income },
    { day: "Sun", income: datass[1].income },
    { day: "Mon", income: datass[2].income },
    { day: "Tue", income: datass[3].income },
    { day: "Wed", income: datass[4].income },
    { day: "Thu", income: datass[5].income },
    { day: "Fri", income: datass[6].income },
  ];

  useEffect(() => {
    axios
      .get(
        `https://funpayz.herokuapp.com/api/v1/transaction/${
          JSON.parse(localStorage.getItem("@userLogin")).id
        }`
      )
      .then((res) => {
        const datas = res.data.Data;
        datas.map((item) => {
          if (item.type === "income") {
            const text = item.time.split(",");
            switch (text[0]) {
              case "Saturday":
                datass[0].income += parseInt(item.nominal);
                break;
              case "Sunday":
                datass[1].income += parseInt(item.nominal);
                break;
              case "Monday":
                datass[2].income += parseInt(item.nominal);
                break;
              case "Tuesday":
                datass[3].income += parseInt(item.nominal);
                break;
              case "Wednesday":
                datass[4].income += parseInt(item.nominal);
                break;
              case "Thursday":
                datass[5].income += parseInt(item.nominal);
                break;
              case "Friday":
                datass[6].income += parseInt(item.nominal);
                break;
            }
          }
        });
      });
  }, []);

  return (
    <>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="day" stroke="#8884d8" />
        <Tooltip />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Bar dataKey="income" fill="#6379F4" barSize={20}>
          <LabelList dataKey="income" position="top" />
        </Bar>
      </BarChart>
    </>
  );
};

export default Chart;
