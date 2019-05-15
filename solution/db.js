// fill in this class object if you want to use local object to store data
// if you use localstorge or mongodb, ignore this file
class UrlGenerator {
  constructor(dataStore = {}) {
    // initialize class variable to store gist data
    this.dataStore = dataStore;
  }

  // use current date as unique url
  generateUrl() {
    // return current date
    let url = Date.now();
    return url;
  }

  // store gist data
  // data contain: url, title, snippet
  storeGist(title, snippet) {
    // build gist data with url, title, and snippet
    let url = this.generateUrl()
    this.dataStore[url] = { title, snippet }
  }

  // get gist object base on given url
  getGist(url) {
    // return gist object
    console.log("url: ", url, ", data stored: ", this.dataStore)
    if (this.dataStore[url]) {
      return this.dataStore[url]
    }
    return "didnt find anything"
  }
}

// other file use this class instance to store and get gist
let urlModel = new UrlGenerator({})

// export this class instance
module.exports = {
  urlModel
}
