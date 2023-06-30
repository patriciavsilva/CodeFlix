import { Box, Button, IconButton, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { useAppSelector } from "../../app/hooks"
import { selectCategories } from "./categorySlice"
import DeleteIcon from "@mui/icons-material/Delete"
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRenderCellParams,
  GridToolbar,
} from "@mui/x-data-grid"

export default function CategoryList() {
  const categories = useAppSelector(selectCategories)

  const rows: GridRowsProp = categories.map((category) => ({
    id: category.id,
    name: category.name,
    description: category.description,
    is_Active: category.is_Active,
    created_At: new Date(category.created_At).toLocaleDateString("pt-BR"),
    updated_At: category.updated_At,
  }))
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
    },
    {
      field: "is_Active",
      headerName: "Active",
      flex: 1,
      type: "boolean",
      renderCell: renderIsActiveCell,
    },
    {
      field: "created_At",
      headerName: "Created At",
      flex: 1,
    },
    {
      field: "id",
      headerName: "Actions",
      flex: 1,
      renderCell: renderActionsCell,
    },
  ]

  function renderActionsCell(params: GridRenderCellParams) {
    return (
      <IconButton
        color="secondary"
        onClick={() => console.log("click")}
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    )
  }

  function renderIsActiveCell(rowData: GridRenderCellParams) {
    return (
      <Typography color={rowData.value ? "primary" : "secondary"}>
        {rowData.value ? "Active" : "Inactive"}
      </Typography>
    )
  }

  return (
    <Box maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/category/new"
          style={{ marginBottom: "1rem" }}
        >
          New Category
        </Button>
      </Box>
      <div>
        <DataGrid
          components={{ Toolbar: GridToolbar }}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps: { debounceMs: 500 },
            },
          }}
          rows={rows}
          columns={columns}
          disableColumnSelector={true}
          disableColumnFilter={true}
          disableDensitySelector={true}
          disableRowSelectionOnClick={true}
          pageSizeOptions={[2, 10, 15, 25]}
        />
      </div>
    </Box>
  )
}
