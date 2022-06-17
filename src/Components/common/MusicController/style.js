export const musicControllerStyle = {
    wrapper: {
        marginTop: '5rem !important',

        "& .musicContorollerContent":{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
    
            '& .timer' : {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
            },

            "& svg" : {
                marginTop : '1rem',
                fontSize : '5rem',
                
            },

            "& .nextBtn" : {
                transform : 'rotate(180deg)',
            }
          
        },
    },
  

  
   

  
}