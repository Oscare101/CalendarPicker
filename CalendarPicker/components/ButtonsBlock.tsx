import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../constants/styles';

export default function ButtonsBlock(props: any) {
  return (
    <View style={styles.buttonsBlock}>
      <TouchableOpacity
        style={styles.bottomButton}
        activeOpacity={0.8}
        onPress={() => props.onCancel()}>
        <Text style={[styles.cancelButton, props.cancelButtonStyles]}>
          {props.cancelButtonTitle || 'Cancel'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomButton}
        activeOpacity={0.8}
        onPress={() => props.onConfirm()}>
        <Text style={[styles.confirmButton, props.confirmButtonStyles]}>
          {props.confirmButtonTitle || 'Confirm'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
