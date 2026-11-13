import InvoicePage from "./InvoicePage.tsx";
import { useState, useEffect } from "react";
export default function App() {

  const users: any[] = [];
  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const datas = await response.json();


    datas.map((user: any) => {
      users.push(user);
    });
    console.log(users);
  };

  getUsers();

}

