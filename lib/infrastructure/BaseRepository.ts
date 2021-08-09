// import all interfaces
import { IWrite } from '../infrastructure/IWrite'
import { IRead } from '../infrastructure/IRead'

// that class only can be extended
abstract class BaseRepository<T> implements IWrite<T>, IRead<T> {
  write (_item: T): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  delete (_item: T): Promise<boolean> {
    throw new Error('Method not implemented.')
  }

  get (_item: T): Promise<T[]> {
    throw new Error('Method not implemented.')
  }
}

export { BaseRepository }