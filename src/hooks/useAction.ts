import { bindActionCreators } from "redux"

import { todoActions } from '@/features/slices/todosSlice'
import { appActions } from "@/features/slices/appSlice"

import { useDispatch } from "react-redux"

const actions = {
    ...todoActions,
    ...appActions
}

const useAction = function(){
    const dispatch = useDispatch()

    return bindActionCreators(actions, dispatch)
}

export default useAction