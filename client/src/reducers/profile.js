import { GET_PROFILE, PROFILE_ERROR } from "../actions/types";

const initalstate = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

export default function (state = initalstate, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };

    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
      };

    default:
      return { state };
  }
}
