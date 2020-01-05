import { returnNumber100, setTimeoutReturn100, callbackTest, callbackTimeoutTest, asyncReturn100} from './callbackAndAsync'
expect.extend({
  toCheckRange: (recieve, bottom, top) => {
    const pass = recieve > bottom && recieve < top
    return {
      pass,
      message: () => pass ? `${recieve} is between ${bottom} and ${top}~` : `${recieve} is out of range ${bottom} and ${top}!`
    }
  }
})

test('should run correct', () => {
  expect(returnNumber100()).toCheckRange(10, 101)
  expect(returnNumber100()).not.toCheckRange(10, 99)
  expect(returnNumber100()).toBeGreaterThan(99);
  expect(returnNumber100()).toBeLessThan(101);
  expect(returnNumber100()).toBeTruthy();
  expect(returnNumber100()).not.toBeFalsy();
});

test('should run correct', async () => {
  const number = await setTimeoutReturn100()
  expect(number).toBe(100);
});
// 等价于
test('should run correct', () => {
  return expect(setTimeoutReturn100()).resolves.toBe(100)
});


test('should run correct', () => {
  const fn = jest.fn().mockReturnValue(100)
  callbackTest(fn)
  expect(fn).toHaveBeenCalledTimes(1);
});

test('should run correct', done => {
  const fn = jest.fn().mockReturnValue(100)
  callbackTimeoutTest(fn)
  setTimeout(() => {
    expect(fn).toHaveBeenCalledTimes(1)
    done()
  }, 2000)
});

test('should return correct',async  () => {
  const number = await asyncReturn100()
  expect(number).toBe(100);
});

