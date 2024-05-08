import { ReactNode } from "react";


// for category
export interface IRecord {
    id?: number;
    title: string;
    prefix: string;
    img: string;
}

// for products
export interface IProduct {
    id?: number;
    title: string;
    img: string;
    price : string;
    cat_prefix?: string;
    quantity?: number;
    max? : number;
}



export enum ILoadingState {
    IDLE = "IDLE",
    FULLFIELD = "FULLFIELD",  // SUCCESSFUL
    PENDING = "PENDING",
    FAILED = "FAILED",
}

// loading props

export interface ILoadingprops {
    status : ILoadingState;
    error : null | string;
    // i will pass components [products , categories , ...] as children 
    children : React.ReactNode;

}

// grid list types
export type TGridListType<T> = {
    records : T[];
    renderItem : (record : T) => React.JSX.Element;
}

