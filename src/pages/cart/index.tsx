import { InferGetStaticPropsType } from "next";
import { useState } from "react";
import DataTable from "react-data-table-component";

export const getStaticProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  console.log(data)

  return {
    props: { products: data },
  };
};


const columns = [
  {
    sortable: true,
    name: "Product",
    selector: (row: any) => row.title,
    width: "33%",
  },
  {
    sortable: true,
    name: "Quantity",
    selector: (row: any) => row.quantity,
    width: "33%",
    center: true
  },
  {
    sortable: true,
    name: "Price",
    selector: (row: any) => row.price,
    width: "33%",
    center: true
  },
];


const Cart = ({products}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <DataTable
      columns={columns}
      data={products}
      selectableRows
      selectableRowsHighlight
    />
  );
};

export default Cart;
