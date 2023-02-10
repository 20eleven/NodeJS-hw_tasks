import { v4 as uuid4 } from 'uuid';
import { createUserData, deleteUserData, getAutoSuggestUsersData, readUserData, readUsersData, updateUserData } from '../data-access';
import { UserModelStaticType, UserModelType, UserType } from '../types/users';

export default class UserService {
    userModel: UserModelStaticType;
    constructor(userModel: UserModelStaticType) {
        this.userModel = userModel;
    }

    createUser(userDTO: UserType) {
        userDTO.id = uuid4();
        userDTO.isDeleted = false;

        return createUserData(this.userModel, userDTO);
    }

    readUser(id: string) {
        return readUserData(this.userModel, id);
    }

    readUsers(ids: string[]) {
        return readUsersData(this.userModel, ids);
    }

    updateUser(userDTO: UserType, id: string) {
        return updateUserData(this.userModel, userDTO, id);
    }

    deleteUser(user: UserModelType) {
        return deleteUserData(user);
    }

    getAutoSuggestUsers(loginSubstring: string, limit: number) {
        return getAutoSuggestUsersData(this.userModel, loginSubstring, limit);
    }
}
