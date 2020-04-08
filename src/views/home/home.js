import axios from 'axios'
import Imageblock from '../../components/imageblock/index'

export default {
  name: 'home',
  components: {
    Imageblock
  },
  props: [],
  data () {
    return {
      posts: [],
      baseUrl: 'https://images-api.nasa.gov/search?q=earth',
      page: 1,
      perPage: 9,
      pages: []
    }
  },
  computed: {
    displayedPosts () {
      return this.paginate(this.posts)
    }
  },
  mounted () {

  },
  methods: {
    getPosts () {
      axios.get(this.baseUrl).then(
        response => {
          this.posts = response.data.collection.items
        //  console.log(response.data)
        }
      ).catch(
        response => {
          console.log(response)
        }
      )
    },

    setPages () {
      const numberOfPages = Math.ceil(this.posts.length / this.perPage)
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index)
      }
    },
    paginate (posts) {
      const page = this.page
      const perPage = this.perPage
      const from = (page * perPage) - perPage
      const to = (page * perPage)
      return posts.slice(from, to)
    }
  },
  watch: {
    posts () {
      this.setPages()
    }
  },
  created () {
    this.getPosts()
  }
}
