import {I18nManager, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RangeSlider from './slider/src/RangeSlider';
//import {Slider} from '@miblanchard/react-native-slider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
I18nManager.forceRTL(false);
I18nManager.allowRTL(false);

export default function App() {
  const [values, setValue] = useState([0, 1000]);
  return (
    <GestureHandlerRootView>
      <View style={{width: 300, alignSelf: 'center', flex: 1, paddingTop: 200}}>
        <RangeSlider
          style={{direction: I18nManager.isRTL ? 'rtl' : 'ltr'}}
          range={values} // set the current slider's value
          minimumValue={0}
          maximumValue={1000} // The slider's range
          step={10} // The step for the slider (0 means that the slider will handle any decimal value within the range [min, max])
          crossingAllowed={true} // If true, the user can make one thumb cross over the second thumb
          outboundColor="grey" // The track color outside the current range value
          inboundColor="grey" // The track color inside the current range value
          thumbTintColor="darkcyan" // The color of the slider's thumb
          vertical={false} // If true, the slider will be drawn vertically
          inverted={I18nManager.isRTL} // If true, min value will be on the right, and max on the left
          enabled={true} // If false, the slider won't respond to touches anymore
          trackHeight={4} // The track's height in pixel
          thumbSize={15} // The thumb's size in pixel
          slideOnTap={true} // If true, touching the slider will update it's value. No need to slide the thumb.
          onValueChange={c => {
            console.log('value changed');
            setValue(c);
          }} // Called each time the value changed. Return false to prevent the value from being updated. The type is (range: [number, number]) => boolean | void
        />

        <Text>{JSON.stringify(values)}</Text>
        <Text>{`${I18nManager.isRTL}`}</Text>
      </View>
    </GestureHandlerRootView>
  );
}
