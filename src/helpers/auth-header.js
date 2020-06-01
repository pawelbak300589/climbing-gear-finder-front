export const authHeader = (state) => {
    // return authorization header with auth token
    const currentUser = state.auth.currentUser;
    if (currentUser && currentUser.access_token) {
        return { Authorization: `${currentUser.token_type} ${currentUser.access_token}` };
    } else {
        return {};
    }
};
