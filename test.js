const { ref } = require('vue');
const { deepUnref } = require('./index');

describe('deepUnref', () => {
  it('should unref an object', () => {
    expect(deepUnref({ abc: ref('def') }))
      .toStrictEqual({ abc: 'def' });
  });

  it('should unref a ref', () => {
    expect(deepUnref(ref('abc')))
      .toStrictEqual('abc');
  });

  it('should unref a deeply-nested object', () => {
    expect(deepUnref({ abc: { def: { ghi: ref('jkl') } } }))
      .toStrictEqual({ abc: { def: { ghi: 'jkl' } } });
  });

  it('should handle an object with a null value', () => {
    expect(deepUnref({ abc: null }))
      .toStrictEqual({ abc: null });
  });

  it('should handle an object with an undefined value', () => {
    expect(deepUnref({ abc: undefined }))
      .toStrictEqual({ abc: undefined });
  });

  it('should do nothing to null', () => {
    expect(deepUnref(null))
      .toStrictEqual(null);
  });

  it('should do nothing to undefined', () => {
    expect(deepUnref(undefined))
      .toStrictEqual(undefined);
  });

  it('should do nothing to an unreffed object', () => {
    expect(deepUnref({ abc: 'def' }))
      .toStrictEqual({ abc: 'def' });
  });

  it('should ignore unreffed non-objects', () => {
    expect(deepUnref('abc'))
      .toStrictEqual('abc');
  })

  it('should unref objects with reffed arrays in them', () => {
    expect(deepUnref({ abc: ref(['def', 'ghi']) }))
      .toStrictEqual({ abc: ['def', 'ghi'] });
  });

  it('should ignore objects with unreffed arrays in them', () => {
    expect(deepUnref({ abc: ['def', 'ghi' ] }))
      .toStrictEqual({ abc: ['def', 'ghi' ] });
  });

  it('should unref arrays of refs', () => {
    expect(deepUnref([ref('abc'), ref('def'), ref('ghi')]))
      .toStrictEqual(['abc', 'def', 'ghi']);
  });

  it('should unref reffed arrays of refs', () => {
    expect(deepUnref(ref([ref('abc'), ref('def'), ref('ghi')])))
      .toStrictEqual(['abc', 'def', 'ghi']);
  });

  it('should ignore unreffed arrays', () => {
    expect(deepUnref(['abc', 'def', 'ghi']))
      .toStrictEqual(['abc', 'def', 'ghi']);
  });
});