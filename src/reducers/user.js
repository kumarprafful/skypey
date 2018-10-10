import {generateUser} from '../static';

export default (state = generateUser(), action) => {
  return state;
}
