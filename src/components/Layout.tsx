import { Box } from "@mui/material"
import { Container } from "@mui/system"
import React from "react"

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ marginTop: 4, marginBottom: 4 }}>
        {children}
      </Container>
    </Box>
  )
}

export default Layout
