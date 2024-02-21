//"use client";

import React from "react";
import {redirect} from "next/navigation";
import handler from "../database/databaseExtraction";
import extractorInstance from "@/app/dataExtractor";
import {LayoutProvider} from "./context";

export default async function App() {
    return (
        <LayoutProvider>
            {redirect('explore/ring')}
        </LayoutProvider>
    )
}