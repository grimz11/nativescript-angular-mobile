
import { Component, OnInit } from '@angular/core';
import {Page} from 'tns-core-modules/ui/page';
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { Router } from '@angular/router';
import {GroceryService} from '../shared/grocery/grocery.service';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    providers:[GroceryService]
})
export class ListComponent implements OnInit{ 
    public grocerylists = ['apple 🍎','banna 🍌', 'rose 🌹', 'grapes 🍇', 'mango 🥭', 'monkey 🐒', 'orange 🍊'];
    public prevGroceryLists = [];
    public searchPhrase: string;
    public searchResult: string;
    public fetchedGrocery: any;
    public filteredResult = {};
    constructor(private page: Page, private router: Router, private gs: GroceryService){

    }
    public ngOnInit() {
        this.page.actionBarHidden = true;
        this.prevGroceryLists = this.grocerylists;
        this.router.navigate(["/menu"]);
        this.extractData();

    }

    extractData() {
        this.gs.getGrocery()
            .subscribe(result => {
              [result].forEach( (res) => {
                this.fetchedGrocery = res;
               });
            //    this.filteredResult = this.fetchedGrocery.forEach((res:any) => {
            //        res.is_published === true ?  res : '';
            //    });                   
            }, (error) => {
                console.log(error);
            });
    }

    searchTap() {
        this.grocerylists.forEach(res => {
            if(res.includes(this.searchPhrase)) this.grocerylists = [res];
        });
    }

    onTextChanged(args:any) {
        const searchBar = args.object as SearchBar;
    }

    onClear() {
        this.gs.getGrocery();
        this.grocerylists = this.prevGroceryLists;
    }
    searchBarLoaded(args) {
        const focusToGrid:SearchBar = <SearchBar>this.page.getViewById('focus-grid');
        focusToGrid.focus();
    }
    addToBag() {
       
    }
}