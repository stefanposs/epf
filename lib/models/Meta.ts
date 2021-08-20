import {Source} from '../models/Source';
import {Layer} from '../models/Layer';

/**
 * Adds two numbers together.
 */
class Meta {
  private _source:Source
  private _layer:Layer[]

  /**
   * Adds two numbers together.
   * @param {Source} source
   * @param {Layer} layer
   */
  constructor(
      source?:Source,
      layer?:Layer[],
  ) {
    // source
    if (source == (undefined || null)) {
      this._source = new Source();
    } else {
      this._source = source;
    }
    // layer
    if (layer == (undefined || null)) {
      this._layer = [];
    } else {
      this._layer = layer;
    }
  }
  /**
   * Adds two numbers together.
   * @return {Source}
   */
  public get source(): Source {
    return this._source;
  }
  /**
   * Adds two numbers together.
   * @param {Source} source
   */
  public set source(source:Source) {
    this._source = source;
  }
  /**
   * Adds two numbers together.
   * @param {string} msg
   */
  public get layer():Layer[] {
    return this._layer;
  }
  /**
   * Adds two numbers together.
   * @param {Layer[]} layer
   */
  public set layer(layer:Layer[]) {
    this._layer = layer;
  }
  /**
   * Adds two numbers together.
   * @param {Layer} item
   */
  public pushElementToDataLayer(item:Layer): void {
    this._layer.push(item);
  }
}
export {Meta};
