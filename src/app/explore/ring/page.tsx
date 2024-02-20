"use client";

import React, { useState } from 'react';
import './ring.css';
import Example from "@/app/explore/ring/example";

export default function HomePage() {

    return (
        <div className="App" style={{ width: "100%",
            display: "grid",
            placeItems: "center", /* Centro gli elementi del grid */
            height: "100vh" }}>
            <Example />
        </div>
    );
};