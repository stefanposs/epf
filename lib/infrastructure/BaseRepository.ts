/* eslint-disable @typescript-eslint/no-unused-vars */
// import all interfaces
import { IWrite } from '../infrastructure/IWrite'
import { IRead } from '../infrastructure/IRead'

// that class only can be extended
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  create (_item: T): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  put (_id: string, _item: T): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  delete (_id: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  find (_item: T): Promise<T[]> {
    throw new Error('Method not implemented.')
  }

  findOne (_id: string): Promise<T> {
    throw new Error('Method not implemented.')
  }
}
