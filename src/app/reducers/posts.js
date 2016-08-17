// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy current state

function posts(state = [], action) {
  console.log("Reducers Posts");
  console.log(state, action);
  return state;
}

export default posts;
