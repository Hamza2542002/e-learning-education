import { createContext, useContext, useReducer } from "react";

const users = [];
const AuthContext = createContext();
const initialState = {
  user: null,
  isAuth: false,
  isLoading: false,
  errorMessage: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "login/succed":
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case "login/failed":
      return {
        ...state,
        errorMessage: action.payload,
        user: {},
        isAuth: false,
      };
    case "signup/faild":
      return {
        ...state,
        errorMessage: action.payload,
        isAuth: false,
      };
    case "signup/succed":
      users.push(action.payload);
      return {
        ...state,
        errorMessage: "",
        user: action.payload,
        isAuth: true,
      };
    case "logout":
      return {
        ...state,
        user: {},
        isAuth: false,
      };

    default:
      break;
  }
}

function AuthProvider({ children }) {
  const [{ isAuth, isLoading, user }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function login(email, password) {
    console.log(email, password);
    if (!email || !password) return;
    const user = users?.filter((user) => user.email === email).at(0) ?? {};
    if (!user) {
      dispatch({ type: "login/faild", payload: "Email Not Found" });
      return;
    }
    if (user.password === password)
      dispatch({ type: "login/succed", payload: user });
  }

  function signup(email, password, name) {
    if (!email || !password || !name) return;
    const user = users?.filter((user) => user.email === email)[0];
    if (user) {
      dispatch({
        type: "signup/faild",
        payload: "User with this email have been already registered",
      });
      return;
    }
    const newUser = {
      name,
      email,
      password,
    };
    dispatch({ type: "signup/succed", payload: newUser });
  }

  function logout() {
    dispatch({ type: "logout" });
  }

  return (
    <AuthContext.Provider
      value={{ login, signup, logout, isAuth, isLoading, user }}
    >
      {children}
    </AuthContext.Provider>
  );
}

const useAuth = function () {
  const context = useContext(AuthContext);
  if (context === undefined) return;
  return context;
};

export { AuthProvider, useAuth };
