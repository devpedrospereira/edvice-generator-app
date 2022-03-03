/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import styles from "./style.module.scss";

export default function Windows() {
    const [advices, setAdvice] = useState({});
    const [clic, setclic] = useState(false);

    useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())
            .then((data) => setAdvice(data));
    }, [clic]);
    // requisitando os dados da api, e os armazenando na constante data
    const render = () => {
        if (advices.slip) {
            const { id, advice } = advices.slip;
            return (
                <>
                    <div className={styles.advice}>
                        <h2>ADVICE #{id}</h2>
                        <h1>{`"${advice}"`}</h1>
                    </div>

                    <div className={styles.division}>
                        <img
                            src="./accets/pattern-divider-desktop.svg"
                            alt="division"
                            className={styles.divisionDesktop}
                        />
                        <img
                            src="./accets/pattern-divider-mobile.svg"
                            alt="division"
                            className={styles.divisionMobile}
                        />
                    </div>

                    <button
                        onClick={() => setclic(!clic)}
                        className={styles.button}
                    >
                        <img
                            className={
                                clic === true
                                    ? styles.buttonTrue
                                    : styles.buttonFalse
                            }
                            src="./accets/icon-dice.svg"
                            alt="button"
                        />
                        {/* a condição ternaria acima, chama a classe para rotacionar o botão ao ser clicado */}
                    </button>
                </>
            );
        }
    };

    return <div className={styles.container}>{render()}</div>;
}
