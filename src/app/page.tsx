//"use client";

import React from "react";
import {redirect} from "next/navigation";
import handler from "../database/databaseExtraction";

export default async function App() {
  //  await handler();
    return redirect('explore/ring');
}