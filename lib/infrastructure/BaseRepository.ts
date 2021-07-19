// import all interfaces
import { IWrite } from '../infrastructure/IWrite'
import { IRead } from '../infrastructure/IRead'

// that class only can be extended
export abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  create (item: T): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  put (id: string, item: T): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  delete (id: string): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  find (item: T): Promise<T[]> {
    throw new Error('Method not implemented.')
  }

  findOne (id: string): Promise<T> {
    throw new Error('Method not implemented.')
  }
}
