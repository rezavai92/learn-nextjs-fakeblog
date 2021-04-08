import React from 'react'
import Link from 'next/link'
export default function Header() {
    return (
        <div className ="navbar">
            <ul>
                <li>
                    <Link href="/" >
                    <a>
                        Home
                    </a>
                    </Link>
                </li>

                <li>
                    <Link href="/blogs" >
                    <a>
                        Blogs
                    </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
