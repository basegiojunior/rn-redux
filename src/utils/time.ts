export function sleep(ms: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve as () => void, ms);
  });
}
