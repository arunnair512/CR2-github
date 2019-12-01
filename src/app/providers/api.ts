import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BASE_URL, TOKEN } from '../constants/api';

/**
 * Api is a generic REST Api handler. Set your API url first.
 */
@Injectable()
export class Api {

  constructor(public http: HttpClient) {
  }

  get(endpoint: string, params?: any) {
    let paramsQuery = '?';
    for (let k in params) {
      paramsQuery += `&${k}=${params[k]}`;
    }
    paramsQuery += '&mode=json';
    paramsQuery += `&appid=${TOKEN}`;
    return this.http.get(BASE_URL + '/' + endpoint + paramsQuery);
  }

  getFeed(topicsArray):any{

    let topics="";
    console.log(topicsArray)
/* let topicsArray=["react","boilerplate","starter"] */
    for(let i in topicsArray){
      topics+="topic:"+topicsArray[i]+"&";
    }

    console.log(topics)
     

    return this.http.get("https://api.github.com/search/repositories?q="+topics+"sort=stars&page=1&order=desc");
  }

}