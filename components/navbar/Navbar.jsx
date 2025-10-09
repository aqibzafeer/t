export default function Navbar() {
    return (    
    <>
    <div className="hidden md:flex items-center space-x-1">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/products">Products</NavLink>
        <NavLink href="/contact">Contact</NavLink>
    </div>
    </>
    )
}