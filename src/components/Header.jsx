import logo from '/images/troll-face.png'
const Header = () => {
  return (
    <header className="bg-white shadow-md">
        {/* Container */}
        <div className="container mx-auto px-4">
            {/* Wrapper */}
            <div className="flex place-items-center justify-center gap-2 py-4">
                <img src={logo} alt="logo" className='h-10 '/>
                <p className='text-2xl font-medium'>Meme Generator</p>
            </div>
        </div>
    </header>
  )
}

export default Header