import './App.css';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';

import commonStore from '@src/Stores/commonStore';

const App = observer(() => {
    const store = new commonStore();

    const drawBitcoin = () => {
        const canvas: HTMLCanvasElement = document.getElementById('bitcoinCanvas') as HTMLCanvasElement;
        const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;

        // Draw circle
        ctx.beginPath();
        ctx.arc(100, 100, 80, 0, 2 * Math.PI);
        ctx.fillStyle = 'orange';
        ctx.fill();

        // Draw inner circle
        ctx.beginPath();
        ctx.arc(100, 100, 60, 0, 2 * Math.PI);
        ctx.fillStyle = 'white';
        ctx.fill();

        // Draw "₿"
        ctx.font = 'bold 80px Arial';
        ctx.fillStyle = 'orange';
        ctx.fillText('₿', 75, 135);

        // Draw "₿"
        ctx.font = 'bold 80px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText('₿', 95, 135);
    };
    useEffect(() => {
        drawBitcoin();
    }, []);

    useEffect(() => {
        console.log('%cAttention', 'color: red; font-weight: bold; font-size:3rem');
        console.log(
            `%cVisit %chttp://localhost:3000/README.md to read project's conventions`,
            'font-weight: bold;',
            'font-weight: bold;',
        );
    }, []);
    return (
        <>
            <canvas id="bitcoinCanvas" width="200" height="200"></canvas>
            <h1>{store.appName}</h1>
            <p className="descriptions">My app based on react and vite</p>
            <ul className="packages">
                <li>axios</li>
                <li>mobx</li>
                <li>i18next</li>
            </ul>
        </>
    );
});

export default App;
