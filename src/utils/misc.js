import { Platform, Dimensions } from "react-native"
export const platformSwitcher = ({ ios, android }) => Platform.select({ ios, android })
