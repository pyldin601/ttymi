// @flow strict
import { Duplex } from 'stream';
import { Subject, Observable, Observer } from 'rxjs';

export function duplexToObservable(duplex: Duplex, writable$: Subject<any>): Observable<any> {
  return Observable.create((observer: Observer<any>) => {
    const subscription = writable$.subscribe(chunk => {
      duplex.write(chunk, (err: Error) => {
        if (err) {
          observer.error(err);
          subscription.unsubscribe();
        }
      });
    });

    duplex.on('data', chunk => observer.next(chunk));

    duplex.on('end', () => {
      observer.complete();
      subscription.unsubscribe();
    });

    duplex.on('error', (err: Error) => {
      observer.error(err);
      subscription.unsubscribe();
    });
  });
}
