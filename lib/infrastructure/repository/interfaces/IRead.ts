interface IRead<T>{
    get(item:T): Promise<T[]>;
}
export {IRead};
