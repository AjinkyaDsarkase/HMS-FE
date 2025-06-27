import React from 'react'

function LogoHead() {
  return (
    <>
      <div style={{
        width : '100%' ,
        height:'55px',
        border:'1px solid white',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'black',
        }}>
        <img src="https://public-assets.envato-static.com/assets/logos/envato_market-dd390ae860330996644c1c109912d2bf63885fc075b87215ace9b5b4bdc71cc8.svg" alt="" style={{width:'200px',height:'20px'}}/>
        <button style={{
            // border:'none',
            // outline:'none',
            borderRadius:'10px',
            height:'40px',
            width:'100px',
            marginRight:'20px',
            fontSize:'14px',
            backgroundColor:'#82b440',
            color:'white'
        }}>Buy Now</button>
      </div>
    </>
  )
}

export default LogoHead