import { Injectable } from "@angular/core";
import {
    HttpClient,
    HttpHeaders,
    HttpErrorResponse
} from "@angular/common/http";


@Injectable()
export class GroceryService {
    constructor(private http: HttpClient) {
        console.log("Grocery");
    }

    public getGrocery(){
        const xGet = this.http.get("https://1f4b35b9.ngrok.io/api/groceries/",
        {headers: this.getCommonHeaders()}
        )
        return xGet;
    }

    private getCommonHeaders() {
        return new HttpHeaders({
            "Content-Type": "application/json"
        });
    }
}
