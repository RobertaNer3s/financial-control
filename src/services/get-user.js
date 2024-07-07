import { API } from "../configs/api";

export async function getUser(){
    const response = await fetch(API);
    const user = await response.json();
    return user;
}