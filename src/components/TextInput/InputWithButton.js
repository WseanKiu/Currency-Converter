import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableHighlight,
    TextInput
} from 'react-native';
import styles from './styles';

const InputWithButton = (props) => {
    const { onPress, buttonText, editable = true } = props;
    const containerStyles = [styles.container];
    const underlayColor = '#D1D1D1';
    
    if(editable === false) {
        containerStyles.push(styles.containerDisabled);
    }

    return (
        <View style={containerStyles}>
            <TouchableHighlight underlayColor={underlayColor} style={styles.buttonContainer} onPress={onPress}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableHighlight>
            <View styles={styles.border}/>
            <TextInput style={styles.input} {...props} />
        </View>
    )
};

InputWithButton.propTypes = {
    onPress: PropTypes.func,
    buttonText: PropTypes.string,
    editable: PropTypes.bool,
}

export default InputWithButton;