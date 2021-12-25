import React from "react";
import { connect } from "react-redux";
import { selectCategory } from "../action/Action";
import { Button } from "@material-ui/core";

function Category(props) {
  function onClickHandler(categoryName) {
    props.selectCategory(categoryName);
    console.log(props);
  }
  return (
    <>
      <h2 id="Category">Select Category:</h2>
      {props.categories.map((cat) => (
        <>
          <Button
            id="Button"
            variant="contained"
            color="primary"
            onClick={() => onClickHandler(cat.normalizedName)}
          >
            {cat.normalizedName}
          </Button>
        </>
      ))}

      {props.activeCategory.normalizedName && ( ////check if catageroy exist
        <h2>Active Category : {props.activeCategory.normalizedName}</h2>
      )}

      {props.activeCategory.normalizedName && (
        <h4 id="desc"> {props.activeCategory.description}</h4>
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  console.log("STATE============>", state);
  return state.cat; //cat from name of reducer when i call it inside store
};
const mapDispatchToProps = { selectCategory };
export default connect(mapStateToProps, mapDispatchToProps)(Category);
