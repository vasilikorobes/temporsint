  function openUrl(url) {
      exec(`start ${url}`, (err, stdout, stderr) => {
          if (err) {
              console.error(`Error opening URL: ${err}`);
              return;
          }
          console.log(`Opened URL successfully: ${url}`);
      });
  }
  