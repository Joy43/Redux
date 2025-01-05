import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from './store'; // Adjust the path to your store as needed

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
