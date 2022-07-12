import type { ReactElement } from "react"
import BGIMG from '../img/cocktail.png';

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
            <button>SHOP</button> 
            <p>*All proceeds charitably donated to Esme Squalor</p>
        </main>
    </>
    );
}
