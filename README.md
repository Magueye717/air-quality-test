# AIR QUALITY

#### TECHNO:

```
Node Js, JavaScript, Mongo DB
```

#### Description:

```
A REST API responsible for exposing “the air quality information” of a nearest city
to GPS coordinates using iqair
```

### Documentation:

**Base_url:**

```
http://127.0.0.1:8000/api/v1
```

**Endpoints:**

```
Description : Make a call to IQAIR API to get “air quality “ for the given zone
route : "/pollution":
Params : {lat: value, lon: value}
Exemple: "{base_url}/pollution?lat={latitude}&lon={longitude}"

Description : Get datetime( date and time ) where the Paris zone is the most polluted
route : "/max_pollution"
Exemple: "{base_url}/max_pollution"
```

#### Setup the project

1. **Clone the project:**

```
git clone git@github.com:Magueye717/air-quality-test.git
cd air-quality-test
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
