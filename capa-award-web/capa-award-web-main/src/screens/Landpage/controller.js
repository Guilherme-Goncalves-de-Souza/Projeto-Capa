import React, { useContext, useEffect, useState } from "react";  

import { Read as ReadAbout } from "services/about";
import { Read as ReadBlog } from "services/blogs";
import { Read as ReadNews } from "services/news-pages";
import { Read as ReadEdicts } from "services/edicts";

import { exposeStrapiError } from "utils";
import { CoreContext } from "context/CoreContext";

export default function useController(){ 
    
    const [loading, setLoading] = useState(false) 
    
    const [about, setAbout] = useState(null) 
    const [blogs, setBlogs] = useState(null) 
    const [edicts, setEdicts] = useState(null) 
    const [news, setNews] = useState(null) 


    const { user } = useContext(CoreContext)

    const init = async () => {
        setLoading(true)
            await initEdict()
            await initAbout()
            await initNews()
            await initBlog()
        setLoading(false)
    }

    const initAbout = async () => {
        const result = await ReadAbout()
        if(result && !exposeStrapiError(result)){
            setAbout(result)
        }
    }

    const initBlog = async () => {
        const result = await ReadBlog()
        if(result && !exposeStrapiError(result)){
            setBlogs(result)
        }
    }

    const initEdict = async () => {
        const result = await ReadEdicts()
        if(result && !exposeStrapiError(result)){
            setEdicts(result)
        }
    }

    const initNews = async () => {
        const result = await ReadNews()
        if(result && !exposeStrapiError(result)){
            setNews(result)
        }
    }

    useEffect(() => { init() }, [])

    return {
        loading,
        about,
        blogs,
        edicts,
        news,
        user
    };
}