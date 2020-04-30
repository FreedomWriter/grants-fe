import React from 'react'
import { useStyles } from './ApplicantProfile.styles'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const BioCard = () => {
  const classes = useStyles();
  return (
    <>
      <Grid className={classes.bioname}>
        <h2>Org Name</h2>
        <h4>Sector: sector name</h4>
      </Grid>
      <Paper className={classes.profilepaper} >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet venenatis urna cursus. Gravida neque convallis a cras semper. Habitasse platea dictumst quisque sagittis purus sit amet volutpat. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Porttitor eget dolor morbi non arcu risus quis varius. Lectus proin nibh nisl condimentum id venenatis a condimentum vitae. At tellus at urna condimentum mattis. Vitae suscipit tellus mauris a diam maecenas. Donec massa sapien faucibus et molestie ac.</p>

        <p>Hendrerit gravida rutrum quisque non tellus orci. Enim diam vulputate ut pharetra sit amet aliquam id. Tempus quam pellentesque nec nam aliquam sem. Id leo in vitae turpis massa sed elementum. Amet est placerat in egestas erat imperdiet. Sed nisi lacus sed viverra. Varius sit amet mattis vulputate. Pretium aenean pharetra magna ac. Amet dictum sit amet justo donec enim diam vulputate. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Malesuada proin libero nunc consequat. Netus et malesuada fames ac turpis egestas. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultricies leo integer malesuada nunc. Pretium viverra suspendisse potenti nullam ac tortor. Adipiscing elit ut aliquam purus. Laoreet non curabitur gravida arcu ac tortor dignissim convallis.</p>
      </Paper>
    </>
  )
}

export default BioCard

