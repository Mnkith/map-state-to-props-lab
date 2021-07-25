export default function manageUsers(state = {
  users: []
}, action) {
  switch (action.type) {
    case 'ADD_USER':
      console.log('adding ', action.user);
      return {
        ...state,
        users: [...state.users, action.user]
      }
    case 'UPDATEINPUT':
      console.log(state);
      return {
        ...state,
        [action.event.target.id]: action.event.target.value
      }



    default:
      return state;
  }
};
