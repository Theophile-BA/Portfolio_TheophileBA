import React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'

export default function () {
  const buttons = [
    <Button key="homepage">
      <div>HomePage</div>
    </Button>,
    <Button key="about">
      <div>About</div>
    </Button>,
    <Button key="project">
      <div>Project</div>
    </Button>,
    <Button key="contact">
      <div>Contact</div>
    </Button>,
  ]
  return (
    <>
      <Box>
        <div className="bg-red-800 py-5 py-3 border-yellow-500 ">
          <div className="m-5">
            <ButtonGroup
              className="pt-5"
              orientation="vertical"
              aria-label="vertical"
              variant="contained"
            >
              {buttons}
            </ButtonGroup>
          </div>
        </div>
      </Box>
    </>
  )
}
