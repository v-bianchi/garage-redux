// TODO: add and export your own actions
const BASE_URL = "https://wagon-garage-api.herokuapp.com/";

export const FETCH_CARS = 'FETCH_CARS';
export const CREATE_CAR = 'CREATE_CAR';

export function createCar(garageSlug, body, callback) {
  const url = `${BASE_URL}/${garageSlug}/cars`;
  const request = fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  }).then(response => response.json())
    .then(callback);

  return {
    type: CREATE_CAR,
    payload: request
  };
}

export function fetchCars(garageSlug) {
  const url = `${BASE_URL}/${garageSlug}/cars`;
  const promise = fetch(url).then(r => r.json());

  return {
    type: FETCH_CARS,
    payload: promise // Will be resolved by redux-promise
  };
}
