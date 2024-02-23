"use client";

import React, { useState } from 'react';
import './ring.css';
import Example from "@/app/explore/ring/example";
import Footer from "@/app/footer/page";

export default function HomePage() {

    return (

        <div className="App" >
            <Example />
            <Footer
                gridClickEnabled={true}
                ringClickEnabled={false}
            />
        </div>
    );
};