import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AdMobBanner } from 'expo-ads-admob';

const BannerAds = () => {
  return (
    <View style={{ alignItems: 'center', marginTop: 10 }}>
      <AdMobBanner
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Google test ID
        bannerSize="fullBanner"
        servePersonalizedAds
        onDidFailToReceiveAdWithError={(error) => console.log("Ad error:", error)}
      />
    </View>
  );
};


export default BannerAds;

const styles = StyleSheet.create({})