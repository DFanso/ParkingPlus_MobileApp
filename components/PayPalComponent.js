import { View, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import fetch from 'cross-fetch';

const PaypalComponent = () => {
  const [paymentUrl, setPaymentUrl] = useState(null);

  useEffect(() => {
    createPayment();
  }, []);

  const createPayment = async () => {
    try {
      const response = await fetch('http://20.2.80.190:3000/create-payment');
      const data = await response.json();
      const { approvalLink } = data;
      setPaymentUrl(approvalLink);
    } catch (error) {
      console.error('Failed to create payment:', error);
    }
  };

  return (
    <View style={{ width: '100%', height: '100%', flex: 1 }}>
      {paymentUrl ? (
        <WebView
          source={{ uri: paymentUrl }}
          startInLoadingState
          renderLoading={() => <ActivityIndicator />}
        />
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default PaypalComponent;
