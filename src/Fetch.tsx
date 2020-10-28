import { GetCountryMoreInfo, GetCountryList, User } from "./Interfaces";

// const url = "https://restcountries.eu/rest/v2/";
const url = "http://localhost:8080/api/";



export async function getCountryList({
  sort,
  searchString,
  handleResponse,
  limit,
  skip,
}: GetCountryList) {
  console.log(sort)
  const response = await fetch(
    url + "?search=" + `${searchString}&limit=${limit}&skip=${skip}&sort=${sort}`
  );
  const data = await response.json();
  handleResponse(data);
}

export async function getCountryMoreInfo({
  alpha2Code,
  handleResponse,
}: GetCountryMoreInfo) {
  const response = await fetch(
    url+'country/' + `${alpha2Code}`
  )
  const data = await response.json();
  
  handleResponse(data[0]);
}

export async function requestUserID(handleResponse: (data: User) => void) {
  const response = await fetch(url + "requestUserID")
  const data = await response.json()

  handleResponse(data)
}

export async function getUserData(handleResponse: (data: User) => void, userID: string) {
  const response = await fetch(url + "getUserData/"+ userID)
  const data = await response.json()

  handleResponse(data)
}

export async function userRemoveFlag(alpha: string, userID: string) {
  const response = await fetch(url + "userRemoveFlag/" + userID + "/" + alpha)
}

export async function userRemoveWish(alpha: string, userID: string) {
  const response = await fetch(url + "userRemoveWish/" + userID + "/" + alpha)
}

export async function userAddFlag(alpha: string, userID: string) {
  const response = await fetch(url + "userAddFlag/" + userID + "/" + alpha)
}

export async function userAddWish(alpha: string, userID: string) {
  const response = await fetch(url + "userAddWish/" + userID + "/" + alpha)
}
