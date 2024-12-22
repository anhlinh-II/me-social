import { useAppSelector } from "../redux/hook";

export const useUser = () => {
    return useAppSelector(state => state.account.user);
};
