import { Grid, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react'
import { useAppDispatch } from '../../hooks/hooks'
import { actions } from '../../redux/app-reducer'

const AddButton = () => {
  const [task, setTask] = useState('')
  const dispatch = useAppDispatch()

  const changeTask = (evt: any) => {
    if (evt.currentTarget.value.length < 20) {
      setTask(evt.currentTarget.value)
    }
  }

  const addTask = () => {
    if (task !== '') {
      dispatch(actions.addTask(task))
      setTask('')
    }
  }

  return (
    <Grid item xs={12} sm={4} md={3}>

      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: '#a259ff',
          height: 200,
          borderRadius: 50,
        }}
      >
        <TextField
          id="task"
          sx={{ color: '#ffffff', width: '60%' }}
          value={task}
          onChange={changeTask}
          inputProps={{'data-testid': 'Input'}}
        />
        <AddIcon
          sx={{
            color: '#ffffff',
            fontSize: '100px',
            cursor: 'pointer',
            '&:hover': {
              color: '#ff7262'
            }
          }}
          onClick={addTask}
          data-testid='Button'
        />
      </Grid>
    </Grid>
  )
}

export default AddButton