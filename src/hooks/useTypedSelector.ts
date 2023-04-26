import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";

import { TypeRootState } from '../features/store'

const useTypedSelector : TypedUseSelectorHook<TypeRootState> = useSelector

export default useTypedSelector