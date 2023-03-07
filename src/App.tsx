import "./styles.css";

import React from "react";
import { useFetch } from "./useFetch";

function User({ url }) {
  // Fetch the data
  const { loading, error, data } = useFetch(url);

  if (loading) {
    return <p>Fetching data</p>;
  }

  if (error) {
    console.log(error);
    return (
      <div>
        <p>Error: {error.message || error}</p>
        <small>Refresh the page if this error is unintentional.</small>
      </div>
    );
  }

  return (
    <div className="App">
      <code>{data}</code>
      <p>
        <small>
          Edit <code>src/mocks/handlers.js</code> with your logic.
        </small>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <>
      <h1>Base Typescript API mocking example</h1>
      <User url={`/test`} />
      <User url={`https://made.up/api/user/bob`} />
      <User url={`https://made.up/api/user?name=june`} />
    </>
  );
}
