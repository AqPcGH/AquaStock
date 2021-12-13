import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Stock } from '../shared/models/stock.model';
import { Company } from '../shared/models/company.model';


const headers = new HttpHeaders({ 'Content-Type': 'application/json' })

@Injectable({
  providedIn: 'root'
})
export class StockService {

    private URL = `http://aquapacproductmanagement-env.eba-vhkrpxqq.us-east-2.elasticbeanstalk.com/api`;
    // private URL = 'http://localhost:4000/api'
    constructor(private http: HttpClient) { }

    getStock() {
        return this.http.get<any>(this.URL + '/view-stock');
    }

    postStock(stocks: Stock): Observable<any> {
        return this.http.post<any>(this.URL + '/add-stock', stocks);
    }

    fil(_id : string) : Observable<any> {
        return this.http.get(this.URL + `/c/${_id}`)
    }

    GetAStock(_id: any) : Observable<any> {
        return this.http.get(this.URL + `/stocks/${_id}`, )
    }

    deleteComp(company : Company) {
        return this.http.delete(this.URL + `/company/${company._id}`, { responseType: 'text'})
    }
    
    getCompanies() {
        return this.http.get<any>(this.URL + '/view-company');
    }

    getCompName(_id: any) {
        return this.http.get<any>(this.URL + `/viewCompany/${_id}`)
    }
    
    postCompanies(company: Company): Observable<any> {
        return this.http.post<any>(this.URL + '/add-company', company);
    }

    patchDescription(stocks: Stock): Observable<any> {
        return this.http.patch(this.URL + `/description/${stocks._id}`, stocks);
    }

    patchPack(stocks: Stock): Observable<any> {
        return this.http.patch(this.URL + `/packsize/${stocks._id}`, stocks);
    }

    patchQuantity(stocks: Stock) : Observable<any> {
        return this.http.patch(this.URL + `/quantity/${stocks._id}`, stocks);
    }

    patchMeasurement(stocks: Stock) : Observable<any> {
        return this.http.patch(this.URL + `/measurement/${stocks._id}`, stocks);
    }

    patchSG(stocks: Stock) : Observable<any> {
        return this.http.patch(this.URL + `/specificgravity/${stocks._id}`, stocks);
    }

    deleteStock(stocks: Stock) : Observable<any> {
        return this.http.delete(this.URL + `/stocks/${stocks._id}`, { responseType: 'text' });
    }

}