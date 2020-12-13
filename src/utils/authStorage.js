import AsyncStorage from '@react-native-community/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    const token = await AsyncStorage.getItem(`${this.namespace}: token`);
    return token && JSON.parse(token);
  }

  async setAccessToken(accessToken) {
      console.log(accessToken);
    await AsyncStorage.setItem(
      `${this.namespace}: token`,
      JSON.stringify(accessToken),
    );
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}: token`);
  }
}

export default AuthStorage;
