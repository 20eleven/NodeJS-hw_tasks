import { v4 as uuid4 } from 'uuid';
import {
    createUserData,
    deleteUserData,
    getAutoSuggestUsersData,
    readUserData,
    readUsersData,
    updateUserData
} from '../data-access';
import { UserIdsType, UserIdType, UserModelStaticType, UserModelType, UserType } from '../types/users';

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

    readUser(id: UserIdType, withPassword?: boolean) {
        return readUserData(this.userModel, id, withPassword);
    }

    readUsers(ids: UserIdsType) {
        return readUsersData(this.userModel, ids);
    }

    updateUser(userDTO: UserType, id: UserIdType) {
        return updateUserData(this.userModel, userDTO, id);
    }

    deleteUser(user: UserModelType) {
        return deleteUserData(user);
    }

    getAutoSuggestUsers(loginSubstring: string, limit: number) {
        return getAutoSuggestUsersData(this.userModel, loginSubstring, limit);
    }
}
