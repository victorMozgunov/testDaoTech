import { Box, Grid, Typography } from "@mui/material"
import AddButton from "../AddButton/AddButton"
import CloseIcon from '@mui/icons-material/Close'
import { useSelector } from "react-redux"
import { tasksSelector, typeSelector } from "../../selectors/app-selectors"
import { useAppDispatch } from "../../hooks/hooks"
import { actions } from "../../redux/app-reducer"

const ToDoList = () => {
    const dispatch = useAppDispatch()
    let tasks = useSelector(tasksSelector)
    const type = useSelector(typeSelector)

    const changeTask = (id: number) => {
        dispatch(actions.changeTask(id))
    }
    const deleteTask = (id: number) => {
        dispatch(actions.deleteTask(id))
    }

    if (type === 'COMPLETED') tasks = tasks.filter(el => el.isCompleted)
    if (type === 'NOT_COMPLETED') tasks = tasks.filter(el => !el.isCompleted)

    return (
        <Box sx={{ padding: 1 }}>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={1} columnSpacing={1}>
                    <AddButton />
                    {tasks.map(el => {
                        if (el.isCompleted) {
                            return (
                                <Grid item xs={12} sm={4} md={3}>
                                    <Box
                                        sx={{
                                            backgroundColor: '#0acf83',
                                            height: 200,
                                            borderRadius: 50,
                                        }}
                                    >
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="flex-start"
                                        >
                                            <CloseIcon
                                                sx={{
                                                    fontSize: 30,
                                                    cursor: 'pointer'
                                                }}
                                                onClick={() => deleteTask(el.id)}
                                            />
                                        </Grid>
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <Typography
                                                sx={{
                                                    width: '70%', wordWrap: 'break-word',
                                                    color: 'white', cursor: 'pointer'
                                                }}
                                                onClick={() => changeTask(el.id)}
                                            >
                                                {el.header}
                                            </Typography>
                                        </Grid>
                                    </Box>
                                </Grid>
                            )
                        } else {
                            return (
                                <Grid item xs={12} sm={4} md={3}>
                                    <Box
                                        sx={{
                                            backgroundColor: '#ff7262',
                                            height: 200,
                                            borderRadius: 50,
                                        }}
                                    >
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="flex-end"
                                            alignItems="flex-start"
                                        >
                                            <CloseIcon
                                                sx={{
                                                    fontSize: 30,
                                                    cursor: 'pointer'
                                                }}
                                                onClick={() => deleteTask(el.id)}
                                            />
                                        </Grid>
                                        <Grid
                                            container
                                            direction="row"
                                            justifyContent="center"
                                            alignItems="center"
                                        >
                                            <Typography
                                                sx={{
                                                    width: '70%', wordWrap: 'break-word',
                                                    color: 'white', cursor: 'pointer'
                                                }}
                                                onClick={() => changeTask(el.id)}
                                            >
                                                {el.header}
                                            </Typography>
                                        </Grid>
                                    </Box>
                                </Grid>
                            )
                        }
                    })}
                </Grid>
            </Box>
        </Box >
    )
}

export default ToDoList