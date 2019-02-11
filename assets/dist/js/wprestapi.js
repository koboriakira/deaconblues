const POST = 'http://koboriakira.com/wp-json/wp/v2/posts';
const PER_PAGE = 5;

let getUrl = (href, page) => {
  return `${POST}?page=${page}&per_page=${PER_PAGE}`;
  // if (array.length == 7) {
  //   var postId = array.slice(-1)[0];
  //   URL = `${POST}/${postId}`;
  //   this.visible = false;
  // }
}

let getPosts = (page) => {
  return new Promise((resolve, reject) => {
    let url = getUrl(location.href, page);
    console.log(url);
    (async () => {
      try {
        const res = await axios.get(url);
        resolve(res.data);
        this.posts = this.posts.concat(res.data);
        this.loading = false;
        this.textOfLinktNextPost = '次の記事を読む';
      } catch (e) {
        reject(e);
        console.log(e);
        this.empty();
      }
    })();
  });
}
