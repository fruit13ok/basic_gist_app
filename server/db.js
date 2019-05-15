// fill in this class object if you want to use local object to store data
// if you use localstorge or mongodb, ignore this file
class UrlGenerator {
  constructor(dataStore = {}) {
    // initialize class variable to store gist data
    
  }

  // use current date as unique url
  generateUrl() {
    // return current date
    
  }

  // store gist data
  // data contain: url, title, snippet
  storeGist(title, snippet) {
    // build gist data with url, title, and snippet
    
  }

  // get gist object base on given url
  getGist(url) {
    // return gist object
    
  }
}

// other file use this class instance to store and get gist
let urlModel = new UrlGenerator({})

// export this class instance
module.exports = {
  urlModel
}
