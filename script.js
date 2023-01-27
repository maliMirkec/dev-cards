let uri = window.location.search.substring(1)
let params = new URLSearchParams(uri)
const details = params.get('details') ? params.get('details').split(',') : ''
const skills = params.get('skills') ? params.get('skills').split(',') : ''
const weakness = params.get('weakness') ? params.get('weakness').split(',') : ''

const app = Vue.createApp({
  data() {
    return {
      hideForm: params.get('no-form') || true,
      name: params.get("name") || 'Silvestar Bistrović',
      position: params.get("position") || 'Web developer',
      image: {
        src: params.get("imagesrc") || 'https://res.cloudinary.com/starbist/image/upload/v1638533818/avatar-1024-green_jxswsw.jpg',
        alt: params.get("imagealt") || 'Silvestar Bistrović profile image in green hue.'
      },
      details: {
        list: details || ['1986', 'Osijek, Croatia', 'MSc in EE']
      },
      skills: {
        list: skills || ['HTML', 'CSS', 'JavaScript'],
        experience: params.get("experience") || '10+ years',
        summary: params.get("summary") || 'Able to apply design in any dev environment.'
      },
      weakness: {
        list: weakness || ['TypeScript', 'JavaScript frameworks', 'GraphQL']
      },
      url: {
        href: params.get("urlhref") || 'https://www.silvestar.codes',
        text: params.get("urltext") || 'silvestar.codes'
      }
    }
  },
  methods: {
    updateWeakness() {
      console.log(this.$event.target);

      return true
    }
  }
})
