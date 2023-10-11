import { useLayoutEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from "./components/Sidebar"
import BreadCrumbs from './components/BreadCrumbs'
import ProblemPanel from "./components/ProblemsPanel"
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import Footer from "./components/Footer"
function App() {

    const [searchParams, setSearchParams] = useSearchParams();
    const id = searchParams.get('question_id') || "1";


    return (
        <>
            <div className='bg-[#F7F5F1] h-screen'
            >
                <Header />
                <div className='flex  flex-row relative h-full lg:pt-[72px] pt-[56px] '>
                    <div className=''>
                        <Sidebar setSearchParams={setSearchParams} />
                    </div>
                    <div className=" px-[5rem] pt-3 relative ease-in-out delay-150 transition-width w-full">
                        <BreadCrumbs />
                        <ProblemPanel id={id} setSearchParams={setSearchParams} />
                        <Footer />
                    </div>
                </div>

            </div>
        </>
    )
}

export default App
