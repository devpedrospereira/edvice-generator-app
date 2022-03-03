import { useEffect, useState } from "react"
import styles from "./style.module.scss"

export default function Windows(){

    const [advices, setadvice] = useState({})
    const [clic, setclic] = useState(Boolean)
    
    useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
            .then(response => response.json())
            .then(data => setadvice(data))
    },[clic])

        const render = () => {       
            if(advices.slip){
                const {id,advice} = advices.slip;
                return(
                    <>
                        <div className={styles.advice}>
                            <h2>Adivice #{id}</h2>
                            <h1>{advice}</h1>
                        </div>
                        
                        <div className={styles.division}>
                            <img src="./accets/pattern-divider-desktop.svg" alt="division" />
                        </div>
                        
                        <button onClick={()=> setclic(!clic)} className={styles.button}>
                            <img src="./accets/icon-dice.svg" alt="button" />
                        </button>
                    </>
                )
            }
    }

    return(
        <div className={styles.container}>
                {render()}
        </div>
    )
}
