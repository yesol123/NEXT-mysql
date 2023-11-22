"use client";
import { useParams } from 'next/navigation'
import React from 'react'

function Page() {
    const param = useParams();
  return (
    <div>동적라우팅!!!{param.id}</div>
  )
}

export default Page