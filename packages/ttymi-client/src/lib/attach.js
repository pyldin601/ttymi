const sendResize = (ws, cols, rows) => {
  ws.send(JSON.stringify({ type: 'resize', size: { cols, rows } }));
};

const sendInput = (ws, data) => {
  ws.send(JSON.stringify({ type: 'input', data }));
};

const bind = (xterm, ws) => {
  xterm.on('key', data => sendInput(ws, data));

  xterm.on('resize', size => {
    sendResize(ws, size.cols, size.rows);
  });

  sendResize(ws, xterm.cols, xterm.rows);
};

export default (xterm, ws) => {
  return new Promise((resolve, reject) => {
    ws.onmessage = ({ data }) => xterm.write(data);
    ws.onclose = ({ code, reason }) => resolve({ code, reason });
    ws.onerror = (err) => reject(err);

    bind(xterm, ws);
  });
};
