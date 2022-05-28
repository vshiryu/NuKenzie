import { useState } from "react";
import "./Form.css";

function Form({
  newTransaction,
  setTransactionType,
  setDescription,
  setTransactionValue,
}) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        newTransaction();
        event.target.reset();
        setTransactionType("entrada");
      }}
    >
      <input
        className="description"
        type="text"
        placeholder="descrição"
        required
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      ></input>
      <input
        type="number"
        placeholder="valor"
        required
        onChange={(event) => {
          setTransactionValue(event.target.value);
        }}
      ></input>
      <select
        onChange={(event) => {
          setTransactionType(event.target.value);
        }}
      >
        <option>entrada</option>
        <option>saída</option>
      </select>
      <button type="submit" id="send-button">
        Inserir valor
      </button>
    </form>
  );
}

export default Form;