import {
  BarChart,
  Bar,
  XAxis,
  LabelList,
  Tooltip,
  CartesianGrid,
} from "recharts";

const Chart = () => {
  const data = [
    { day: "Sat", income: 65000 },
    { day: "Sun", income: 30000 },
    { day: "Mon", income: 40000 },
    { day: "Tue", income: 50000 },
    { day: "Wed", income: 35000 },
    { day: "Thu", income: 55000 },
    { day: "Fri", income: 38000 },
  ];
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
