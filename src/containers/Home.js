import React, { Component } from 'react';
import { StatusBar, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';
import { ClearButton } from '../components/Button';
import { LastConverted } from '../components/Text';
import { Header } from '../components/Header';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {

    static propTypes = {
        navigation: PropTypes.object,
    }

    handlePressBaseCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Base Currency'});
    }

    handlePressQuoteCurrency = () => {
        this.props.navigation.navigate('CurrencyList', { title: 'Qoute Currency' });
    }

    handleTextChange = (text) => {
        console.log('text changed: ', text);
    }

    handleSwapCurrency = () => {
        console.log('swap pressed');
    }

    handleOptionsPress = () => {
        this.props.navigation.navigate('Options');
    }

    render() {
        return (
            <Container>
                <StatusBar translucent={false} barStyle="light-content" />
                <Header onPress={this.handleOptionsPress} />
                <KeyboardAvoidingView behavior="padding">
                    <Logo />
                    <InputWithButton
                        buttonText={TEMP_BASE_CURRENCY}
                        onPress={this.handlePressBaseCurrency}
                        defaultValue={TEMP_BASE_PRICE}
                        keyboardType="numeric"
                        onChangeText={this.handleTextChange} />
                    <InputWithButton
                        buttonText={TEMP_QUOTE_CURRENCY}
                        onPress={this.handlePressQuoteCurrency}
                        defaultValue={TEMP_QUOTE_PRICE}
                        editable={false} />
                    <LastConverted
                        base={TEMP_BASE_CURRENCY}
                        qoute={TEMP_QUOTE_CURRENCY}
                        date={TEMP_CONVERSION_DATE}
                        conversionRate={TEMP_CONVERSION_RATE} />
                    <ClearButton
                        text="Reverse currencies"
                        onPress={this.handleSwapCurrency} />
                </KeyboardAvoidingView>
            </Container>
        )
    }
}

export default Home;