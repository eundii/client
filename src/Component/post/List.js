import React, { useEffect } from "react";
import axios from "axios";

function List() {
  useEffect(() => {
    let body = {
      text: "hello",
    };
    axios
      .post("/api/test", body)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>List</div>;
}

export default List;
