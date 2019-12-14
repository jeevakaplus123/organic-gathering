import AsyncStorage from '@react-native-community/async-storage';

export const readData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null)
      return JSON.parse(value)
      else return null
    } catch (e) {
      return null
    }
  }

export const saveData = async (key, userData) => {
    try {
      await AsyncStorage.setItem(key, userData)
    } catch (e) {
    }
  }

export const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key)
      return true
    } catch (e) {
      return false
    }
  }