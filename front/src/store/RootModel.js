import { types, onSnapshot } from 'mobx-state-tree';

import UserModel from './UserModel';

const Root = types.model('Root', { user: UserModel });

export default Root;
