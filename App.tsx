import {I18nManager, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {RangeSlider} from '@react-native-assets/slider';

I18nManager.forceRTL(true);
I18nManager.allowRTL(true);

export default function App() {
  return (
    <View style={{width: 300, alignSelf: 'center', flex: 1, paddingTop: 200}}>
      <RangeSlider
        range={[0, 100]} // set the current slider's value
        step={0} // The step for the slider (0 means that the slider will handle any decimal value within the range [min, max])
        minimumRange={0} // Minimum range between the two thumbs (defaults as "step")
        minimumValue={0} // Minimum value (defaults as 0)
        maximumValue={100} // Maximum value (defaults as minimumValue + minimumRange)
        crossingAllowed={false} // If true, the user can make one thumb cross over the second thumb
        outboundColor="grey" // The track color outside the current range value
        inboundColor="grey" // The track color inside the current range value
        thumbTintColor="darkcyan" // The color of the slider's thumb
        thumbStyle={undefined} // Override the thumb's style
        trackStyle={undefined} // Override the tracks' style
        minTrackStyle={undefined} // Override the tracks' style for the minimum range
        midTrackStyle={undefined} // Override the tracks' style for the middle range
        maxTrackStyle={undefined} // Override the tracks' style for the maximum range
        vertical={false} // If true, the slider will be drawn vertically
        inverted={false} // If true, min value will be on the right, and max on the left
        enabled={true} // If false, the slider won't respond to touches anymore
        trackHeight={4} // The track's height in pixel
        thumbSize={15} // The thumb's size in pixel
        thumbImage={undefined} // An image that would represent the thumb
        slideOnTap={true} // If true, touching the slider will update it's value. No need to slide the thumb.
        onValueChange={undefined} // Called each time the value changed. Return false to prevent the value from being updated. The type is (range: [number, number]) => boolean | void
        onSlidingStart={undefined} // Called when the slider is pressed. The type is (range: [number, number]) => void
        onSlidingComplete={undefined} // Called when the press is released. The type is (range: [number, number]) => void
        CustomThumb={undefined} // Provide your own component to render the thumb. The type is a component: ({ value: number, thumb: 'min' | 'max' }) => JSX.Element
        CustomMark={undefined} // Provide your own component to render the marks. The type is a component: ({ value: number; active: boolean }) => JSX.Element ; value indicates the value represented by the mark, while active indicates wether a thumb is currently standing on the mark
      />
    </View>
  );
}
