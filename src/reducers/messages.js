import { getMessages } from '../static';

export default function messages(state=getMessages(10), action){
  return state;
}
