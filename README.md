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
."/pollution"
. params: {lat(Number), lon(Number), key(String)}
.Exemple: "{base_url}/pollution?lat={latitude}&lon={longitude}&key={key}"
```

```
Get max pollution :
."/max_pollution"
.Exemple: "{base_url}/max_pollution"
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
To use local DB => npm start or yarn start
To use cluster DB => npm run prod or yarn run prod
```

4. **Run the tests:**

```
 npm jest or yarn jest
```
