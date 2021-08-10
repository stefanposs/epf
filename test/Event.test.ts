import {Event} from '../lib/models/Event';

describe('Event', () => {
  it('should return sum of two numbers', () => {
    const event = new Event('kknkn', '', '');

    expect(event.uuid).toStrictEqual('kknkn');
  });
});
