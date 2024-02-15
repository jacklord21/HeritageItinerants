import React from "react";
import Link from "next/link";

export default function Grid() {
    return (
        <main style={{backgroundColor: "red", height: '100%', marginTop: "10px"}}>
            <div>
                <p>
                    This is the Grid Page of this website. Go to <Link href={'ring'}> Ring </Link> page.
                </p>
            </div>
        </main>
    )
}