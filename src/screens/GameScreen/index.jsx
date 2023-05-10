import { Button, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from "react";

import Card from '../../components/Card';
import styles from './styles';

const GameScreen = () => {
    const [currentGuess, setCurrentGuess] = useState();

    useEffect(() => {
        setCurrentGuess(Math.floor(Math.random() * (99 - 1) + 1))
    }, []);
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>EL NUMERO QUE SUPONE EL OPONENTE ES:</Text>
            <Text style={styles.numberSelected}>{currentGuess}</Text>
            <View style={styles.container}>
                <Card>
                    <Text style={styles.subtitle}>¿El numero es mayor o menor?</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.buttonLower}
                            onPress={() => console.log ('Lower')}>
                            <Text>MÁS BAJO</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.buttonHigh}
                            onPress={() => console.log('Higher')}>
                            <Text>MÁS ALTO</Text>
                        </TouchableOpacity>

                    </View>
                </Card>

            </View>
        </View>
    )
}

export default GameScreen;