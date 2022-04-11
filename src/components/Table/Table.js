import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";

function Table({ tableData, onDelete }) {
  return (
    <Card>
      <Heading className="pb-2" title="History" />
      {tableData.length ? (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((data, index) => {
              return (
                <tr key={index}>
                  <td>{data.title}</td>
                  <td>&#8377; {data.amount}</td>
                  <td>
                    <span
                      className={`badge bg-${
                        data.category === "income" ? "success" : "warning"
                      }`}
                    >
                      {data.category?.toUpperCase()}
                    </span>
                  </td>
                  <td>
                    <Button
                      onClick={() => onDelete(index)}
                      size="sm"
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-danger">No History Found!</p>
      )}
    </Card>
  );
}

export default React.memo(Table);

Table.propTypes = {
  tableData: PropTypes.array,
};

Table.defaultProps = {
  tableData: [],
};
