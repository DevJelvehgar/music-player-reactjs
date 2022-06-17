export const sidebarStyle = {

    container: {
      backgroundColor: 'rgba(217,217,217,0.25)',
        height: '100vh',
        borderRight : '1px solid #b3b3b3',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',

        '& ul': {
            marginTop: '1rem',
            flexGrow: '1',
            justifyContent: 'center',
            alignItems: 'center',

            '& li': {
               display: 'flex',
               alignItems: 'center',
               margin: '1rem !important',
               verticalAlign: 'center',
               '& a': {
                textDecoration: 'none',
                color: '#212121'
               },
               
            }
        }
    },
    profile : {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '2rem',
        flexGrow: '1',
      
    },

}