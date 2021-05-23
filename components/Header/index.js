import React from 'react'
import Link from 'next/link';

export default function Header() {
    return (
        <header className="flex flex-col space-y-2 py-2 justify-center items-center w-full bg-gray-50">
            <div className="text-2xl font-black text-white uppercase">
                <Link href="/" className="cursor-pointer">
                    Kraft Corner
                </Link>
            </div>
            <div className="text-xs font-light text-white uppercase tracking-widest px-4 text-center">Hand made jewellery &amp; articles, now at your doorstep</div>
        </header>
    )
}
