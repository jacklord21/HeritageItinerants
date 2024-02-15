"use client";

import React from "react";
import {redirect} from "next/navigation";
import Button from "@/components/button/button";

export default function App() {

  return redirect('explore/ring');(
      <div className="m-auto min-h-screen flex items-center justify-center text-center px-30">
          <div className="flex-column gap-100">
              <div>
                  <div className="font-mont font-bold text-100">HERITAGE ITINERANTS</div>
                  <div className="font-mont font-bold text-40">Raccolta di progetti legati al patrimonio culturale provenienti da ogni parte del mondo.</div>
              </div>
              <div>
                  <Button
                    //  onClickFunc={() => {  console.log("dddddd"); redirect('explore/ring')}}
                      borderRadius="5px"
                      width={"250px"}
                      height={"72px"}
                      text={"dddd"}
                  />
              </div>
          </div>
      </div>
  )

    //redirect('explore/grid')
}