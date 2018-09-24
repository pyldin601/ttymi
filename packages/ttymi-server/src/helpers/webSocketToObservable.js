// @flow
import type WebSocket from 'ws';
import { Observable, type Observer, Subject } from 'rxjs';

export function websocketToObservable(ws: WebSocket, input$: Subject<string>): Observable<string> {
  const subscription = input$.subscribe(data => ws.send(data));
  return Observable.create((observer: Observer<string>) => {
    ws.on('message', msg => observer.next(msg));
    ws.on('close', () => {
      subscription.unsubscribe();
      observer.complete();
    });
    ws.on('error', err => {
      subscription.unsubscribe();
      observer.error(err);
    });
  });
}
