import { describe, expect, it } from "vitest";
import { deepMerge } from "./deepMerge";


describe('Deep Merge', () => {
    it('should be able to merge two objects', () => {
        expect(deepMerge({
            name: 'Vasily'
        }, {
            surname: 'Tserkin'
        })).toEqual({
            name: 'Vasily',
            surname: 'Tserkin'
        })
    })


    it.skip('should be able to merge deeply', () => {
        expect(deepMerge({
            name: 'Vasily',
            surname: 'Tserkin',
            address: {
                city: 'Warsaw',
                country: 'Poland',
                registered: true,
            }
        }, {
            address: {
                city: 'Minsk',
                country: 'Belarus',
                zipCode: '220000',
            }
        })).toEqual({
            name: 'Vasily',
            surname: 'Tserkin',
            address: {
                city: 'Minsk',
                country: 'Belarus',
                zipCode: '220000',
                registered: true,
            }
        })
    });

    it.skip('should be able to merge arrays', () => {
        expect(deepMerge({
            name: 'Vasily',
            surname: 'Tserkin',
            address: {
                city: 'Minsk',
                country: 'Belarus',
                zipCode: '220000',
                registered: true,
            },
            children: [{
                name: 'Katya',
                surname: 'Tserkina',
                sex: 'Male'
            }]
        }, {
            children: [{
                sex: 'Female'
            }, {
                name: 'Ales',
                surname: 'Tserkin',
                sex: 'Male'
            }]
        })).toEqual({
            name: 'Vasily',
            surname: 'Tserkin',
            address: {
                city: 'Minsk',
                country: 'Belarus',
                zipCode: '220000',
                registered: true,
            },
            children: [{
                name: 'Katya',
                surname: 'Tserkina',
                sex: 'Female'
            },{
                name: 'Ales',
                surname: 'Tserkin',
                sex: 'Male'
            }]
        })
    })
});