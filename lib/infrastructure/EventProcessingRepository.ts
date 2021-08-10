// import all interfaces
// that class only can be extended
/**
 * This class represents the event.
 */
abstract class EventProcessingRepository<T> {
  /**
   * This class represents the event.
   * @param {T} item
   */
  write(item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  /**
   * Adds two numbers together.
   * @param {T} item sum of the two numbers.
   */
  delete(item: T): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
  /**
   * Adds two numbers together.
   * @param {T} item sum of the two numbers.
   */
  get(item: T): Promise<T[]> {
    throw new Error('Method not implemented.');
  }
}
export {EventProcessingRepository};
