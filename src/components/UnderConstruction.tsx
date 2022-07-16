import React from 'react';
import CONSTRUCTIONGIF from '../img/underconstruction.gif';

export interface UnderConstructionProps {

}

const UnderConstruction: React.FunctionComponent<UnderConstructionProps> = ({

        }) => {

    return (
        <main id='construction'>
            <h1>This page is under construction. Please hold on!</h1>
            <img src={CONSTRUCTIONGIF} />
        </main>
    );
}

export { UnderConstruction };
