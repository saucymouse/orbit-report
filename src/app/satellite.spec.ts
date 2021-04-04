import { Satellite } from './satellite';

describe('Satellite', () => {
  it('should create an instance', () => {
    expect(new Satellite('string', 'string', 'string', 'string', true)).toBeTruthy();
  });
});
