import React from "react";

export default function Navbar({posts, setPosts}){
    const filterPosts = category => posts.filter(post => post.category === category)

    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src="https://macademy.uz/assets/img/logo-new.svg" width="112" height="28"/>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                    <span aria-hidden="true"/>
                </a>
            </div>
            <div className="navbar-start">
                <div className="navbar-menu">
                    <a href="#" className='navbar-item is-active' onClick={() => setPosts(posts)}>Все посты</a>
                    <a href="#" className='navbar-item' onClick={() => setPosts(filterPosts("Спорт"))}>Спорт</a>
                    <a href="#" className='navbar-item' onClick={() => setPosts(filterPosts("Политика"))}>Политика</a>
                    <a href="#" className='navbar-item' onClick={() => setPosts(filterPosts("Экономика"))}>Экономика</a>
                    <a href="#" className='navbar-item' onClick={() => setPosts(filterPosts("Общество"))}>Общество</a>
                </div>
            </div>
        </nav>
    )
}