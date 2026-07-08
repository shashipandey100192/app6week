import xyz from '../images/10.jpg';

function Mypage()
{
    return  <div><h1>this is web page</h1> <h2>sdfjhjsdfhjsdf</h2></div>
}

export default Mypage

function Mypage1()
{
    return <h3>this is heading</h3>
}

export {Mypage1}

export function Mypage3()
{
    return(
        <div>
            <h1 className="first">this is fweb page</h1>
            <ol>
                <li style={{backgroundColor:"red",fontSize:'50px',"margin-left":"200px"}}>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
                <li>Home</li>
            </ol>
            <img src="https://www.avikalp.com/cdn/shop/products/MWZ3786_wallpaper3.jpg?v=1746035990" width="200" alt="ksjdf"/>
            <img src={xyz} width={300} alt='ksdjf'/>
        </div>
    )
}




