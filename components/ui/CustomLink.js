import { makeStyles, Typography } from '@material-ui/core';
import NextLink from 'next/link';

const useStyles = makeStyles((theme) => ({
    link: {
        color: 'white',
        textDecoration: "underline",
        cursor: 'pointer'
    }
  })
  )
  

export const CustomLink = ({ href, children, ...props }) => {
    const classes = useStyles();
    return (
        <NextLink href={href}>
            <Typography {...props} component="a" className={classes.link} >
                {children}
            </Typography>
        </NextLink>
    );
}