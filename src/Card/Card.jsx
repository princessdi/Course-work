import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
    return (
        <div className={styles.container}>
            {/* Заглушка которая прячет если данные не готовы*/}
            {props.isReady ? <div className={styles.weathers}>

                <div>
                    {/* Погода за сегодня  */}
                    <h1>Current day</h1>
                    <div className={styles.card}>
                        <div className={styles.cardList}>
                            <p className={styles.itemTitle}>Temperature</p>
                            <div className={styles.itemValue}>{props.cardInfo.temp_c}  C°</div>
                        </div>
                        <div className={styles.cardList}>
                            <p className={styles.itemTitle}>Feels like</p>
                            <div className={styles.itemValue}>{props.cardInfo.feelslike_c}  C°</div>
                        </div>
                        <div className={styles.cardList}>
                            <p className={styles.itemTitle}>Vision </p>
                            <div className={styles.itemValue}>{props.cardInfo.vis_km} km</div>
                        </div>
                        <div className={styles.cardList}>
                            <p className={styles.itemTitle}>Wind speed </p>
                            <div className={styles.itemValue}>{props.cardInfo.wind_kph} km/h</div>
                        </div>

                    </div>
                </div>
                <div>
                    {/* Погода за завтра */}
                    <h1>Tomorrow day</h1>
                    <div className={styles.card}>
                        <div className={styles.cardList}>
                            <p className={styles.itemTitle}>Temperature</p>

                            <div className={styles.itemValue}>{props.forecast.day.avgtemp_c}  C°</div>
                        </div>
                        <div className={styles.cardList}>
                            <p className={styles.itemTitle}>Additional</p>
                            <div className={styles.itemValue}>{props.forecast.day.condition.text}</div>
                        </div>
                        <div className={styles.cardList}>
                            <p className={styles.itemTitle}>Vision </p>
                            <div className={styles.itemValue}>{props.forecast.day.avgvis_km} km</div>
                        </div>
                        <div className={styles.cardList}>
                            <p className={styles.itemTitle}>Max wind speed </p>
                            <div className={styles.itemValue}>{props.forecast.day.maxwind_kph} km/h</div>
                        </div>

                    </div>
                </div>

            </div> : <></>}


        </div>
    );
};

export default Card;