import React, { Component } from 'react';
import {
    View,
    Text,
    Keyboard,
    Animated,
    StyleSheet,
    Platform
} from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250; // millis

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            containerImageWidth: new Animated.Value(styles.$largeContainerSize),
            imageWidth: new Animated.Value(styles.$largeImageSize),
        };
    }
    componentDidMount() {
        const name = Platform.OS === 'ios' ? 'Will' : 'Did';
        this.keyboardDidShowListener = Keyboard.addListener(
            `keyboard${name}Show`,
            this.keyboardWillShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
            `keyboard${name}Hide`,
            this.keyboardWillHide,
        );
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    keyboardWillShow = () => {
        const { containerImageWidth, imageWidth } = this.state;

        Animated.parallel([
            Animated.timing(containerImageWidth, {
                toValue: styles.$smallContainerSize,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(imageWidth, {
                toValue: styles.$smallImageSize,
                duration: ANIMATION_DURATION,
            }),
        ]).start();
    };

    keyboardWillHide = () => {
        const { containerImageWidth, imageWidth } = this.state;

        Animated.parallel([
            Animated.timing(containerImageWidth, {
                toValue: styles.$largeContainerSize,
                duration: ANIMATION_DURATION,
            }),
            Animated.timing(imageWidth, {
                toValue: styles.$largeImageSize,
                duration: ANIMATION_DURATION,
            }),
        ]).start();
    };

    render() {
        const { containerImageWidth, imageWidth } = this.state;

        const containerImageStyles = [
            styles.containerImage,
            {
                width: containerImageWidth,
                height: containerImageWidth
            },
        ];

        const imageStyles = [
            styles.image,
            { width: imageWidth },
        ];

        return (
            <View style={styles.container}>
                <Animated.View style={containerImageStyles}>
                    <Animated.Image
                        resizeMode="contain"
                        source={require('./images/background.png')}
                        style={[StyleSheet.absoluteFill, containerImageStyles]} />

                    <Animated.Image
                        resizeMode="contain"
                        source={require('./images/logo.png')}
                        style={imageStyles} />
                </Animated.View>
                <Text style={styles.text}>Currency Converter</Text>
            </View>
        );
    }
}

export default Logo;