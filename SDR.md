### Software Development Requirements Analysis

- [ ] Client's Environment

  ```
  Android API 25
  React Native 6.0.3
  ```

  - [ ] Android

    AndroidManifest.xml

    ```
    <!-- react-native-maps -->
    <meta-data
      android:name="com.google.android.geo.API_KEY"
      android:value="YOUR_API_KEY"/>
    
    <uses-library android:name="org.apache.http.legacy" android:required="false"/>
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

  - [ ] Top Navigation Bar:
    - [ ] Beranda
      - [ ] Konten buat kamu
    - [ ] Chat
  - [ ] Bepergian dan pengiriman
    - [ ] GoRide, GoCar, GoBlueBird reuseable components:
      - [ ] Modal:
        - [ ] Where would you like to go?
        - [ ] Select via view map
          - [ ] Set pickup location / Set lokasi tujuan
        - [ ] Order GoRide / GoCar, GoBlueBird
    - [ ] GoSend
      - [ ] Where do you want to send a package?
      - [ ] Intercity
      - [ ] GoSend reuseable components:
        - [ ] Modal:
          - [ ] Detail pengiriman paket / Detail pengambilan paket
          - [ ] Detail paket
          - [ ] Order

- [ ] Library

  - [ ] [Geolocation v2.0.2](https://github.com/react-native-community/react-native-geolocation)
  - [ ] [react-native-maps v0.27.1](https://github.com/react-native-community/react-native-maps)
  - [ ] [React Navigation v5.x](https://reactnavigation.org/versions)
    - [ ] [@react-navigation/stack](https://reactnavigation.org/docs/stack-navigator)
  - [ ] [React Native Snap Carousel v3.9.1](https://github.com/archriss/react-native-snap-carousel)
  - [ ] [Animatable v1.3.3](https://github.com/oblador/react-native-animatable)
  - [ ] [React Native Vector Icons v7.1.0](https://github.com/oblador/react-native-vector-icons)

- [ ] API
  - [ ] [News API => Konten buat kamu](https://newsapi.org/)
  - [ ] [JSONPlaceholder => Konten buat kamu (development)](https://jsonplaceholder.typicode.com/)
