export const selectUserModule = (state: any) => state.user;

export const selectUserById = (state: any, {userId}: { userId: string }) =>
    selectUserModule(state).entities[userId];

export const selectUserIds = (state: any) => selectUserModule(state).ids;

export const selectUsers = (state: any) => Object.values(selectUserModule(state).entities);