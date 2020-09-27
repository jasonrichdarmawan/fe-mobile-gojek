### Software Development Requirements Analysis

- [x] Client's Environment

  ```
  Android API 25
  React Native 6.0.3
  ```

  - [x] Android

    AndroidManifest.xml

    ```
    <!-- react-native-maps -->
    <meta-data
      android:name="com.google.android.geo.API_KEY"
      android:value="YOUR_API_KEY"/>

    <uses-library android:name="org.apache.http.legacy" android:required="false"/>

    <!-- react-native-geolocation -->
    <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
    ```

    root `build-gradle`

    ```
    // react-native-maps
    ext {
        playServicesVersion = "17.0.0"
    }
    ```

    app/build.gradle

    ```
    // react-native-vector-icons
    apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"
    ```

- [ ] Features

  - [ ] Home
  - [ ] Masuk
  - [ ] Daftar

  - [ ] Top Navigation Bar:
    - [ ] Beranda
      - [ ] Konten buat kamu
    - [ ] Chat
  - [ ] Profilku
    - [ ] Ubah Profil
  - [ ] Bepergian dan pengiriman
    - [ ] GoRide, GoCar reuseable components:
      - [ ] Modal:
        - [ ] Where would you like to go?
        - [ ] Select via view map
        - [ ] Set pickup location / Set lokasi tujuan
        - [ ] Order GoRide / GoCar
    - [ ] GoSend
      - [ ] Where do you want to send a package?
      - [ ] Intercity
      - [ ] GoSend reuseable components:
        - [ ] Modal:
          - [ ] Detail pengiriman paket / Detail pengambilan paket
          - [ ] Detail paket
          - [ ] Order

- [ ] Navigator

  - [ ] StackNavigator `headerShown=false`
    - [ ] Home
    - [ ] Masuk
    - [ ] Daftar
    - [ ] GoSend `options={{ title: 'GoSend' }}`
      - [ ] KotaTujuan `options={{ title: 'Kota Tujuan' }}`
      - [ ] MauKirimPaketKemana `options={{ title: 'Mau kirim paket ke mana?' }}`
    - [ ] GoSend reuseable components
      - [ ] Detail pengiriman paket / Detail pengambilan paket
      - [ ] Detail paket
      - [ ] Order
    - [ ] Ubah Profil `options={{ title: 'Ubah Profil' }}`
    - [ ] GoCar, GoRide `const { service } = route.params`
    - [ ] GoRide, GoCar reuseable component `options={{ headerLeft: null }}`
      - [ ] Where would you like to go?
      - [ ] Select via view map
      - [ ] Set pickup location / Set lokasi tujuan
      - [ ] Order GoRide / GoCar

    - [ ] MaterialTopTabNavigator
      - [ ] BottomTabNavigator
        - [ ] Beranda
      - [ ] Chat
        - [ ] Chat Room
      - [ ] Profilku `options={{ title: 'Profileku' }}`

- [x] Library

  - [x] [Geolocation v2.0.2](https://github.com/react-native-community/react-native-geolocation)
  - [x] [react-native-maps v0.27.1](https://github.com/react-native-community/react-native-maps)
  - [x] [React Navigation v5.x](https://reactnavigation.org/versions)
    - [x] [@react-navigator/native](https://reactnavigation.org/docs/getting-started/)
    - [x] [@react-navigation/material-top-tabs](https://reactnavigation.org/docs/material-top-tab-navigator/)
    - [x] [@react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator/)
    - [x] [@react-navigation/stack](https://reactnavigation.org/docs/stack-navigator)
  - [x] [React Native Snap Carousel v3.9.1](https://github.com/archriss/react-native-snap-carousel)
  - [x] [Animatable v1.3.3](https://github.com/oblador/react-native-animatable)
  - [x] [React Native Vector Icons v7.1.0](https://github.com/oblador/react-native-vector-icons)
  - [x] [@reduxjs/toolkit](https://redux-toolkit.js.org/introduction/quick-start)
  - [x] [@react-native-community/async-storage](https://react-native-community.github.io/async-storage/docs/usage)

- [ ] API
  - [ ] [News API => Konten buat kamu](https://newsapi.org/)
  - [ ] [JSONPlaceholder => Konten buat kamu (development)](https://jsonplaceholder.typicode.com/)
