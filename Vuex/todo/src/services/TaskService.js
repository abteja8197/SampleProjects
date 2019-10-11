import Api from '@/services/api'

export default {
  fetchPosts () {
    return Api().get('tasks')
  }
}