//"use client";

import React from "react";
import {redirect} from "next/navigation";
import handler from "../database/databaseExtraction";
import extractorInstance from "@/app/dataExtractor";
import {LayoutProvider} from "./context";
import ExtractorComponent from "@/app/dataExtractor";

export default async function App() {
    const data = new ExtractorComponent({});
    return redirect('explore/ring');

}