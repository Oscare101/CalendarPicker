import React from 'react';
import {Text} from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

interface GradientTextProps {
  colors: string[];
  children: any;
  onPress: any;
  style: any;
}

export default function GradientText(props: GradientTextProps) {
  return (
    <MaskedView
      androidRenderingMode="software"
      maskElement={<Text {...props} />}>
      <LinearGradient
        colors={props.colors}
        start={{x: 0, y: 1}}
        end={{x: 1, y: 0}}>
        <Text {...props} style={[props.style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
}
