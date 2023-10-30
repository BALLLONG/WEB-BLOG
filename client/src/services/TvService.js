import Api from '@/services/Api'


export default {
    index(search) {
        return Api().get('tvs')
    },
    show(tvId) {
        return Api().get('tv/' + tvId)
    },
    post(tv) {
        return Api().post('tv/', tv)
    },
    put(tv) {
        return Api().put('tv/' + tv.id, tv)
    },
    delete(tv) {
        return Api().delete('tv/' + tv.id, tv)
    },
}
