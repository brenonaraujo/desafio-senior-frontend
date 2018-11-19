import { Injectable } from '@angular/core';
import { Item } from 'src/app/shared/models/item.model';

@Injectable()
export class ItemsService {
    items: Item[];

    constructor() {
        // Verificar se o Item (item) ja existe se nao cria-o
        if (localStorage.getItem('items') === null) {
            localStorage.setItem('items', JSON.stringify([]));
        }
    }

    public saveItem(item: Item): Promise<Item> {
        return new Promise((resolve, reject) => {
            try {
                this.items = JSON.parse(localStorage.getItem('items'));
                this.items.push(item);
                localStorage.setItem('items', JSON.stringify(this.items));
                resolve(item);
            } catch (error) {
                reject(error);
            }
        });
    }

    public getItems(): Promise<Item[]> {
        return new Promise((resolve, reject) => {
            try {
                resolve(JSON.parse(localStorage.getItem('items')));
            } catch (error) {
                reject(error);
            }
        });
    }

    public removeItem(items: Item[], item: Item): Promise<Item[]> {
        return new Promise((resolve, reject) => {
            try {
                const index = items.indexOf(item);
                items.splice(index, 1);
                localStorage.setItem('items', JSON.stringify(items));
                resolve(items);
            } catch (error) {
                reject(error);
            }
        });
    }

    public getItem(index: number): Promise<Item> {
        return new Promise((resolve, reject) => {
            try {
                const storage = JSON.parse(localStorage.getItem('items'));
                const item = storage[index];
                resolve(item);
            } catch (error) {
                reject(error);
            }
        });
    }

    public updateItem(index: number, item: Item): Promise<Item> {
        return new Promise((resolve, reject) => {
            try {
                const storage = JSON.parse(localStorage.getItem('items'));
                storage[index] = item;
                localStorage.setItem('items', JSON.stringify(storage));
                resolve(item);
            } catch (error) {
                reject(error);
            }
        });
    }

}
