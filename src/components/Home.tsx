import type { ReactElement } from "react"
import BGIMG from '../img/cocktail.png';
import { Link } from 'react-router-dom';

export interface HomeProps {

}

export function Home(props: HomeProps): ReactElement {
    return (
        <>
        <div id='overlay'/>
       <main id='home' style={{
            backgroundImage: `url(${BGIMG})`,
        }}>
            <h1>Ready to be 'In'?</h1>
            <h3>The largest selection on 'In' items in North America</h3>
            <Link to='/shop'><button>SHOP</button></Link>
            <p>*All proceeds charitably donated to Esme Squalor</p>
        </main>
    </>
    );
}
