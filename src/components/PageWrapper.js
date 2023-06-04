import * as React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
// import backgroundImage from '../../public/imagenes/logologin';

function PageWrapper({ children }) {
    const styles = {
        bgiSignIn: {
          backgroundImage: `url(${process.env.PUBLIC_URL}/imagenes/logologin.JPG)`
        }
      };
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // This makes the box take up the full height of the view
                width: '100%', // This makes the box take up the full width of the view
                pt: 3,
                pb: 3,
               
                        
            }}
            
            
        >
            <Paper
                sx={{
                    width: '90%', // This makes the paper take up 80% of the width of its container
                    height: '90%', // This makes the paper take up 80% of the height of its container
                    overflow: 'auto', // This allows the content to scroll if it overflows the height of the paper
                    p: 2,
                    backgroundImage: `url(${process.env.PUBLIC_URL}/imagenes/logologin.JPG)`
                }}
                
            >
                {children}
            </Paper>
        </Box>
    );
}

export default PageWrapper;
