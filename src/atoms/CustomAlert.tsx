
import { Alert } from "react-native";

export default function CustomAlert(title: string, message: string, buttons: Array<object> | null = null) {
  return Alert.alert(
    title,
    message,
    buttons || [{ text: "OK", onPress: () => { } }]
  );
}
