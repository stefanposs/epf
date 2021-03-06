interface IWrite<T> {
    write(item:T): Promise<boolean>;
    delete(item:T): Promise<boolean>;
    update(item:T): Promise<boolean>;
}
export {IWrite};
