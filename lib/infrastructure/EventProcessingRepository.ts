// import all interfaces

// that class only can be extended
abstract class EventProcessingRepository<T> {
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

export { EventProcessingRepository }