'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Searchbar() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    function handleSubmit(e) {
        e.preventDefault();

        if (search === "") {
            return;
        }

        router.push(`/stats/${search}`);
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search a user..." value={search} onChange={(e) => setSearch(e.target.value)} className="border-neutral-800 outline-none text-neutral-400 bg-neutral-900 placeholder-neutral-400 p-2 rounded-l-md"/>
            <button type="submit" className="p-2 rounded-r-md bg-gradient-to-r text-black font-bold from-purple-600 to-pink-500">Search</button>
        </form>
    );
}