import React,{ useContext} from 'react';
import { Link } from 'react-router-dom'
import { HiArrowRight } from "react-icons/hi";

import './Blog.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { blogData } from '../../data/blogData'
import SingleBlog from './SingleBlog/SingleBlog';


function Blog() {

    const { theme } = useContext(ThemeContext);

    return (
        <>
            {blogData.length > 0 && (
                <div className="blog" id="blog" style={{backgroundColor: theme.secondary}}>
                    <div className="blog--header">
                        <h1 style={{color: theme.primary}}>Blog</h1>
                    </div>
                    <div className="blog--body">
                        <div className="blog--bodyContainer">
                            {blogData.slice(0, 3).reverse().map(blog => (
                                <SingleBlog 
                                    theme={theme}
                                    title={blog.title}
                                    desc={blog.description}
                                    date={blog.date}
                                    image={blog.image}
                                    url={blog.url}
                                    key={blog.id}
                                    id={blog.id}
                                />
                            ))}
                        </div> 

                        {blogData.length > 3 && (
                            <div className="blog--viewAll">
                                <Link to="/blog">
                                    <button
                                        className="blog--viewAllBtn"
                                        style={{
                                            '--btn-color': theme.tertiary,
                                            '--btn-bg': theme.primary,
                                            '--btn-color-hover': theme.secondary,
                                            '--btn-bg-hover': theme.primary,
                                        }}
                                    >
                                        View All
                                        <HiArrowRight
                                            className="blog--viewArr"
                                            style={{
                                                '--arr-color': theme.tertiary,
                                                '--arr-bg': theme.secondary70,
                                                '--arr-color-hover': theme.tertiary,
                                                '--arr-bg-hover': theme.secondary,
                                            }}
                                        />
                                    </button>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}

        </>
    )
}

export default Blog
