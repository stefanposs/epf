interface IWrite<T> {
    create(item: T): Promise<boolean>;
    put(id: string, item: T): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}

export { IWrite }
