import React from "react";
const ListGroup = (props) => {
  const { items, onItemSelect, selectedItem } = props;
  return (
    <ul className="list-group col.sm-4">
      {/* {console.log(items)} */}
      {items.map((item) => (
        <li
          onClick={() => onItemSelect(item)}
          key={item._id}
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name",
};
export default ListGroup;
