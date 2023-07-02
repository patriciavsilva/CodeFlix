import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Switch,
  TextField,
  Typography,
} from "@mui/material"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import { selectCategoryByid } from "./categorySlice"

export default function CategoryEdit() {
  const id = useParams().id || ""
  const category = useAppSelector((state) => selectCategoryByid(state, id))
  const [isDisabled, setIsDisabled] = useState(false)

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setIsDisabled(false)
  }

  const handleToggle = (e: any) => {
    setIsDisabled(true)
  }

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant="h4">Edit Category</Typography>
          </Box>
        </Box>
        <Box p={2}>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    label="Name"
                    name="name"
                    value={category.name}
                    disabled={isDisabled}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    label="Description"
                    name="description"
                    value={category.description}
                    disabled={isDisabled}
                    onChange={handleChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        name="is_active"
                        color="secondary"
                        onChange={handleToggle}
                        checked={category.is_Active}
                        inputProps={{ "aria-label": "controlled" }}
                      />
                    }
                    label="Active"
                  />
                </FormGroup>
              </Grid>
              <Grid item xs={12}>
                <Box display={"flex"} gap={2}>
                  <Button variant="contained" component={Link} to="/categories">
                    Back
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    disabled={isDisabled}
                  >
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Paper>
    </Box>
  )
}
