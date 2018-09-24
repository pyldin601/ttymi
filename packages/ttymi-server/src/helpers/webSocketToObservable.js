// @flow
import type WebSocket from 'ws';
import { Observable, type Observer, Subject } from 'rxjs';

export function websocketToObservable(ws: WebSocket, input$: Subject<string>): Observable<string> {
  return Observable.create((observer: Observer<string>) => {
    ws.on('message', msg => observer.next(msg));
    ws.on('close', () => observer.complete());
    ws.on('error', err => observer.error(err));

    const inputSubscription = input$.subscribe(data => ws.send(data));

    return () => {
      ws.close();
      inputSubscription.unsubscribe();
    };
  });
}
