# AIR QUALITY

#### Description:

A REST API responsible for exposing “the air quality information” of a nearest city to GPS coordinates using iqair

### Documentation:

**Base_url:**

```
http://127.0.0.1:8000/api/v1
```

**Endpoints:**

    ```
    Description : Make a call to IQAIR API to get “air quality “ for the given zone
    route : "/pollution":
    Params : {lat: value, lon: value, key: value}
    Exemple: "{base_url}/pollution?lat={latitude}&lon={longitude}&key={key}"
    ```

    ```
    Description : Get datetime( date and time ) where the paris zone is the most polluted
    route : "/max_pollution"
    Exemple: "{base_url}/max_pollution"
    ```

#### Steps to run the project

1. **Install the dependencies:**

```
git clone git@github.com:Magueye717/air-quality-test.git
```

2. **Install the dependencies:**

```
npm install or yarn install
```

3. **Run the project:**

```
 npm start or yarn start
```

4. **Run the tests:**

```
 npm jest or yarn jest
```
