export function event<T>(event: string, stream: any) {
  return new Promise<T>((resolve, reject) => {
    stream.once('error', err => {
      reject(err);
      stream.removeListener(event, resolve);
    });
    stream.once(event, data => {
      resolve(data);
      stream.removeListener('error', reject);
    });
  });
}
