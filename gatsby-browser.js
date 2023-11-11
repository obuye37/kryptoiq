import React from "react"
import { AnimatePresence } from "framer-motion"
import "./src/globalstyles.css"
import Layout from "./src/components/Layout"

export const wrapPageElement = ({element, props}) => {
    return(
        <AnimatePresence mode="wait">
            <Layout {...props}>{element}</Layout>
        </AnimatePresence>
    )
    
}