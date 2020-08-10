import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';


interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">

                <Link to="/lista">Lista</Link>
                <Link to="/">Cadastro</Link>


            </div>
            <div className="header-content">
                <h1>{props.title}</h1>
            </div>
        </header>
    )
}

export default PageHeader;