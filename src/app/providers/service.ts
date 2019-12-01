import { Injectable } from '@angular/core';

import { Api } from './api';


@Injectable()
export class Provider {
    constructor(public api: Api) {}
    query(endpoint: string, params?: any): any {
        return this.api.get(endpoint, params);
    }
    search(query: string) {
        if (query.length > 2) {
           /* const filter = this.queryToFilter(query);
            console.log(filter)
            return cities.filter(cityItem => {
                
                for (const key in filter) {
                    if (cityItem[key] === undefined || !cityItem[key].includes(filter[key])) {
                        return false;
                    }
                    console.log(cityItem[key])
                }
                return true;
            });  */
           // let res = this.api.getFeed();
        }
    }
    getFeed(topicsArray):any{
        return this.api.getFeed(topicsArray);
      }
    queryToFilter(query: string) {
        const [name, country] = query.split(',').map((item) => item.trim());
        const filter = {name, country};
        Object.keys(filter).forEach(key => filter[key] === undefined && delete filter[key]);
        return filter;
    }
}
