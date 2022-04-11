import React, { useCallback, useEffect, useMemo, useState } from "react";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";
import Table from "./components/Table/Table";
import Widget from "./components/Widget/Widget";

const initialValues = {
  title: "",
  amount: "",
  category: "expense",
};

const getBalance = (data) => {
  let incomes = 0;
  let expenses = 0;
  if (data) {
    data.forEach((d) => {
      if (d.category === "income") {
        incomes += d.amount;
      }
      if (d.category === "expense") {
        expenses += d.amount;
      }
    });
  }
  return [
    { title: "Your Balance", amount: incomes - expenses, variant: "success" },
    { title: "Your Income", amount: incomes, variant: "info" },
    { title: "Your Expense", amount: expenses, variant: "primary" },
  ];
};

export default function App() {
  const getData = () => {
    const data = localStorage.getItem("data");
    if (data) {
      return JSON.parse(data);
    }
    return [];
  };
  const [data, setData] = useState(getData);
  const [formValues, setFormValues] = useState(initialValues);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleChange = (event) => {
    setFormValues((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  };

  const onAdd = (event) => {
    event.preventDefault();
    if (formValues.title && formValues.amount) {
      setData((prevState) => {
        return [
          ...prevState,
          { ...formValues, amount: Number(formValues.amount) },
        ];
      });
      setFormValues(initialValues);
    }
  };

  const memoizedDeleteHandler = useCallback((index) => {
    setData((prevState) => prevState.filter((_, i) => i !== index));
  }, []);

  const memoizedBalance = useMemo(() => {
    return getBalance(data);
  }, [data]);

  return (
    <div className="container">
      <div className="row">
        {/* Header */}
        <div className="col-lg-12 mb-4">
          <Navbar />
        </div>

        {/* Wrappers */}
        <ErrorBoundary>
          <Widget data={memoizedBalance} />
        </ErrorBoundary>

        {/* Form */}
        <div className="col-lg-4 mt-4">
          <Form values={formValues} onChange={handleChange} onSubmit={onAdd} />
        </div>

        {/* Table */}
        <div className="col-lg-8 mt-4">
          <Table tableData={data} onDelete={memoizedDeleteHandler} />
        </div>
      </div>
    </div>
  );
}
