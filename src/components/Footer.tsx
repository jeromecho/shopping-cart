import React from 'react';
import GITHUBLOGO from '../img/github.png';

export interface FooterProps {

}

const Footer: React.FunctionComponent<FooterProps> = ({

        }) => {

    return (
        <footer>
            <div className='container'>
                <p>Another great project by Cho Industries</p>
                <a href='https://www.github.com/jeromecho'>
                    <img src={GITHUBLOGO} />
                </a>
            </div>
        </footer>
    );
}

export { Footer };
