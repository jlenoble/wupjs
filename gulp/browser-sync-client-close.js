const browserSyncClientClose = `
((window, browserSync) => {
  var inhibit = false;

  browserSync.socket.on('inhibit-close',
    () => {
      inhibit = true;
    }
  );

  browserSync.socket.on('disconnect',
    () => {
      if (!inhibit) {
        window.close();
      }
      inhibit = false;
    }
  );
})(window, ___browserSync___);
`;

export default browserSyncClientClose;
