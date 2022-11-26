import * as React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Backdrop as MUIBackdrop } from '@material-ui/core'
import CircularProgress from '@material-ui/core/CircularProgress'

const useMxSpinnerStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#000000',
      backgroundColor: 'rgba(255,255,255,0.5)'
    }
  })
)

export interface MxSpinnerProps {
  open?: boolean
}

export const MxSpinner: React.FC<MxSpinnerProps> = (props) => {
  const classes = useMxSpinnerStyles()
  const { open } = props
  return (
    <MUIBackdrop
      className={classes.backdrop}
      open={open !== undefined ? open : true}
    >
      <CircularProgress color='inherit' />
    </MUIBackdrop>
  )
}
