

module.exports = {

  addHttp: (url) => {
    let substr = url.substring(0, 3);
    if (substr === 'www') {
      return 'http://' + url;
    } else {
      return url;
    }
  }

};