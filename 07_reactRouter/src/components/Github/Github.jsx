import React from 'react'
// import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/DRLVP')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // })

    return (
        <>
            <div>Github followers: {data.followers}</div>
            <img src={data.avatar_url} width={300} />
        </>
    )
}

export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/DRLVP')
    return response.json();
}