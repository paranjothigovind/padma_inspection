import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    },
    toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    menuButtonHidden: {
      display: 'none',
    },
    title: {
      flexGrow: 1,
    },
    drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: 'flex',
      overflow: 'auto',
      flexDirection: 'column',
    },
    fixedHeight: {
      height: 240,
    },
    divider: {
        margin: `${theme.spacing.unit * 2}px 0`,
        backgroundColor: 'rgba(0,0,0, 0.1)',
        width: '100%',
        height: '1px',
        background: 'none'
      },
      label: {
        fontSize: '1.2rem',
        fontWeight: 500
      },
      column: {
        paddingLeft: '30px'
      },
  }));


const Dashboard = () => {

    const classes = useStyles();


    return(
        <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Card className={classes.root} variant="outlined">
            <CardContent>
              <h4>AQL Parameter Master</h4>
              <Divider className={classes.divider} />
              <Grid className="d-flex justify-content-between algn-items-center" container spacing={3}>
                <Grid item xs={6}>
                <div class="form-group">
                  <label className={classes.label}>Pieces for Audit</label>
                  <input  class="form-control" placeholder="Pieces for Audit"/>
                </div>
                <div class="form-group">
                  <label className={classes.label}>Sample Size</label>
                  <input  class="form-control" placeholder="Sample Size"/>
                </div>
                <FormControlLabel
                  control={<Checkbox checked={true} color="primary" name="checkedA" />}
                  label="Active"
                />
                </Grid>
                <Grid className={classes.column} item xs={6}>
                  <Grid container>
                    <Grid item xs={4}>
                      <div class="form-group">
                        <label className={classes.label}>Major AQL 1.5</label>
                        <input  class="form-control" placeholder="Major AQL 1.5"/>
                      </div>
                      <div class="form-group">
                        <label className={classes.label}>Minor AQL 1.5</label>
                        <input  class="form-control" placeholder="Minor AQL 1.5"/>
                      </div>
                    </Grid>
                    <Grid item xs={4} className={classes.column} >
                      <div class="form-group">
                        <label className={classes.label}>Major AQL 2.5</label>
                        <input  class="form-control" placeholder="Major AQL 2.5"/>
                      </div>
                      <div class="form-group">
                        <label className={classes.label}>Minor AQL 2.5</label>
                        <input  class="form-control" placeholder="Minor AQL 2.5"/>
                      </div>
                    </Grid>
                    <Grid item xs={4} className={classes.column} >
                      <div class="form-group">
                        <label className={classes.label}>Major AQL 4.0</label>
                        <input  class="form-control" placeholder="Major AQL 4.0"/>
                      </div>
                      <div class="form-group">
                        <label className={classes.label}>Minor AQL 4.0</label>
                        <input  class="form-control" placeholder="Minor AQL 4.0"/>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">Submit</Button>
            </CardActions>
          </Card>
      </main>
    )
}

export default Dashboard;