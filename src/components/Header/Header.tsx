import { Box, Button, ButtonGroup } from "@mui/material"
import { useSelector } from "react-redux"
import { useAppDispatch } from "../../hooks/hooks"
import { actions } from "../../redux/app-reducer"
import { tasksSelector } from "../../selectors/app-selectors"

const Header = () => {
    const dispatch = useAppDispatch()
    const tasks = useSelector(tasksSelector)

    const completedTask = tasks.filter(el => el.isCompleted)

    const changeType = (type: string) => {
        dispatch(actions.changeType(type))
    }

    return <Box sx={{ padding: 1, height: '50px', backgroundColor: '#ffffe0' }}>
        <ButtonGroup variant="outlined" aria-label="outlined button group" >
            <Button
                sx={{
                    backgroundColor: '#a259ff', color: 'black', '&:hover': { backgroundColor: '#1abcfe' }
                }}
                onClick={() => { changeType('ALL') }}
            >
                Все: {tasks.length}
            </Button>
            <Button
                sx={{
                    backgroundColor: '#0acf83', color: 'black', '&:hover': { backgroundColor: ' #44944A' }
                }}
                onClick={() => { changeType('COMPLETED') }}
            >
                Выполнено: {completedTask.length}
            </Button>
            <Button
                sx={{
                    backgroundColor: '#ff7262', color: 'black', '&:hover': { backgroundColor: '#f24e1e' }
                }}
                onClick={() => { changeType('NOT_COMPLETED') }}
            >
                Невыполнено: {tasks.length - completedTask.length}
            </Button>
        </ButtonGroup>
    </Box>
}

export default Header