import { observable, action } from 'mobx'

class testStore {
    @observable userList

    constructor() {
        this.userList = []
    }

    @action.bound
    addUser(newUser) {
        this.userList.push(newUser)
    }
}

export default testStore