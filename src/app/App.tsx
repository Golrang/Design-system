import { Table, TColumn } from "components/table";

type TTable = {
  key: string;
  name: string;
  age: number;
  email: string;
  company: string;
};

const data: TTable[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    email: "",
    company: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    email: "",
    company: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    email: "",
    company: "Sidney No. 1 Lake Park",
  },
];

const tableColumns: TColumn<TTable>[] = [
  {
    title: "نام",
    dataIndex: "email",
    key: "name",
    width: "20%",
    render: () => <span>John Brown</span>,
  },
  {
    title: "سن",
    dataIndex: "age",
    key: "age",
    width: "20%",
  },
  {
    title: "ایمیل",
    dataIndex: "email",
    key: "email",
    width: "20%",
  },
  {
    title: "شرکت",
    dataIndex: "company",
    key: "company",
    width: "20%",
  },
];

export const App = () => {
  return (
    <div>
      <Table
        direction="rtl"
        dataSource={data}
        columns={tableColumns}
        className="w-full text-sm text-right text-gray-500 dark:text-gray-400"
      />
    </div>
  );
};
