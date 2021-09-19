export const getUserss = (state) =>{
    return state.usersPage.users;
}

export const getPageSize = (state) =>{
    return state.usersPage.usersSize;
}

export const getTotalUsersCount = (state) =>{
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) =>{
    return  state.usersPage.currentPage;
}

export const getIsFetching = (state) =>{
    return  state.usersPage.isFetching;
}

export const getIsButtonProgress = (state) =>{
    return state.usersPage.isButtonProgress;
}