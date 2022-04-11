import React, { useEffect, useRef } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Heading from "../Heading/Heading";

export default function Form({ values, onChange, onSubmit }) {
  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    onSubmit(e);
    inputRef.current.focus();
  };
  return (
    <Card>
      <Heading type="h4" className="pb-2" title="Add Transaction" />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            ref={inputRef}
            value={values.title}
            name="title"
            className="form-control"
            type="text"
            placeholder="Title"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <input
            value={values.amount}
            name="amount"
            className="form-control"
            type="number"
            placeholder="Amount"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Amount</label>
          <select
            value={values.category}
            name="category"
            className="form-control"
            onChange={onChange}
          >
            <option value="income">INCOME</option>
            <option value="expense">EXPENSE</option>
          </select>
        </div>
        <Button
          disabled={!values.title || !values.amount}
          variant="primary"
          size="sm"
        >
          Add
        </Button>
      </form>
    </Card>
  );
}

Form.defaultProps = {
  values: {
    title: "",
    amount: "",
    category: "income",
  },
};
