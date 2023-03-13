import Menu from "../Menu/Menu";

export default function Header(){ 
    return (
    <header className="absolute z-50">
       <a href='/' className="fixed top-5 left-5 text-1.7vw font-arial
      hover:text-yellow-200 text-brandcream -tracking-.04em">IS~Y</a> 
      <Menu/>
    </header>
    )
}